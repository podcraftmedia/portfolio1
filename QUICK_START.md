# ⚡ Quick Start Guide

Get your portfolio live in 3 simple steps!

---

## 🎯 Before You Start

Your portfolio is **100% ready to deploy**. You just need to:
1. Customize content with your information
2. Test locally
3. Deploy

---

## Step 1: Customize (30 minutes)

### A. Update Contact Info

Edit `sections/ContactSection.tsx`:
- Line 11: Change email in `copyEmail` function
- Line 64: Update email display
- Line 88: Update phone number
- Line 116: Update LinkedIn URL
- Line 148: Update location

Edit `components/ui/Footer.tsx`:
- Line 86: Update email
- Line 93: Update LinkedIn URL

### B. Add Your Stats

Edit `sections/HeroSection.tsx` (Line 10-16):
```typescript
const stats = [
  { value: YOUR_NUMBER, suffix: "+", label: "Your Metric", icon: "🎯" },
  // Update all 6 stats
];
```

### C. Add Your CV

Replace `/public/cv.pdf` with your actual CV PDF file

### D. Quick Video Setup

Option 1 - YouTube (easiest):
```typescript
// sections/VideoSection.tsx, line ~40
embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID"
```

Option 2 - Upload later and use placeholders for now

---

## Step 2: Test (10 minutes)

```bash
# Install and run
cd /projects/sandbox/portfolio
npm install
npm run dev
```

Visit: http://localhost:3000

### Check These:
- [ ] All text displays correctly
- [ ] Contact info is correct
- [ ] CV downloads
- [ ] Stats show right numbers
- [ ] Mobile responsive works
- [ ] All animations smooth

---

## Step 3: Deploy (15 minutes)

### Option A: Vercel (Recommended - Easiest)

1. **Create GitHub Repo**
   ```bash
   cd /projects/sandbox/portfolio
   git init
   git add .
   git commit -m "My portfolio"
   ```

2. **Push to GitHub**
   - Create new repo on github.com
   - Copy the git remote add command
   - Push code:
   ```bash
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

3. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your repo
   - Click "Deploy"
   - Done! 🎉

### Option B: Vercel CLI (Faster)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd /projects/sandbox/portfolio
vercel

# Production
vercel --prod
```

---

## 🎉 That's It!

Your portfolio is now live at:
- `your-project.vercel.app` (Vercel URL)
- Or your custom domain (if configured)

---

## 🔧 Common Customizations

### Change Accent Color
Edit `app/globals.css` (line 11):
```css
--accent: #00ff88;  /* Change to your color */
```

### Update Live Status Widget
Edit `sections/HeroSection.tsx` (line ~85-100):
```typescript
<span>→ Your current project</span>
<span>→ Your current book</span>
```

### Add More Videos
Edit `sections/VideoSection.tsx` - add objects to `videos` array

---

## 📚 Full Documentation

For detailed guides:
- **SETUP.md** - Complete customization guide
- **DEPLOYMENT.md** - All deployment options
- **COMMANDS.md** - CLI command reference
- **README.md** - Technical overview

---

## ⚡ Super Quick Deploy (5 minutes)

If you just want to see it live RIGHT NOW:

```bash
cd /projects/sandbox/portfolio

# Deploy without customization (you can update later)
npm i -g vercel
vercel

# Your site is live!
```

Then customize and redeploy:
```bash
# Make changes
# Then:
vercel --prod
```

---

## 🆘 Need Help?

### Build Fails?
```bash
npm run build
# Read error message
# Usually it's a missing import or TypeScript error
```

### Port Already in Use?
```bash
lsof -ti :3000 | xargs kill -9
npm run dev
```

### Something Looks Wrong?
```bash
# Clear cache and restart
rm -rf .next
npm run dev
```

---

## 📊 Performance Tips

After deploying, test your site:

1. **Lighthouse** (Chrome DevTools)
   - Right-click → Inspect
   - Lighthouse tab → Run audit
   - Aim for 90+ on all metrics

2. **PageSpeed Insights**
   - Visit [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your URL
   - Check mobile & desktop scores

---

## 🎯 Deployment Checklist

Before announcing your site:

- [ ] Updated all personal info
- [ ] Added your CV
- [ ] Tested on mobile
- [ ] Tested in Chrome, Safari, Firefox
- [ ] Checked all links work
- [ ] Videos play correctly
- [ ] Email copy works
- [ ] Custom domain set up (optional)
- [ ] Analytics added (optional)
- [ ] Lighthouse score checked

---

## 🚀 Go Live!

1. Customize your info (30 min)
2. Test locally (10 min)
3. Deploy to Vercel (5 min)
4. **Share your new portfolio!**

Total time: **~45 minutes** from start to live!

---

## 📞 What's Next?

After going live:
- Add to LinkedIn profile
- Update resume with URL
- Share on social media
- Add to email signature
- Submit to portfolio sites (Awwwards, etc.)

---

**Your portfolio is ready! Go make it yours! 🎨**
