# Setup Instructions
## Getting Started with Amorphic Design System

---

## 🚀 Quick Setup Guide

### 1. Project Initialization

```bash
# Create new React project with TypeScript
npm create vite@latest my-amorphic-app -- --template react-ts
cd my-amorphic-app

# Install dependencies
npm install
```

### 2. Install Required Dependencies

```bash
# Core dependencies
npm install react-router-dom lucide-react

# UI utilities
npm install class-variance-authority clsx tailwind-merge

# Development dependencies
npm install -D tailwindcss postcss autoprefixer tailwindcss-animate
```

### 3. Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

### 4. Configure Tailwind

Replace the contents of `tailwind.config.ts` with the configuration from `AMORPHIC_DESIGN_SYSTEM.md`.

### 5. Setup CSS Variables

Create or update `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add all CSS variables from AMORPHIC_DESIGN_SYSTEM.md */
@layer base {
  :root {
    /* Copy all CSS variables from the design system */
  }
}

/* Add all component styles from AMORPHIC_DESIGN_SYSTEM.md */
@layer components {
  /* Copy all component styles */
}
```

### 6. Create Utility Functions

Create `src/lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### 7. Setup UI Components

Create the following component structure:

```
src/
├── components/
│   ├── ui/
│   │   ├── sidebar.tsx
│   │   ├── scroll-area.tsx
│   │   └── index.ts
│   ├── AppSidebar.tsx
│   ├── GlassCard.tsx
│   ├── HeaderPanel.tsx
│   ├── AgentCommandBar.tsx
│   ├── MetricCard.tsx
│   └── TaskStep.tsx
├── pages/
│   ├── Dashboard.tsx
│   ├── OnboardingTracker.tsx
│   └── KnowledgeBase.tsx
└── lib/
    └── utils.ts
```

---

## 🎨 Component Setup

### 1. Sidebar Component

Use the template from `COMPONENT_TEMPLATES.md` to create `src/components/AppSidebar.tsx`.

### 2. Glass Card Component

Use the template from `COMPONENT_TEMPLATES.md` to create `src/components/GlassCard.tsx`.

### 3. Header Panel Component

Use the template from `COMPONENT_TEMPLATES.md` to create `src/components/HeaderPanel.tsx`.

### 4. Agent Command Bar Component

Use the template from `COMPONENT_TEMPLATES.md` to create `src/components/AgentCommandBar.tsx`.

---

## 🎯 Layout Setup

### 1. Main Layout Component

Create `src/components/DashboardLayout.tsx`:

```tsx
import { AppSidebar } from "./AppSidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
```

### 2. App Router Setup

Update `src/App.tsx`:

```tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { OnboardingTracker } from "./pages/OnboardingTracker";
import { KnowledgeBase } from "./pages/KnowledgeBase";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/onboarding" element={<OnboardingTracker />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
```

---

## 🎨 Styling Setup

### 1. Global Styles

Ensure your `src/index.css` includes:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Add all CSS variables and component styles from AMORPHIC_DESIGN_SYSTEM.md */
```

### 2. Component Styling

All components use Tailwind classes with the custom design system variables. No additional CSS files are needed.

---

## 🚀 Development

### 1. Start Development Server

```bash
npm run dev
```

### 2. Build for Production

```bash
npm run build
```

### 3. Preview Production Build

```bash
npm run preview
```

---

## 📱 Responsive Design

The design system is fully responsive with the following breakpoints:

- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)
- **Extra Large**: `2xl:` (1400px+)

---

## 🎯 Customization

### 1. Color Customization

Modify the CSS variables in `src/index.css` to change colors:

```css
:root {
  --primary: 235 85% 55%; /* Change primary color */
  --accent: 195 85% 60%;  /* Change accent color */
  /* ... other variables */
}
```

### 2. Component Customization

All components accept `className` props for additional styling:

```tsx
<GlassCard className="custom-styles">
  Content
</GlassCard>
```

### 3. Animation Customization

Modify animation keyframes in `src/index.css`:

```css
@keyframes customAnimation {
  from { /* start state */ }
  to { /* end state */ }
}
```

---

## 🔧 Troubleshooting

### Common Issues

1. **Tailwind classes not working**: Ensure Tailwind is properly configured and CSS is imported
2. **Icons not showing**: Check that `lucide-react` is installed and imported correctly
3. **Glass effects not working**: Verify `backdrop-blur` is supported in your browser
4. **Colors not applying**: Check that CSS variables are properly defined and imported

### Browser Support

- **Chrome**: 88+
- **Firefox**: 87+
- **Safari**: 14+
- **Edge**: 88+

---

## 📚 Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide React Icons](https://lucide.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

This setup guide provides everything needed to create a new project using the Amorphic Design System. Follow these steps to get started quickly and efficiently.
