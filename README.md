# InstalMax - React Website

A modern, mobile-friendly React website for a central heating installation and furnace controller repair company, designed for deployment to GitHub Pages.

## 🚀 Features

- ⚛️ **React 18** with TypeScript
- 📱 **Fully Responsive** (mobile-first approach)
- 🎨 **Modern Design** with smooth animations
- ♿ **Accessible** with proper ARIA labels and keyboard navigation
- 🔧 **Component-based** architecture
- ⚡ **Fast Performance** with optimized builds
- 📧 **Interactive Contact Form** with validation
- 🧭 **Smooth Scrolling Navigation**
- 🎯 **SEO Optimized**

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3 (Grid, Flexbox, Custom Properties)
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx/.css      # Navigation bar with mobile menu
│   ├── Hero.tsx/.css        # Hero section with CTA
│   ├── Services.tsx/.css    # Services showcase
│   ├── Features.tsx/.css    # Company features
│   ├── About.tsx/.css       # About section with stats
│   ├── Contact.tsx/.css     # Contact form and info
│   ├── Footer.tsx/.css      # Footer with links
│   └── ScrollToTop.tsx/.css # Scroll to top button
├── App.tsx/.css             # Main app component
└── index.tsx                # Entry point
```

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run deploy`

Deploys the built app to GitHub Pages.

### `npm test`

Launches the test runner in the interactive watch mode.

## 🌐 Deployment to GitHub Pages

### Method 1: Automatic Deployment (Recommended)

The project includes GitHub Actions workflow for automatic deployment:

1. **Update homepage in package.json**:

```json
{
  "homepage": "https://YOUR_USERNAME.github.io/instal-max"
}
```

2. **Push to GitHub**:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: GitHub Actions
   - The workflow will automatically deploy on push to main

### Method 2: Manual Deployment

```bash
npm run deploy
```

## 🎨 Customization

### Company Information

Update the following in the component files:

- Company name and branding in `Navbar.tsx` and `Footer.tsx`
- Contact information in `Contact.tsx` and `Footer.tsx`
- Service descriptions in `Services.tsx`
- About section content in `About.tsx`

### Colors and Styling

Main colors used throughout the app:

- Primary: `#ff6b35` (orange)
- Secondary: `#667eea` to `#764ba2` (gradient)
- Text: `#333` (dark gray)
- Background: `#f8f9fa` (light gray)

### Contact Form Integration

To implement real form submission, you can:

1. **Use Formspree** (Easy):

```tsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

2. **Use EmailJS** (Client-side):

```bash
npm install @emailjs/browser
```

3. **Backend Integration** with your API endpoint

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus indicators
- High contrast mode support
- Screen reader friendly

## 🌍 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers

## 🚀 Getting Started

1. **Clone the repository**:

```bash
git clone https://github.com/YOUR_USERNAME/instal-max.git
cd instal-max
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start development server**:

```bash
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Live Demo**: Your site will be available at `https://YOUR_USERNAME.github.io/instal-max/` after deployment.

Made with ❤️ using React and TypeScript
