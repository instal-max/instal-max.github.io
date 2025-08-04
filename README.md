# InstalMax - React Website

A modern, mobile-friendly React website for InstalMax, a central heating installation and furnace controller repair company serving Wieluń and surrounding areas in Poland.

## 🚀 Features

- ⚛️ **React 18** with TypeScript
- 📱 **Fully Responsive** (mobile-first approach)
- 🎨 **Modern Design** with smooth animations
- ♿ **Accessible** with proper ARIA labels
- 🔧 **Component-based** architecture
- ⚡ **Fast Performance** with optimized builds
- 🧭 **Smooth Scrolling Navigation**
- 🎯 **SEO Optimized** for local Wieluń keywords
- 🌍 **Polish Language** with local optimization
- 🔥 **Custom Favicon** with fire icon branding

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: CSS3 (Grid, Flexbox, CSS Variables)
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Build Tool**: Create React App
- **Deployment**: GitHub Pages with GitHub Actions

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.tsx/.css      # Navigation with mobile menu
│   ├── Hero.tsx/.css        # Hero section with CTA
│   ├── Services.tsx/.css    # Services showcase
│   ├── Features.tsx/.css    # Company features
│   ├── About.tsx/.css       # About section
│   ├── Footer.tsx/.css      # Footer with links
│   └── ScrollToTop.tsx/.css # Scroll to top button
├── App.tsx/.css             # Main app component
└── index.tsx                # Entry point
```

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run deploy`

Deploys the built app to GitHub Pages.

## 🌐 Deployment to GitHub Pages

The project has automatic deployment configured via GitHub Actions:

1. **Code is automatically deployed** after each push to `main` branch
2. **Live site available at**: `https://instal-max.github.io`
3. **GitHub Actions** builds and deploys automatically

### Manual Deployment

```bash
npm run deploy
```

## 🎨 Company Information

Current settings:

- **Company Name**: InstalMax
- **Phone**: +48 668 152 243
- **Service Area**: Wieluń and surrounding areas
- **Services**: Central heating installation, controller repairs, boiler replacement

## 🎨 Colors and Styling

Main colors used throughout the app:

- Primary: `#ff6b35` (orange)
- Text: `#333` (dark gray)
- Background: `#f8f9fa` (light gray)
- Icon gradient: `linear-gradient(135deg, #ff6b35, #f7931e)`

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- Mobile: < 480px
- Tablet: 481px - 768px
- Desktop: > 768px

## 🌍 Browser Support

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)
- ✅ Mobile browsers

## 🚀 Getting Started

1. **Clone the repository**:

```bash
git clone https://github.com/instal-max/instal-max.github.io.git
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

---

**Live Demo**: https://instal-max.github.io

Made with ❤️ using React and TypeScript
