# Component Templates
## Reusable UI Components for Amorphic Design System

---

## 🧩 Sidebar Component Template

```tsx
import { NavLink, useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { 
  MessageSquare, 
  Search, 
  X, 
  ChevronDown, 
  ChevronRight, 
  Bot, 
  Building2 
} from "lucide-react";

const navigationCategories = [
  {
    title: "Vertical Integration",
    icon: Building2,
    items: [
      {
        title: "HR AI Agent",
        url: "/",
        icon: Bot,
      },
      {
        title: "Onboarding Tracker",
        url: "/onboarding",
        icon: Users,
      },
      {
        title: "AI Knowledge Base",
        url: "/knowledge-base",
        icon: BookOpen,
      },
    ],
  },
  {
    title: "Horizontal Integration",
    icon: Building2,
    items: [
      {
        title: "FOI AI Agent",
        url: "/foi-agent",
        icon: Bot,
      },
      {
        title: "AI Knowledge Base",
        url: "/knowledge-base",
        icon: BookOpen,
      },
    ],
  },
];

interface AppSidebarProps {
  onQuestionClick?: (question: string) => void;
}

export function AppSidebar({ onQuestionClick }: AppSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["Vertical Integration"]);

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "nav-item-active"
      : "hover:bg-white/10 transition-all duration-300";

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle) 
        ? prev.filter(title => title !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-background border-r border-white/10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 p-4">
              {navigationCategories.map((category) => (
                <div key={category.title} className="space-y-1">
                  {/* Category Header */}
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => !collapsed && toggleCategory(category.title)}
                      className="hover:bg-white/10 transition-all duration-300"
                    >
                      <category.icon className="h-5 w-5 flex-shrink-0 text-blue-400" />
                      {!collapsed && (
                        <>
                          <span className="font-medium whitespace-nowrap">{category.title}</span>
                          {expandedCategories.includes(category.title) ? (
                            <ChevronDown className="h-4 w-4 ml-auto flex-shrink-0" />
                          ) : (
                            <ChevronRight className="h-4 w-4 ml-auto flex-shrink-0" />
                          )}
                        </>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  
                  {/* Category Items */}
                  {!collapsed && expandedCategories.includes(category.title) && (
                    <div className="ml-6 space-y-1">
                      {category.items.map((item) => (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton asChild>
                            <NavLink
                              to={item.url}
                              end={item.url === "/"}
                              className={({ isActive }) => getNavCls({ isActive })}
                            >
                              <item.icon className="h-4 w-4 flex-shrink-0 text-blue-400" />
                              <span className="font-medium text-sm">{item.title}</span>
                            </NavLink>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
```

---

## 🎨 Glass Card Component Template

```tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
}

export function GlassCard({ children, className, elevated = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-xl p-6 transition-all duration-300",
        elevated && "glass-card-elevated",
        className
      )}
    >
      {children}
    </div>
  );
}
```

---

## 🎯 Header Panel Component Template

```tsx
import { ReactNode } from "react";

interface HeaderPanelProps {
  title: string;
  subtitle: string;
  logoUrl?: string;
  logoAlt?: string;
  children?: ReactNode;
}

export function HeaderPanel({ 
  title, 
  subtitle, 
  logoUrl, 
  logoAlt = "Logo",
  children 
}: HeaderPanelProps) {
  return (
    <div className="glass-card p-6 rounded-2xl relative">
      <div className="flex items-center justify-center relative">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-400 mb-3">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        {/* Logo - Panel Corner */}
        {logoUrl && (
          <div className="absolute" style={{ top: '-8px', right: '-8px' }}>
            <img 
              src={logoUrl}
              alt={logoAlt}
              className="h-6 w-auto brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.innerHTML = '<div class="text-white font-bold text-xs">LOGO</div>';
              }}
            />
          </div>
        )}
      </div>
      {children}
    </div>
  );
}
```

---

## 🎛️ Agent Command Bar Component Template

