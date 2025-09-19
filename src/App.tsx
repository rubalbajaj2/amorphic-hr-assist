import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import OnboardingTracker from "./pages/OnboardingTracker";
import KnowledgeBase from "./pages/KnowledgeBase";
import FoiAgent from "./pages/FoiAgent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <Routes>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="onboarding" element={<OnboardingTracker />} />
              <Route path="knowledge-base" element={<KnowledgeBase />} />
              <Route path="foi-agent" element={<FoiAgent />} />
              <Route path="foi-knowledge-base" element={<KnowledgeBase isFoiAgent={true} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
