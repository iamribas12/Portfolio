# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a clean, Apple-inspired design with dark/light mode support and smooth animations.

## ✨ Features

- **Modern Design**: Clean, professional aesthetic with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Interactive Sections**:
  - Hero section with professional photo and call-to-action
  - About section with skills grid
  - Projects showcase with 6 featured projects
  - Skills section with visual progress indicators
  - Contact form with validation
- **Professional Layout**: Navigation, routing, and footer
- **Performance Optimized**: Fast loading with optimized images and smooth scrolling

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
```

4. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## 🎨 Customization

### Personal Information

Update the following files with your information:

**src/components/Hero.tsx**
- Replace placeholder text with your name and description
- Update the call-to-action buttons

**src/data/projects.ts**
- Replace sample projects with your own
- Update project images, descriptions, and links

**src/data/skills.ts** 
- Modify skills and proficiency levels
- Add or remove skill categories

**src/components/Contact.tsx**
- Update contact information (email, phone, location)

**src/components/Footer.tsx**
- Update social media links

### Visual Customization

**Design System (src/index.css)**
- Modify color palette in CSS variables
- Adjust gradients, shadows, and animations
- All colors use HSL format for easy theming

**Profile Photo**
- Replace `src/assets/profile-photo.jpg` with your professional headshot
- Recommended size: 400x400px or higher

## 📦 Build for Production

```sh
npm run build
```

The build folder will contain the optimized production files.

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect the settings
3. Deploy with one click

## 🛠 Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **React Router** - Navigation
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── data/               # Project and skills data
├── pages/              # Route pages
├── assets/             # Images and media
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── ui/                 # shadcn/ui components
```

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Descriptive alt texts for images
- Clean URLs with React Router
- Mobile-optimized viewport

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to showcase your work?** Customize this portfolio template and make it your own!