import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
            <Avatar className="h-8 w-8 border border-white/20">
              <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                <User className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
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