import { Outlet } from "react-router-dom";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { User } from "lucide-react";
import { useState } from "react";

const DashboardLayout = () => {
  const [questionClickHandler, setQuestionClickHandler] = useState<((question: string) => void) | undefined>();

  const handleQuestionClick = (question: string) => {
    console.log('DashboardLayout handleQuestionClick called with:', question);
    if (questionClickHandler) {
      console.log('Calling questionClickHandler with question:', question);
      questionClickHandler(question);
    } else {
      console.log('No questionClickHandler available');
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-background">
      <AppSidebar onQuestionClick={handleQuestionClick} />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-border bg-card/50 backdrop-blur-lg">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="text-foreground hover:bg-secondary" />
            <h1 className="text-heading-md font-semibold text-primary">
              Amorphic HR
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center border border-border">
              <User className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet context={{ 
            setQuestionClickHandler: (handler: (question: string) => void) => {
              setQuestionClickHandler(() => handler);
            }
          }} />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;