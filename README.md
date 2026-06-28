# Hrishikesh Gaikwad - Portfolio Website

A stunning, performance-optimized portfolio website showcasing creative and growth marketing expertise with immersive 3D elements and smooth animations.

## 🎨 Design Inspiration

This portfolio draws design inspiration from:
- **[Lusion.co](https://lusion.co)** - Immersive 3D elements and bold visual language
- **[Breedlove.xyz](https://breedlove.xyz)** - Magazine-style layout and narrative storytelling

## ✨ Features

### Design & UX
- **Immersive 3D Background** - Animated star field and floating particles using Three.js
- **Custom Cursor** - Dual-cursor follow effect on desktop
- **Smooth Animations** - Framer Motion powered transitions and scroll animations
- **Loading Screen** - Animated progress bar for initial load
- **Scroll-triggered Navbar** - Appears after scrolling for better UX
- **Magazine-style Sections** - Editorial layout with visual metaphors

### Sections
1. **Hero** - Animated headline, live status widget, and stat counters
2. **Philosophy** - Personal statement with 8 specialty area icons
3. **Impact** - 9 quantified metrics with animated counters
4. **Video Showcase** - Filterable video grid with lightbox modal
5. **Working Approach** - Visual studies (Performance Pyramid & Feedback Loop)
6. **Technical Toolkit** - 6 skill categories with star ratings
7. **Contact** - Interactive contact cards with copy-to-clipboard
8. **Footer** - Comprehensive navigation and social links

### Performance Optimizations
- **Mobile-First Responsive** - Optimized layouts for all screen sizes
- **Reduced Motion Support** - Respects `prefers-reduced-motion` setting
- **Lazy Loading** - Components load as they enter viewport
- **Optimized 3D** - Reduced particle counts on mobile devices
- **Touch-Friendly** - 44px minimum touch targets on mobile
- **Image Optimization** - Next.js automatic image optimization
- **Static Generation** - Pre-rendered for instant loading

### Technical Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles and animations
├── components/
│   ├── 3d/                  # Three.js 3D components
│   │   ├── Background3D.tsx
│   │   └── FloatingParticles.tsx
│   └── ui/                  # Reusable UI components
│       ├── AnimatedCounter.tsx
│       ├── TypewriterText.tsx
│       ├── FadeInSection.tsx
│       ├── CursorFollow.tsx
│       ├── LoadingScreen.tsx
│       ├── Navbar.tsx
│       ├── SectionDivider.tsx
│       ├── LazyLoad.tsx
│       └── Footer.tsx
├── sections/                # Page sections
│   ├── HeroSection.tsx
│   ├── PhilosophySection.tsx
│   ├── ImpactSection.tsx
│   ├── VideoSection.tsx
│   ├── ApproachSection.tsx
│   ├── ToolkitSection.tsx
│   └── ContactSection.tsx
└── public/                  # Static assets
    └── videos/             # Video files (to be added)
```

## 🎯 Customization Guide

### Update Personal Info

1. **Contact Details** - Edit `sections/ContactSection.tsx`:
   - Email address
   - Phone number
   - LinkedIn URL
   - Location

2. **Hero Stats** - Modify `sections/HeroSection.tsx`:
   - Update metrics and values
   - Change stat labels

3. **Live Status Widget** - Update current activities in `sections/HeroSection.tsx`

### Add Videos

1. Place video files in `public/videos/`
2. Update `sections/VideoSection.tsx` with:
   - Video titles
   - Categories
   - Embed URLs or file paths
   - Thumbnail images

### Color Scheme

Colors are defined in `app/globals.css`:
- `--accent`: Primary accent color (#00ff88)
- `--accent-hover`: Hover state for accent
- Modify these to change the entire color theme

### Fonts

Fonts are configured in `app/layout.tsx`:
- Currently using Geist Sans and Geist Mono
- Replace with your preferred Google Fonts

## 📱 Mobile Optimization

The site includes several mobile-specific optimizations:
- Reduced 3D particle count (500 vs 2000)
- Hidden floating particles on mobile
- Touch-friendly button sizes (min 44px)
- Optimized animation durations
- Responsive typography scaling
- Mobile-friendly navigation menu

## 🎨 Design Elements

### Animations
- **Fade In**: Elements fade in as they scroll into view
- **Typewriter**: Text types out character by character
- **Count Up**: Numbers animate from 0 to target value
- **Hover Effects**: Scale, translate, and color transitions
- **3D Rotation**: Particles rotate continuously

### Visual Metaphors
- **Performance Pyramid**: 3-tier structure showing strategy → creative → performance
- **Feedback Loop**: Circular diagram illustrating iteration process

## 🌐 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

### Custom Server
```bash
npm run build
npm start
```

## 📊 Performance Metrics

Target metrics:
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- Lighthouse Score: > 90

## 🔧 Maintenance

### Adding New Sections
1. Create new component in `sections/`
2. Import and add to `app/page.tsx`
3. Add navigation link in `components/ui/Navbar.tsx`
4. Add section divider for visual separation

### Updating Dependencies
```bash
npm update
npm audit fix
```

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Design inspired by [Lusion.co](https://lusion.co) and [Breedlove.xyz](https://breedlove.xyz)
- Built with [Next.js](https://nextjs.org)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- 3D by [Three.js](https://threejs.org) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- Icons by [Lucide](https://lucide.dev)

## 📞 Contact

**Hrishikesh Gaikwad**
- Email: hgaikwad2003@gmail.com
- Phone: +91 9867285205
- LinkedIn: [linkedin.com/in/hrishikesh-gaikwad](https://linkedin.com/in/hrishikesh-gaikwad)
- Location: Mumbai, India

---

Built with ❤️ using Next.js · Three.js · Framer Motion
