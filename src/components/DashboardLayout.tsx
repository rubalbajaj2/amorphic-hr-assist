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