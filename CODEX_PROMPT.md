# 🎨 Codex Prompt for Portfolio Website

Use this prompt with Codex or any AI coding assistant to recreate or modify this portfolio.

---

## 📋 **Complete Portfolio Build Prompt**

```
Create a modern, minimal portfolio website with the following specifications:

## Tech Stack
- Next.js 16 with App Router
- TypeScript
- Tailwind CSS (v4 with @theme inline)
- Framer Motion for animations
- Three.js / React Three Fiber for 3D effects
- Lucide React for icons

## Design Style
- Clean, minimal aesthetic
- White background (#ffffff)
- Near-black text (#171717)
- Simple gray accents for CTAs
- Professional, timeless design
- Magazine-style layout with section numbers (01-09)
- Inspired by Lusion.co (bold typography, immersive elements)
- Inspired by Breedlove.xyz (editorial layout, timeline structure)

## Color Palette
:root {
  --background: #ffffff;
  --foreground: #171717;
  --accent: #171717;
  --accent-hover: #404040;
}

## Typography
- Font: Geist Sans for body, Geist Mono for code
- Large, bold headlines (5xl to 8xl)
- Tight letter spacing (-0.02em)
- Line height 1.7 for body text

## Layout Structure

### 9 Main Sections (numbered 01-09):

1. **Hero Section (01)**
   - Full-screen landing
   - Large headline: "Performance Creative That Converts"
   - Subheadline: "Growth Marketing Specialist · Creative Strategist · Content Architect"
   - "NOW" status widget showing:
     * Creating: Current project
     * Reading: Current book
     * Listening: Current podcast
     * Tools: AI stack (Claude, Gemini, ChatGPT)
   - 6-stat grid with animated counters:
     * 10,000+ Members Grown
     * 100+ Video Productions
     * 4+ Years Experience
     * 5 Products Launched
     * 10+ AI Tools Mastered
     * 19% Organic Traffic Growth
   - Two CTAs: "View My Work" and "Download CV"
   - Scroll indicator at bottom

2. **Philosophy Section (02)**
   - Section number "02" in large gray text
   - Headline: "A Marketer Who Builds Brands Through Performance-First Creative"
   - Two paragraphs explaining approach
   - "What I Do Best" - 4 cards:
     * Architect the strategy
     * Execute the creative
     * Optimize for performance
     * Build the system
   - 8 specialty areas in grid (with icons):
     * Content Strategy
     * Video Direction & Editing
     * Campaign Execution
     * AI-Assisted Creative Workflows
     * Creative Briefs
     * Performance Analytics
     * Community Growth
     * Short-Form Content Production

3. **Impact Metrics Section (03)**
   - Section number "03"
   - Headline: "By The Numbers"
   - 9 metric cards with animated counters and gradient colors:
     * 10,000+ Community Members
     * 100+ Video Productions
     * 19% Organic Traffic Growth
     * 4+ Years Experience
     * 5 Successful Products
     * 1,000+ YouTube Subscribers
     * 100k+ Social Impressions/mo
     * 50+ Landing Pages
     * 10+ AI Tools Mastered
   - Bottom tagline with diamond separators: "story ◆ growth ◆ impact"

4. **Timeline Section (04) - NEW**
   - Section number "04"
   - Headline: "Through The Years"
   - Visual timeline with 5 milestones (2022-2026):
     * '22: Digital Marketing Journey Begins
     * '23: First Product Launch Success
     * '24: AI-Assisted Workflows
     * '25: Performance Creative Specialist
     * '26: Full-Stack Creative
   - Alternating left/right layout on desktop
   - Each milestone has: year badge, icon, title, description
   - Vertical line connecting all events
   - Gradient colors for each milestone

5. **Featured Work Section (05) - NEW**
   - Section number "05"
   - Headline: "Featured Work"
   - 6 project cards in 3-column grid:
     1. Community Growth Campaign
     2. Product Launch Videos
     3. Landing Page Optimization
     4. Real Estate Podcast Production
     5. E-Commerce UGC Campaign
     6. AI-Assisted Content Workflow
   - Each card shows:
     * Thumbnail image
     * Category badge
     * Title
     * Brief description
     * 2-3 result metrics (users, engagement, revenue)
     * Tags for tools/skills
   - Click to expand into full-screen modal with:
     * Hero image
     * Full description
     * Complete results grid (3 metrics)
     * All tags

6. **Video Showcase Section (06)**
   - Section number "06"
   - Headline: "Creative In Motion"
   - Category filters: All, Social Campaigns, Product Videos, Community Content, Short-Form, Educational, Brand Content
   - 9 video cards in 3-column grid
   - Each card:
     * Thumbnail image
     * Category badge
     * Title
     * Platform name
     * Play button overlay on hover
   - Click opens lightbox modal with:
     * Embedded YouTube/Vimeo player
     * Video title and metadata
     * Close button

7. **Approach Section (07)**
   - Section number "07"
   - Headline: "How I Think and Build"
   - Two visual study cards:
     * A.01 "Above the Cloudline" - Performance pyramid diagram
     * A.02 "Constellation in the Mirror" - Creative feedback loop
   - Both with gradient overlays and hover effects

8. **Technical Toolkit Section (08)**
   - Section number "08"
   - Headline: "Technical Toolkit"
   - 6 skill categories with 9-star ratings:
     1. AI-Assisted Engineering (9 stars)
     2. Creative Tools (8 stars)
     3. Content Production (8 stars)
     4. Marketing Platforms (7 stars)
     5. Analytics & Testing (6 stars)
     6. Design & Prototyping (8 stars)
   - Each category expands to show specific tools

9. **Contact Section (09)**
   - Section number "09"
   - Headline: "Let's Create Something Together"
   - Contact cards:
     * Email
     * Phone
     * LinkedIn
     * Location
   - "Currently Open To" list:
     * Growth Marketing roles
     * Creative Strategy positions
     * Performance Creative consulting
     * AI workflow automation projects
   - CTA button: "Get In Touch"

## UI Components to Build

### 3D Background Components:
- **Background3D**: Three.js starfield with rotating camera
- **FloatingParticles**: Animated particle system

### UI Components:
- **AnimatedCounter**: Counts from 0 to target with easing
- **TypewriterText**: Types out text character by character
- **FadeInSection**: Intersection Observer fade-in animation
- **LoadingScreen**: Full-screen loader with progress animation
- **Navbar**: Sticky header with smooth scroll links
- **CursorFollow**: Custom dual-cursor (desktop only)
- **SectionDivider**: Animated gradient divider between sections
- **Footer**: Social links, copyright, back to top

## Animations & Interactions

### Page Load:
1. Loading screen (2 seconds)
2. Fade in hero content
3. Stagger animations for stats

### Scroll Animations:
- Fade in sections as they enter viewport
- Parallax effects on hero
- Counter animations when metrics visible
- Smooth scroll to anchors

### Hover Effects:
- Scale up cards (1.05)
- Translate up (-10px)
- Gradient overlays
- Border color changes
- Button transforms

### Custom Cursor (Desktop Only):
- Main cursor: 10px white circle
- Hover cursor: 40px circle with blend mode
- Follows mouse with slight delay
- Disabled on mobile

## Responsive Design

### Mobile (<768px):
- Stack all grids to single column
- Reduce font sizes (headlines 50% smaller)
- Simplify animations
- Remove custom cursor
- 44px minimum touch targets
- Timeline: Remove alternating layout, stack vertically

### Tablet (768px-1024px):
- 2-column grids
- Medium font sizes
- Simplified parallax

### Desktop (>1024px):
- Full 3-column grids
- Large typography
- Custom cursor enabled
- Full animation suite

## Performance Optimizations

- Lazy load images
- Code splitting by route
- Optimize bundle with tree shaking
- Compress images to WebP/AVIF
- Minimize JavaScript
- Use React.lazy for heavy components
- Intersection Observer for scroll animations
- Debounce scroll/resize handlers

## Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Skip to content link
- Focus indicators
- Reduced motion support
- Alt text on all images
- Proper heading hierarchy

## File Structure

portfolio/
├── app/
│   ├── page.tsx (main page with all sections)
│   ├── layout.tsx (root layout, fonts)
│   ├── globals.css (global styles)
│   └── sitemap.ts
├── sections/
│   ├── HeroSection.tsx
│   ├── PhilosophySection.tsx
│   ├── ImpactSection.tsx
│   ├── TimelineSection.tsx (NEW)
│   ├── FeaturedWorkSection.tsx (NEW)
│   ├── VideoSection.tsx
│   ├── ApproachSection.tsx
│   ├── ToolkitSection.tsx
│   └── ContactSection.tsx
├── components/
│   ├── ui/
│   │   ├── AnimatedCounter.tsx
│   │   ├── TypewriterText.tsx
│   │   ├── FadeInSection.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── Navbar.tsx
│   │   ├── CursorFollow.tsx
│   │   ├── SectionDivider.tsx
│   │   └── Footer.tsx
│   └── 3d/
│       ├── Background3D.tsx
│       └── FloatingParticles.tsx
├── public/
│   ├── cv.pdf
│   └── images/
└── package.json

## Key Features

1. **Magazine-Style Section Numbers**: Large gray numbers (01-09) above each section
2. **NOW Widget**: Live status card showing current activities
3. **Diamond Separators**: Use ◆ symbol between tagline parts
4. **Animated Counters**: Numbers count up when scrolled into view
5. **Project Modals**: Click project cards to see full details
6. **Video Lightbox**: Click videos to play in modal
7. **Timeline Visualization**: Vertical timeline with alternating layout
8. **Smooth Animations**: Framer Motion for all transitions
9. **3D Background**: Subtle starfield with parallax
10. **Custom Cursor**: Dual-cursor system on desktop

## Content Customization Points

Replace these placeholder values:
- Personal information in Hero
- Stat values in metrics sections
- Timeline milestones and years
- Project details and images
- Video URLs (YouTube/Vimeo embed IDs)
- Contact information
- Social media links
- CV file path

## Important Notes

1. All images should be optimized (WebP format, <200KB)
2. Video thumbnails from YouTube API: `https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg`
3. Use placeholder images from Unsplash for demo
4. Icons from Lucide React library
5. All text should be easily editable in section files
6. Color scheme can be changed in globals.css root variables
7. Disable custom cursor on mobile/tablet
8. Loading screen shows for 2 seconds on initial load only

## Build & Deploy

npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check

Deploy to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari/Chrome

## Additional Polish

- Smooth scroll behavior
- Loading states for all interactive elements
- Error boundaries for production
- Meta tags for SEO
- Open Graph tags for social sharing
- Favicon and app icons
- Sitemap.xml
- Robots.txt

Build this as a complete, production-ready portfolio website with all features implemented.
```

