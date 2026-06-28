# Command Reference

Quick reference for all available npm commands and common development tasks.

---

## 📦 NPM Scripts

### Development
```bash
npm run dev
```
Starts development server on http://localhost:3000 with:
- Hot reload
- Fast refresh
- Source maps
- Detailed error messages

### Production Build
```bash
npm run build
```
Creates optimized production build:
- Minified code
- Image optimization
- Static page generation
- Bundle analysis

### Production Server
```bash
npm run start
```
Starts production server (must build first):
```bash
npm run build && npm start
```

### Linting
```bash
npm run lint
```
Runs ESLint to check code quality and catch errors.

---

## 🔧 Development Workflow

### Start Development
```bash
npm run dev
```
Visit: http://localhost:3000

### Test Production Build Locally
```bash
npm run build
npm start
```
Visit: http://localhost:3000

### Check for Errors
```bash
npm run lint
npm run build  # Build will fail if there are TypeScript errors
```

---

## 📦 Package Management

### Install Dependencies
```bash
npm install
```

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update all to latest
npm update

# Update specific package
npm update package-name
```

### Add New Package
```bash
# Production dependency
npm install package-name

# Dev dependency
npm install --save-dev package-name
```

### Remove Package
```bash
npm uninstall package-name
```

### Audit Security
```bash
npm audit
npm audit fix
```

---

## 🧹 Cleanup Commands

### Clear Next.js Cache
```bash
rm -rf .next
```

### Clear All Build Artifacts
```bash
rm -rf .next node_modules package-lock.json
npm install
```

### Fresh Install
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

## 🐛 Debugging

### Verbose Build Output
```bash
npm run build -- --debug
```

### Check Build Info
```bash
npm run build
# Look for:
# - Bundle sizes
# - Static pages generated
# - Warnings/errors
```

### Type Checking Only
```bash
npx tsc --noEmit
```

### Check Node/NPM Versions
```bash
node -v
npm -v
```

---

## 🚀 Deployment Commands

### Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy preview
vercel

# Deploy production
vercel --prod
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy preview
netlify deploy

# Deploy production
netlify deploy --prod
```

---

## 🧪 Testing Commands

### Manual Testing Checklist
```bash
# 1. Start dev server
npm run dev

# 2. Check these URLs:
# http://localhost:3000/           - Homepage
# http://localhost:3000/sitemap.xml - Sitemap
# http://localhost:3000/robots.txt  - Robots

# 3. Test production build
npm run build
npm start

# 4. Check lighthouse score
# Open Chrome DevTools > Lighthouse > Run
```

---

## 📊 Performance Analysis

### Bundle Analysis
```bash
# Install analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.ts:
# const withBundleAnalyzer = require('@next/bundle-analyzer')({
#   enabled: process.env.ANALYZE === 'true'
# })
# module.exports = withBundleAnalyzer(nextConfig)

# Analyze
ANALYZE=true npm run build
```

### Build Size Check
```bash
npm run build
# Check terminal output for page sizes
```

---

## 🔄 Git Commands

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
```

### Regular Updates
```bash
git status
git add .
git commit -m "Your commit message"
git push
```

### Create Branch
```bash
git checkout -b feature-name
# Make changes
git add .
git commit -m "Feature: description"
git push -u origin feature-name
```

### Merge to Main
```bash
git checkout main
git merge feature-name
git push
```

---

## 🔐 Environment Variables

### Development
```bash
# Create .env.local
cp .env.example .env.local
# Edit .env.local with your values

# Start dev server (auto-loads .env.local)
npm run dev
```

### Production (Vercel)
```bash
# Set via dashboard or CLI
vercel env add VARIABLE_NAME
```

---

## 💡 Common Tasks

### Update Personal Info
1. Edit files in `sections/` folder
2. Test: `npm run dev`
3. Build: `npm run build`
4. Deploy: `git push` (if auto-deploy enabled)

### Add New Section
1. Create component in `sections/`
2. Import in `app/page.tsx`
3. Add navigation link in `components/ui/Navbar.tsx`
4. Test and build

### Change Colors
1. Edit `app/globals.css` (lines 8-12)
2. Update `--accent` and `--accent-hover`
3. Reload dev server

### Optimize Images
```bash
# Images in /public/ are auto-optimized by Next.js
# Just ensure they're in /public/images/
# Use Next.js <Image> component for best performance
```

---

## 🎯 Pre-Deploy Checklist

```bash
# 1. Lint check
npm run lint

# 2. Build check
npm run build

# 3. Start production locally
npm start

# 4. Manual testing
# - Test all links
# - Check mobile responsive
# - Verify CV download
# - Test video playback

# 5. Performance check
# - Run Lighthouse
# - Check bundle sizes
# - Test loading speed

# 6. Deploy
git push
# or
vercel --prod
```

---

## ⚡ Quick Tips

### Fastest Development Workflow
```bash
npm run dev
# Keep terminal open
# Edit files
# Auto-reload happens
```

### Quick Production Test
```bash
npm run build && npm start
```

### Quick Deploy (if git connected)
```bash
git add . && git commit -m "Update" && git push
```

### Check What's Running
```bash
# macOS/Linux
lsof -i :3000

# Kill process on port 3000
kill -9 $(lsof -t -i:3000)
```

---

## 📞 Help

### Get Help
```bash
npm run dev --help
npm run build --help
next --help
```

### Version Info
```bash
npm list
npm list --depth=0  # Top-level only
```

### Next.js Info
```bash
npx next info
```

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti :3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
# Check TypeScript errors
npx tsc --noEmit

# Clear cache and rebuild
rm -rf .next
npm run build
```

### Out of Memory
```bash
# Increase Node memory
NODE_OPTIONS='--max-old-space-size=4096' npm run build
```

---

That's it! For more details, see:
- README.md - Project overview
- SETUP.md - Customization guide
- DEPLOYMENT.md - Deployment guide
