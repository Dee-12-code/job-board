# 💼 Job Board - Modern Job Search Platform

A sleek, responsive job board application built with Next.js, TypeScript, and Tailwind CSS. Features advanced filtering, search functionality, and a beautiful dark/light theme toggle.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://job-board-six-mocha.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/dee-12-code/job-board)

## 🚀 Features

### ✅ Core Features
- **📋 Job Listings** - Display comprehensive job information with clean cards
- **🔍 Advanced Search** - Search by job title or company name
- **🏷️ Smart Filtering** - Filter jobs by type (Full-time, Part-time, Contract)
- **📱 Responsive Design** - Perfect experience on desktop, tablet, and mobile
- **🎯 Job Details Modal** - Detailed view with requirements, benefits, and descriptions
- **⚡ Fast Performance** - Optimized with React memoization and efficient state management

### 🌟 Premium Features
- **🌙 Dark/Light Theme** - Toggle between themes with system preference detection
- **💾 State Persistence** - Remembers your filters and search preferences
- **📊 Statistics Dashboard** - Overview of total jobs, companies, and remote opportunities
- **🎨 Smooth Animations** - Engaging hover effects and transitions
- **♿ Accessibility** - ARIA labels and keyboard navigation support
- **🔤 Custom Typography** - Beautiful Poppins font integration

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** [Poppins](https://fonts.google.com/specimen/Poppins) via Fontsource
- **Deployment:** [Vercel](https://vercel.com/) / [Netlify](https://netlify.com/)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Setup
```bash
# Clone the repository
git clone https://github.com/dee-12-code/job-board.git
cd job-board

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🗂️ Project Structure

```
job-board/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── JobCard.tsx     # Individual job listing card
│   │   ├── JobDetails.tsx  # Job details modal
│   │   ├── JobFilter.tsx   # Job type filtering
│   │   ├── SearchBar.tsx   # Search functionality
│   │   ├── ThemeToggle.tsx # Dark/light theme switcher
│   │   └── LoadingSpinner.tsx
│   ├── data/
│   │   └── jobs.json       # Sample job data
│   ├── hooks/
│   │   └── useLocalStorage.ts # Custom localStorage hook
│   ├── types/
│   │   └── index.ts        # TypeScript type definitions
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main application page
├── public/                 # Static assets and favicon files
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

## 🎯 Key Components

### JobCard Component
- Displays job title, company, location, and salary
- Shows job type badge and remote work indicator
- Smooth hover animations and click interactions
- Responsive design for all screen sizes

### JobDetails Modal
- Comprehensive job information display
- Requirements and benefits sections
- Apply and save job action buttons
- Smooth modal transitions

### Search & Filter System
- Real-time search by title or company
- Multi-select job type filtering
- State persistence across sessions
- URL parameter integration (optional)

### Theme System
- Dark/light mode toggle
- System preference detection
- Smooth theme transitions
- Persistent theme selection

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile (320px+):** Single column layout, touch-friendly interactions
- **Tablet (768px+):** Two-column job grid, optimized spacing
- **Desktop (1024px+):** Full layout with sidebar filters
- **Large (1280px+):** Maximum width container, enhanced spacing

## ⚡ Performance Optimizations

- **React.memo()** for component optimization
- **useMemo()** for expensive calculations
- **Efficient re-renders** with proper dependency arrays
- **Code splitting** with Next.js automatic optimization
- **Image optimization** with Next.js Image component
- **Font optimization** with Fontsource

## 🎨 Design System

### Colors
- **Primary:** Blue (#2563eb)
- **Secondary:** Gray scale
- **Accent:** Green (#10b981), Yellow (#f59e0b)
- **Dark Theme:** Consistent gray palette

### Typography
- **Font Family:** Poppins
- **Weights:** 300, 400, 500, 600, 700
- **Responsive sizing** with Tailwind utilities

### Components
- **Cards:** Subtle shadows, rounded corners, hover effects
- **Buttons:** Consistent padding, hover states, focus rings
- **Forms:** Clean inputs with focus states
- **Modals:** Backdrop blur, smooth animations

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect your GitHub repository at vercel.com
```

### Environment Variables
No environment variables required for basic functionality. All data is currently static.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow the existing code style
2. Write meaningful commit messages
3. Update documentation as needed
4. Ensure responsive design principles
5. Test on multiple devices and browsers

## 🙏 Acknowledgments

- **Design Inspiration:** Modern job board platforms
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts](https://fonts.google.com/)
- **Framework:** [Next.js Team](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 📞 Contact

**Your Name** - [your.email@example.com](mailto:dejij4617@gmail.com)

**Project Link:** [https://github.com/dee-12-code/job-board](https://github.com/dee-12-code/job-board)

**Live Demo:** [https://job-board-six-mocha.vercel.app/](https://job-board-six-mocha.vercel.app/)

---

⭐ **If you found this project helpful, please give it a star!** ⭐