---

## 🎯 **Quick Modification Prompts**

Use these for specific changes:

### **Change Color Scheme**
```
Update the portfolio color scheme in app/globals.css:
- Keep minimal design
- Change accent color to [blue/green/purple/etc]
- Update all hover states and highlights
- Maintain accessibility contrast ratios
```

### **Add New Section**
```
Add a new section called "[Section Name]" after section [number]:
- Follow the same design pattern as other sections
- Include section number in large gray text
- Add [describe content]
- Use Framer Motion for scroll animations
- Match the minimal color scheme
```

### **Simplify Design**
```
Make the portfolio even more minimal:
- Remove 3D background elements
- Disable custom cursor
- Reduce animations to simple fades
- Remove loading screen
- Keep only essential UI elements
```

### **Add Dark Mode Toggle**
```
Add a dark/light mode toggle button:
- Toggle in navbar
- Persist preference in localStorage
- Smooth transition between modes
- Dark mode colors: background #171717, text #fafafa
```

### **Make Mobile-First**
```
Optimize the portfolio for mobile viewing:
- Reduce text sizes further on mobile
- Simplify all animations
- Remove heavy 3D elements
- Optimize images for mobile bandwidth
- Test on iPhone and Android
```

---

## 📝 **Content Update Prompts**

### **Update Videos**
```
In sections/VideoSection.tsx, update the videos array with:
- 9 YouTube videos
- Categories: [list categories]
- Embed URLs: https://www.youtube.com/embed/[VIDEO_ID]
- Thumbnails: Use YouTube API format
```

