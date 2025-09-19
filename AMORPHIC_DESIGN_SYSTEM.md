# Amorphic Design System
## Professional, Futuristic HR Interface Design Configuration

This design system provides a complete configuration for creating modern, professional HR interfaces with glassmorphism effects, dark themes, and hierarchical navigation.

---

## 🎨 Color Palette

### Primary Colors
```css
/* Deep Blue Gradient System */
--primary: 235 85% 55%;           /* Main blue */
--primary-dark: 240 85% 45%;      /* Darker blue variant */
--primary-foreground: 210 40% 98%; /* White text on primary */

/* Accent Colors */
--accent: 195 85% 60%;            /* Bright cyan for actions */
--accent-dark: 200 85% 50%;       /* Darker cyan variant */
--accent-foreground: 223 47% 4%;  /* Dark text on accent */
```

### Background System
```css
/* Dark Theme Backgrounds */
--background: 223 47% 4%;         /* Main dark background */
--background-secondary: 224 44% 6%; /* Secondary dark background */
--background-tertiary: 225 41% 8%;  /* Tertiary dark background */
--foreground: 210 40% 98%;        /* Main text color (white) */
```

### Status Colors
```css
--success: 142 85% 55%;           /* Green for success states */
--warning: 48 95% 60%;            /* Yellow for warnings */
--destructive: 0 85% 60%;         /* Red for errors */
--destructive-foreground: 210 40% 98%; /* White text on destructive */
```

### Glass Morphism Elements
```css
--card: 223 47% 4%;               /* Card background */
--card-glass: 224 44% 6%;         /* Glass card background */
--card-foreground: 210 40% 98%;   /* Card text color */
--muted: 225 41% 10%;             /* Muted elements */
--muted-foreground: 215 20% 65%;  /* Muted text color */
```

---

## 🎭 Gradients

### Primary Gradients
```css
/* Main brand gradient */
--gradient-primary: linear-gradient(135deg, hsl(235 85% 55%) 0%, hsl(260 85% 65%) 100%);

/* Accent gradient */
--gradient-accent: linear-gradient(135deg, hsl(195 85% 60%) 0%, hsl(220 85% 70%) 100%);

/* Glass morphism gradient */
--gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);

/* Surface gradient */
--gradient-surface: linear-gradient(135deg, hsl(224 44% 6%) 0%, hsl(225 41% 8%) 100%);
```

---

## 🪟 Glass Morphism Effects

### Card Styles
```css
.glass-card {
  @apply bg-gradient-glass backdrop-blur-lg border border-white/10 shadow-glass;
}

.glass-card-elevated {
  @apply bg-gradient-glass backdrop-blur-lg border border-white/20 shadow-elevated;
}
```

### Shadows
```css
--shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.3);
--shadow-elevated: 0 20px 40px rgba(0, 0, 0, 0.4);
--backdrop-blur: blur(16px);
```

---

## 🎯 Component Styles

### Navigation
```css
.nav-item-active {
  @apply bg-gradient-primary text-primary-foreground shadow-[0_0_20px_rgba(59,130,246,0.4)];
}
```

### Input Fields
```css
.agent-command-input {
  @apply w-full bg-gradient-glass backdrop-blur-lg border border-white/20 rounded-xl px-6 py-3 text-lg text-black placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 h-12;
}
```

### Metric Cards
```css
.metric-card {
  @apply glass-card rounded-xl p-6 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-[1.02];
}
```

### Task Steps
```css
.task-step {
  @apply flex items-start gap-3 p-4 rounded-lg transition-all duration-300;
}

.task-step.completed {
  @apply bg-success/10 border-l-4 border-l-success;
}
```

---

## 🎬 Animations

### Keyframes
```css
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 5px rgba(56, 189, 248, 0.5); }
  50% { box-shadow: 0 0 20px rgba(56, 189, 248, 0.8); }
}
```

### Animation Classes
```css
.fade-in { animation: fadeIn 0.3s ease-out; }
.scale-in { animation: scaleIn 0.2s ease-out; }
.slide-up { animation: slideUp 0.3s ease-out; }
```

---

## 📐 Layout System

### Sidebar Configuration
```css
/* Sidebar Colors */
--sidebar-background: 223 47% 4%;
--sidebar-foreground: 210 40% 98%;
--sidebar-primary: 235 85% 55%;
--sidebar-primary-foreground: 210 40% 98%;
--sidebar-accent: 225 41% 12%;
--sidebar-accent-foreground: 210 40% 90%;
--sidebar-border: 225 41% 15%;
--sidebar-ring: 195 85% 60%;
```

### Border Radius
```css
--radius: 0.75rem;  /* 12px base radius */
```

---

## 🎨 Typography

### Font Family
```css
font-family: 'Inter', system-ui, sans-serif;
```

### Text Hierarchy
- **Headings**: `text-4xl font-bold` (36px, bold)
- **Subheadings**: `text-lg` (18px)
- **Body Text**: `text-sm` (14px)
- **Small Text**: `text-xs` (12px)

---

## 🧩 Tailwind Configuration

### Complete tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
          tertiary: "hsl(var(--background-tertiary))",
        },
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          dark: "hsl(var(--accent-dark))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          glass: "hsl(var(--card-glass))",
          foreground: "hsl(var(--card-foreground))",
        },
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-glass": "var(--gradient-glass)",
        "gradient-surface": "var(--gradient-surface)",
      },
      boxShadow: {
        glass: "var(--shadow-glass)",
        elevated: "var(--shadow-elevated)",
      },
      backdropBlur: {
        glass: "var(--backdrop-blur)",
      },
      transitionProperty: {
        smooth: "var(--transition-smooth)",
        bounce: "var(--transition-bounce)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

---

## 🎯 Usage Guidelines

### 1. Color Usage
- **Primary Blue**: Use for main actions, active states, and brand elements
- **Accent Cyan**: Use for secondary actions and highlights
- **Success Green**: Use for completed states and positive feedback
- **Warning Yellow**: Use for caution states and pending actions
- **Destructive Red**: Use for errors and destructive actions

### 2. Glass Morphism
- Apply `.glass-card` for standard cards
- Use `.glass-card-elevated` for important or interactive cards
- Always include `backdrop-blur-lg` for glass effects

### 3. Animations
- Use `.fade-in` for content appearing
- Use `.scale-in` for interactive elements
- Use `.slide-up` for modal or panel content

### 4. Typography
- Maintain consistent text hierarchy
- Use `whitespace-nowrap` for navigation items
- Apply proper contrast ratios for accessibility

---

## 🚀 Quick Start

1. **Install Dependencies**:
   ```bash
   npm install tailwindcss tailwindcss-animate
   ```

2. **Add CSS Variables** to your `index.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
   ```

3. **Configure Tailwind** with the provided `tailwind.config.ts`

4. **Apply Component Classes**:
   ```jsx
   <div className="glass-card p-6 rounded-xl">
     <h1 className="text-4xl font-bold text-blue-400">Title</h1>
     <p className="text-lg text-muted-foreground">Description</p>
   </div>
   ```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)
- **Extra Large**: `2xl:` (1400px+)

### Sidebar Behavior
- **Collapsed**: `w-16` (64px) - icons only
- **Expanded**: `w-64` (256px) - full content

---

This design system provides a complete foundation for creating modern, professional HR interfaces with consistent styling, animations, and user experience patterns.
