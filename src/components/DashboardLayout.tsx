import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { User } from "lucide-react";
import { useState } from "react";

const DashboardLayout = () => {
  const [questionClickHandler, setQuestionClickHandler] = useState<((question: string) => void) | undefined>();

  const handleQuestionClick = (question: string) => {
    if (questionClickHandler) {
      questionClickHandler(question);
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar onQuestionClick={handleQuestionClick} />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/10 bg-background-secondary/50 backdrop-blur-lg">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-foreground hover:bg-white/10" />
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Amorphic HR
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gradient-primary flex items-center justify-center border border-white/20">
              <User className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet context={{ setQuestionClickHandler }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;