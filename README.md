# TinyThinkers Upsell Page

A responsive upsell page for TinyThinkers Learning Tools built with React, Vite, TypeScript, and TailwindCSS v4.

## 🚀 Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **TailwindCSS v4** - Styling framework
- **Google Fonts** - Space Mono font

## 📋 Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Interactive hover effects and tooltips
- ✅ Mobile sticky CTA buttons with scroll-based visibility
- ✅ Custom breakpoint strategy (sm, md, lg)
- ✅ Optimized images and assets
- ✅ TypeScript for type safety
- ✅ Modern CSS with TailwindCSS v4

## 🎨 Responsive Breakpoints

- **Mobile** (< 640px): Column layout, text-first
- **Small/Medium** (md: 768px+): Column layout, image-first
- **Large/Desktop** (lg: 1024px+): Row layout with specific image positioning

## 📁 Project Structure

```
upwork-test/
├── public/
│   ├── images/          # Product images, icons, SVGs
│   └── logos/           # Logo and timeline assets
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and TailwindCSS imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── postcss.config.js    # PostCSS configuration
└── .gitignore           # Git ignore rules
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd upwork-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🎯 Key Components

### Header
- Responsive logo with hover effect
- Timeline progress indicator
- Desktop and mobile layouts

### Sections
- **Section 1**: Porch Pirates warning
- **Section 2**: Order protection benefits
- **Section 3**: Company experience

### CTA Buttons
- Main CTA buttons in content
- Mobile sticky CTA buttons with intelligent visibility
- Tooltips on hover/touch
- Click redirects to legal notice

### Footer
- Company logo
- Payment methods
- Footer links (Refund, Privacy, Terms, Shipping policies)

## 🎨 Styling Details

### Colors
- Primary Purple: `#71046c`
- Red Alert: `#ce2121`, `#dc3545`, `#red-700`
- Pink (Mobile CTA): `#FDDBE0`, `#FA6D83`
- Black Gradient: `radial-gradient(188% 188% at 52.58% -68.5%, #000000 30.52%, #1a1a1a 53.85%)`

### Fonts
- **Space Mono** - Section headings (42px on desktop, responsive on mobile)
- **Default Sans** - Body text

### Font Sizes (Mobile)
- Section titles: 28px
- Section descriptions: 16px
- "TIME IS RUNNING OUT": 28px
- "30-DAY MONEY BACK GUARANTEE": 11px
- CTA buttons: 11-12px
- Footer year: 13px
- Footer links: 10px

## 🔧 Configuration Files

### TailwindCSS v4
Uses the new simplified import syntax:
```css
@import "tailwindcss";
```

### TypeScript
Configured with strict mode and React 19 support.

### Vite
Hot module replacement (HMR) enabled for fast development.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Features

- Touch-friendly interactions
- Sticky CTA buttons that appear/disappear based on scroll position
- Responsive images with proper sizing
- Optimized font sizes for readability

## 🔗 External Links

- Logo: [https://mytinythinker.com/](https://mytinythinker.com/)
- Legal Notice: [Upsell Page](https://funnels-build.thisisatestsiteonly.com/33d18e10-7ece-4c53-9b72-b2b9418830b8/upsell)

## 📝 Notes

- All images should be placed in the `public/images/` or `public/logos/` directories
- The page uses a 1:1 copy approach from the original design
- Mobile sticky buttons have intelligent scroll-based visibility
- Tooltips work on both hover (desktop) and touch (mobile)

## 🤝 Contributing

This is a test project for Upwork. Please follow the existing code structure and styling conventions.

## 📄 License

Private project - All rights reserved.

---

Built with ❤️ using React + Vite + TailwindCSS v4

