# Deployment Guide

Step-by-step guide to deploy your portfolio to various platforms.

---

## 🚀 Option 1: Vercel (Recommended)

Vercel is built by the creators of Next.js and offers the best experience.

### Method A: Deploy via GitHub (Automatic)

1. **Create GitHub Repository**
   ```bash
   cd /projects/sandbox/portfolio
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   ```

2. **Push to GitHub**
   ```bash
   # Create a new repo on github.com first, then:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Configure:
     - Framework Preset: **Next.js**
     - Root Directory: `./`
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click **Deploy**

4. **Automatic Updates**
   - Every push to `main` branch auto-deploys
   - Pull requests get preview URLs
   - No configuration needed!

### Method B: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd /projects/sandbox/portfolio
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? portfolio (or your choice)
# - Directory? ./
# - Override settings? No

# Production deployment
vercel --prod
```

### Add Custom Domain (Vercel)

1. Go to project dashboard
2. Click "Settings" → "Domains"
3. Add your domain
4. Update DNS records at your registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

---

## 🌐 Option 2: Netlify

### Method A: Via GitHub

1. **Push to GitHub** (same as Vercel)

2. **Deploy on Netlify**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import existing project"
   - Connect to GitHub
   - Select repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Click **Deploy**

### Method B: Manual Upload

```bash
# Build locally
npm run build

# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Production
netlify deploy --prod
```

### Add Custom Domain (Netlify)

1. Go to "Domain settings"
2. Add custom domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

---

## ☁️ Option 3: AWS Amplify

1. **Push to GitHub**

2. **Deploy on AWS Amplify**
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Connect GitHub
   - Select repository
   - Build settings:
     ```yaml
     version: 1
     frontend:
       phases:
         preBuild:
           commands:
             - npm ci
         build:
           commands:
             - npm run build
       artifacts:
         baseDirectory: .next
         files:
           - '**/*'
       cache:
         paths:
           - node_modules/**/*
     ```
   - Save and deploy

---

## 🐳 Option 4: Docker + Any Platform

### Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### Deploy to Digital Ocean, Railway, etc.

```bash
# Build image
docker build -t portfolio .

# Run locally
docker run -p 3000:3000 portfolio

# Push to registry
docker tag portfolio your-registry/portfolio
docker push your-registry/portfolio
```

---

## 📊 Option 5: Cloudflare Pages

1. **Push to GitHub**

2. **Deploy on Cloudflare Pages**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect GitHub
   - Select repository
   - Build configuration:
     - Framework preset: **Next.js**
     - Build command: `npm run build`
     - Build output: `.next`
   - Environment variables (if needed):
     ```
     NODE_VERSION=18
     ```
   - Deploy

---

## 🔐 Environment Variables

If you need environment variables:

### Vercel
1. Project Settings → Environment Variables
2. Add variables from `.env.example`
3. Redeploy

### Netlify
1. Site Settings → Build & Deploy → Environment
2. Add variables
3. Trigger new deploy

### Others
- Check platform-specific documentation
- Most have ENV variable UI in dashboard

---

## 🌍 Custom Domain Setup

### Buy a Domain

Popular registrars:
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)
- [Cloudflare Registrar](https://www.cloudflare.com/products/registrar/)

### Configure DNS

After adding domain to your platform, update DNS:

**For Root Domain (@):**
- Vercel: A record → 76.76.21.21
- Netlify: A record → 75.2.60.5
- Cloudflare Pages: CNAME → your-site.pages.dev

**For www:**
- All platforms: CNAME → platform-provided URL

**Wait 24-48 hours for DNS propagation**

---

## 📈 Add Analytics (Optional)

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Create `app/GoogleAnalytics.tsx`:
   ```typescript
   export default function GoogleAnalytics() {
     return (
       <>
         <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
         <script dangerouslySetInnerHTML={{
           __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', 'G-XXXXXXXXXX');
           `
         }} />
       </>
     )
   }
   ```

3. Add to `app/layout.tsx`:
   ```typescript
   import GoogleAnalytics from './GoogleAnalytics'
   
   export default function Layout({ children }) {
     return (
       <html>
         <body>
           <GoogleAnalytics />
           {children}
         </body>
       </html>
     )
   }
   ```

### Vercel Analytics

```bash
npm i @vercel/analytics

# Add to app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

<Analytics />
```

---

## ✅ Post-Deployment Checklist

After deploying:

- [ ] Site loads at custom domain
- [ ] SSL certificate active (HTTPS)
- [ ] All images load
- [ ] CV downloads work
- [ ] Videos play correctly
- [ ] Contact links work
- [ ] Mobile responsive
- [ ] Fast load times
- [ ] No console errors
- [ ] Sitemap accessible: /sitemap.xml
- [ ] Robots.txt accessible: /robots.txt

### Test Performance

1. **Lighthouse Test**
   - Open Chrome DevTools
   - Go to "Lighthouse" tab
   - Run audit
   - Aim for 90+ scores

2. **PageSpeed Insights**
   - Visit [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your URL
   - Check mobile & desktop scores

3. **GTmetrix**
   - Visit [gtmetrix.com](https://gtmetrix.com)
   - Test your URL
   - Review recommendations

---

## 🐛 Common Deployment Issues

### Build Fails

```bash
# Locally test production build
npm run build
npm start

# Check Node version
node -v  # Should be 18+

# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Check image paths (use `/` for public folder)
- Verify Next.js image optimization is enabled
- Check next.config.ts image domains

### Videos Not Playing

- Ensure HTTPS for embedded videos
- Check CORS headers for self-hosted videos
- Test embed URLs independently

### Slow Performance

- Enable compression in next.config.ts ✓
- Optimize images with WebP/AVIF ✓
- Reduce 3D particle count further (mobile)
- Check Lighthouse suggestions

### 404 Errors

- Verify all file paths
- Check public folder structure
- Ensure cv.pdf exists
- Review next.config.ts rewrites/redirects

---

## 🔄 Updating Your Site

### Vercel/Netlify (via Git)

```bash
# Make changes locally
# Test: npm run dev

# Commit and push
git add .
git commit -m "Update: description of changes"
git push

# Automatic deployment triggers
```

### Manual Updates

```bash
# Rebuild
npm run build

# Redeploy via CLI
vercel --prod
# or
netlify deploy --prod
```

---

## 📞 Support Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs**: [docs.netlify.com](https://docs.netlify.com)
- **Next.js Deployment**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- **DNS Help**: [dnschecker.org](https://dnschecker.org)

---

## 🎉 Your Site is Live!

Share it:
- LinkedIn profile
- Resume/CV
- Email signature  
- Social media
- Portfolio platforms (Behance, Dribbble)

Monitor:
- Analytics dashboard
- Error tracking (Sentry)
- Performance scores
- User feedback

---

Happy deploying! 🚀