```tsx
import { useState } from "react";
import { Send } from "lucide-react";

interface AgentCommandBarProps {
  onExecute: (command: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function AgentCommandBar({ 
  onExecute, 
  placeholder = "Ask the AI agent anything...",
  disabled = false 
}: AgentCommandBarProps) {
  const [command, setCommand] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim() && !disabled) {
      onExecute(command);
      setCommand("");
    }
  };

  return (
    <div className="glass-card p-6 rounded-2xl">
      <h2 className="text-2xl font-bold text-white mb-4">AI Agent Command Centre</h2>
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className="agent-command-input flex-1"
        />
        <button
          type="submit"
          disabled={!command.trim() || disabled}
          className="px-6 py-3 bg-gradient-accent text-accent-foreground font-semibold rounded-xl hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
```

---

## 📊 Metric Card Component Template

```tsx
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

export function MetricCard({ 
  title, 
  value, 
  icon: Icon, 
  description,
  trend 
}: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <Icon className="h-5 w-5 text-blue-400" />
      </div>
      <div className="space-y-2">
        <div className="text-2xl font-bold text-white">{value}</div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
        {trend && (
          <div className={`text-sm font-medium ${
            trend.isPositive ? 'text-success' : 'text-destructive'
          }`}>
            {trend.isPositive ? '+' : ''}{trend.value}%
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## 🎭 Task Step Component Template

```tsx
import { CheckCircle, Clock, AlertCircle } from "lucide-react";

interface TaskStepProps {
  title: string;
  description: string;
  status: 'pending' | 'completed' | 'error';
  duration?: string;
}

export function TaskStep({ title, description, status, duration }: TaskStepProps) {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-success" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-destructive" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  const getStatusClass = () => {
    switch (status) {
      case 'completed':
        return 'task-step completed';
      case 'error':
        return 'task-step bg-destructive/10 border-l-4 border-l-destructive';
      default:
        return 'task-step pending';
    }
  };

  return (
    <div className={getStatusClass()}>
      <div className="flex-shrink-0">
        {getStatusIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <strong className="text-foreground">{title}</strong>
          {duration && (
            <span className="text-sm text-muted-foreground">{duration}</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}
```

---

## 🎨 Usage Examples

### Basic Layout
```tsx
import { HeaderPanel } from "@/components/HeaderPanel";
import { AgentCommandBar } from "@/components/AgentCommandBar";
import { GlassCard } from "@/components/GlassCard";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderPanel
        title="Cloudwick | Amorphic"
        subtitle="Amorphic is a cloud orchestration platform that simplifies how IT, business, and data science teams manage advanced AWS analytics and machine learning."
        logoUrl="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
        logoAlt="AWS Logo"
      />
      
      <div className="p-6 space-y-6">
        <AgentCommandBar
          onExecute={(command) => console.log('Executing:', command)}
          placeholder="Ask the AI agent anything..."
        />
        
        <GlassCard>
          <h3 className="text-xl font-semibold text-white mb-4">Content</h3>
          <p className="text-muted-foreground">Your content here...</p>
        </GlassCard>
      </div>
    </div>
  );
}
```

### Metrics Grid
```tsx
import { MetricCard } from "@/components/MetricCard";
import { Users, TrendingUp, Clock, CheckCircle } from "lucide-react";

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Users"
        value="1,234"
        icon={Users}
        description="Active users this month"
        trend={{ value: 12, isPositive: true }}
      />
      <MetricCard
        title="Success Rate"
        value="98.5%"
        icon={CheckCircle}
        description="Task completion rate"
        trend={{ value: 2.1, isPositive: true }}
      />
      <MetricCard
        title="Avg Response Time"
        value="2.3s"
        icon={Clock}
        description="Average processing time"
        trend={{ value: 5, isPositive: false }}
      />
      <MetricCard
        title="Growth"
        value="+24%"
        icon={TrendingUp}
        description="Month over month"
        trend={{ value: 24, isPositive: true }}
      />
    </div>
  );
}
```

---

These templates provide a complete foundation for building modern, professional interfaces using the Amorphic Design System. Each component is fully customizable and follows the established design patterns.