### **Update Timeline**
```
In sections/TimelineSection.tsx, update timeline with these milestones:
- [Year]: [Event title and description]
- [Year]: [Event title and description]
- Use appropriate icons: briefcase, trophy, rocket, graduation
- Match gradient colors to existing palette
```

### **Update Projects**
```
In sections/FeaturedWorkSection.tsx, replace projects with:
1. [Project name]: [description], metrics: [list], tags: [list]
2. [Project name]: [description], metrics: [list], tags: [list]
[...continue for all 6 projects]
Use Unsplash images for thumbnails
```

---

## 🚀 **Deployment Prompt**

```
Deploy this Next.js portfolio to Vercel:
1. Connect GitHub repository
2. Configure build settings:
   - Build command: npm run build
   - Output directory: .next
   - Install command: npm install
3. Add environment variables: [list if any]
4. Enable automatic deployments on push
5. Set up custom domain: [domain name]
```

---

## 🎨 **Design Variant Prompts**

### **Variant 1: Bold Colors**
```
Transform to bold, colorful design:
- Use vibrant accent color (#2563eb blue)
- Add colorful gradients to section backgrounds
- Keep layout but make it more energetic
- Add more visual elements
```

### **Variant 2: Ultra Minimal**
```
Reduce to absolute minimum:
- Remove all animations
- Remove 3D backgrounds
- Single column layout everywhere
- Typography-focused design
- No decorative elements
```

