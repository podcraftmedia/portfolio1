# Setup Guide

Complete guide to customize and deploy your portfolio website.

## 🎯 Quick Start Checklist

- [ ] Update personal information
- [ ] Add your CV PDF
- [ ] Add video content
- [ ] Customize colors (optional)
- [ ] Update metadata/SEO
- [ ] Test locally
- [ ] Deploy to production

---

## 1️⃣ Update Personal Information

### Contact Details

Edit **`sections/ContactSection.tsx`**:

```typescript
// Line ~180-185 - Email
onClick={copyEmail}  // Change email in copyEmail function
// Update: navigator.clipboard.writeText("your-email@example.com");

// Line ~200 - Email display
<p>your-email@example.com</p>

// Line ~210 - Phone
<a href="tel:+1234567890">
  <p>+1 234 567 890</p>

// Line ~230 - LinkedIn
<a href="https://linkedin.com/in/your-profile">

// Line ~260 - Location
<p>Your City, Country</p>
<p>Remote-First · Global Opportunities</p>
```

Edit **`components/ui/Footer.tsx`**:

```typescript
// Line ~80 - Email
<a href="mailto:your-email@example.com">

// Line ~90 - LinkedIn  
<a href="https://linkedin.com/in/your-profile">
```

### Hero Section

Edit **`sections/HeroSection.tsx`**:

```typescript
// Line ~10-15 - Update stats
const stats = [
  { value: YOUR_VALUE, suffix: "+", label: "Your Metric", icon: "🎯" },
  // Update all 6 stats with your real numbers
];

// Line ~85-100 - Live Status Widget
<span>→ Your Current Project</span>
<span>→ "Your Current Book"</span>
<span>→ Your Current Podcast</span>
<span>→ Your Tools</span>
```

### Metadata & SEO

Edit **`app/layout.tsx`**:

```typescript
// Line ~15-25
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your compelling description",
  keywords: ["Your", "Keywords", "Here"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Your Title",
    description: "Your tagline",
  },
};
```

---

## 2️⃣ Add Your CV

1. **Convert your CV to PDF** (if not already)
2. **Rename it to `cv.pdf`**
3. **Replace** `/projects/sandbox/portfolio/public/cv.pdf` with your file

Or keep a different name and update all CV download links:
- `sections/HeroSection.tsx` (line ~180)
- `sections/ContactSection.tsx` (line ~140)
- `components/ui/Navbar.tsx` (line ~50)
- `components/ui/Footer.tsx` (line ~70)

---

## 3️⃣ Add Video Content

### Option A: YouTube/Vimeo Embeds (Recommended)

Edit **`sections/VideoSection.tsx`** (line ~40+):

```typescript
const videos: Video[] = [
  {
    id: "1",
    title: "Your Video Title",
    category: "Social Campaigns", // or other category
    platform: "YouTube",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
  },
  // Add more videos...
];
```

### Option B: Self-Hosted Videos

1. Place video files in `/projects/sandbox/portfolio/public/videos/`
2. Update embedUrl: `embedUrl: "/videos/your-video.mp4"`

### Update Categories (Optional)

Edit categories array (line ~30):
```typescript
const categories = [
  "All",
  "Your Category 1",
  "Your Category 2",
  // etc...
];
```

---

## 4️⃣ Customize Design (Optional)

### Colors

Edit **`app/globals.css`** (line ~8-12):

```css
:root {
  --background: #0a0a0a;     /* Dark background */
  --foreground: #ededed;     /* Text color */
  --accent: #00ff88;         /* Your brand color */
  --accent-hover: #00cc6e;   /* Hover state */
}
```

### Fonts

Edit **`app/layout.tsx`** (line ~4-12):

```typescript
import { YourFont, YourMonoFont } from "next/font/google";

const yourFont = YourFont({
  variable: "--font-your-font",
  subsets: ["latin"],
});
```

---

## 5️⃣ Update Skills & Toolkit

Edit **`sections/ToolkitSection.tsx`** (line ~15+):

```typescript
const categories: ToolCategory[] = [
  {
    id: "T.01",
    name: "Your Skill Category",
    stars: 9, // Rate 1-10
    tools: [
      "Tool 1",
      "Tool 2",
      // Add all your tools
    ],
    description: "Your description",
    gradient: "from-yellow-500 to-orange-500",
  },
  // Add all 6 categories
];
```