### **Variant 3: Dark Elegant**
```
Convert to dark, elegant theme:
- Dark gray background (#0f172a)
- Gold accents (#fbbf24)
- Subtle glows and shadows
- Luxury aesthetic
```

---

## 📦 **Component Addition Prompts**

### **Add Blog Section**
```
Add a blog section after contact:
- Grid of blog post cards
- Each card: image, title, excerpt, date, read time
- Click to read full post
- Use MDX for blog content
- Add pagination
```

### **Add Testimonials**
```
Add testimonials section after featured work:
- Carousel of client testimonials
- Each: quote, name, company, photo
- Auto-rotate every 5 seconds
- Swipe on mobile
```

### **Add Skills Graph**
```
Replace toolkit section with interactive skill graph:
- Radar/spider chart showing skill levels
- Animated when scrolled into view
- Clickable to show tool details
- Use Chart.js or Recharts
```

---

## 🔧 **Technical Modification Prompts**

### **Add Analytics**
```
Integrate Google Analytics 4:
- Add tracking code to layout
- Track page views
- Track button clicks
- Track video plays
- Privacy-compliant implementation
```

### **Add Contact Form**
```
Add functional contact form to contact section:
- Fields: name, email, message
- Client-side validation
- Send via [service: Resend/SendGrid/etc]
- Success/error states
- Spam protection
```

### **Add CMS**
```
Connect to [CMS name: Sanity/Contentful/etc]:
- Make all content editable
- Create schemas for projects, videos, timeline
- Add preview mode
- Keep static generation
```

---

## 💡 **Pro Tips for Using These Prompts**

1. **Be Specific**: Include exact colors, sizes, text
2. **Reference Files**: Mention which files to modify
3. **Describe Behavior**: Explain animations, interactions
4. **Include Constraints**: Mobile-friendly, accessible, fast
5. **Request Testing**: Ask for responsive and accessibility testing

---

**Use these prompts with Codex, Claude, ChatGPT, or any AI coding assistant to build or modify your portfolio! 🚀**