---

## 6️⃣ Customize About Section

Edit **`sections/PhilosophySection.tsx`**:

### Main Copy (line ~40-60)
Replace with your personal statement about how you work.

### Specialty Areas (line ~10-18)
```typescript
const specialties = [
  { icon: YourIcon, label: "Your Specialty", color: "text-blue-400" },
  // Update all 8 specialties
];
```

### Problem-Solving Framework (line ~70-90)
Update the 4 points about what you do best.

---

## 7️⃣ Update Working Approach

Edit **`sections/ApproachSection.tsx`**:

### Visual Study 1: Your Process (line ~40-80)
- Update headline
- Modify copy to describe YOUR approach
- Keep or redesign the pyramid visual

### Visual Study 2: Your Philosophy (line ~90-140)
- Update headline and copy
- Customize the feedback loop concept

---

## 8️⃣ Update Impact Metrics

Edit **`sections/ImpactSection.tsx`** (line ~10-60):

```typescript
const metrics = [
  {
    value: 10000,
    suffix: "+",
    label: "Your Metric",
    sublabel: "Your context",
    color: "from-blue-500 to-cyan-500",
  },
  // Update all 9 metrics with YOUR achievements
];
```

---

## 9️⃣ SEO & Sitemap

### Update Sitemap

Edit **`app/sitemap.ts`**:
```typescript
url: 'https://your-actual-domain.com',
```

### Update Robots.txt

Edit **`public/robots.txt`**:
```
Sitemap: https://your-actual-domain.com/sitemap.xml
```

---

## 🔟 Test Locally

```bash
# Development mode
npm run dev
# Visit http://localhost:3000

# Production build (test before deploy)
npm run build
npm start
```

### Testing Checklist
- [ ] All links work
- [ ] CV downloads correctly
- [ ] Videos play in lightbox
- [ ] Mobile responsive on all screens
- [ ] Email copy button works
- [ ] Smooth scroll navigation
- [ ] All personal info updated
- [ ] No console errors

---

## 🚀 Deploy to Production

### Vercel (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin YOUR_GITHUB_REPO
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Deploy! (automatic)

### Netlify

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**
   - Drag & drop `.next` folder
   - Or connect GitHub repo

### Custom Domain

After deployment:
1. Buy domain (Namecheap, Google Domains, etc.)
2. Add custom domain in Vercel/Netlify dashboard
3. Update DNS records (platform provides instructions)
4. Update sitemap.ts and robots.txt with new domain

---

## 📱 Mobile Testing

Test on:
- iPhone (Safari)
- Android (Chrome)
- Tablet sizes
- Different orientations

Check:
- Touch targets (buttons/links)
- Text readability
- Video playback
- Scroll performance
- Loading speed

---

## 🐛 Troubleshooting

### Videos not playing
- Check embed URLs are correct
- Ensure HTTPS for YouTube/Vimeo
- For self-hosted: check file paths

### CV not downloading
- Ensure cv.pdf exists in `/public/`
- Check file isn't corrupted
- Test in different browsers

### 3D effects laggy
- Already optimized for mobile
- Consider disabling on low-end devices
- Reduce particle count further if needed

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

---

## 🎨 Design Tips

### Photography
- Use high-quality headshot for professional look
- Consider adding project screenshots
- Optimize images with [TinyPNG](https://tinypng.com)

### Writing
- Keep copy concise and scannable
- Use active voice
- Highlight specific achievements
- Show, don't just tell

### Videos
- Keep videos under 2 minutes
- Add captions/subtitles
- Use consistent branding
- Showcase best work only

---

## 📞 Need Help?

If you need assistance:
1. Check the main README.md
2. Review Next.js documentation
3. Check component comments in code
4. Open an issue on GitHub

---

## ✅ Pre-Launch Checklist

Before going live:

- [ ] All personal info updated
- [ ] CV added and downloads work
- [ ] Videos added and play correctly
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] SEO metadata updated
- [ ] Links all working
- [ ] No placeholder content
- [ ] Performance tested (Lighthouse)
- [ ] Accessibility checked
- [ ] Domain configured
- [ ] Analytics added (optional)

---

Good luck with your portfolio! 🚀
