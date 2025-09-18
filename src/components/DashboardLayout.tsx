import { Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { useState } from "react";

const DashboardLayout = () => {
  const [questionClickHandler, setQuestionClickHandler] = useState<((question: string) => void) | undefined>();

  const handleQuestionClick = (question: string) => {
    if (questionClickHandler) {
      questionClickHandler(question);
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-white">
      {/* Fixed Sidebar */}
      <div className="w-64 fixed left-0 top-0 h-full z-10">
        <AppSidebar onQuestionClick={handleQuestionClick} />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Main Content with Header Content at Top */}
        <main className="flex-1 flex flex-col p-6">
          {/* Header Content - Now at top of main content */}
          <div className="h-64 flex bg-gradient-to-r from-blue-400 to-blue-500 relative mb-8 rounded-2xl">
            {/* AWS Logo - Top Right */}
            <div className="absolute top-4 right-6">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
                alt="AWS Logo" 
                className="h-6 w-auto"
                onError={(e) => {
                  // Fallback to a simple text-based AWS logo if image fails
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement.innerHTML = '<div class="text-white font-bold text-sm">AWS</div>';
                }}
              />
            </div>
            
            {/* Left Panel - Company Info */}
            <div className="flex-[2] flex flex-col justify-center px-12 text-white">
              <div>
                <h1 className="text-3xl font-bold mb-4">Cloudwick | Amorphic</h1>
              <p className="text-sm text-blue-100 leading-relaxed">
                Amorphic is a cloud orchestration platform that simplifies how IT, business, and data science teams manage advanced AWS analytics and machine learning. By seamlessly integrating over <strong>75+ AWS services</strong> with your existing data pipelines, it streamlines data operations and enhances usability.
              </p>
              </div>
            </div>
            
            {/* Right Panel - AI HR Illustration */}
            <div className="flex-1 flex items-center justify-center px-8">
              <div className="relative">
                {/* AI Agent Figure */}
                <div className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-300 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Analytics Card */}
                <div className="absolute -left-8 top-8 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-sm text-gray-600 mb-2">Analytics</div>
                  <div className="flex items-end gap-1">
                    <div className="w-2 h-4 bg-blue-500 rounded"></div>
                    <div className="w-2 h-6 bg-blue-500 rounded"></div>
                    <div className="w-2 h-3 bg-blue-500 rounded"></div>
                    <div className="w-2 h-5 bg-blue-500 rounded"></div>
                  </div>
                </div>
                
                {/* HR Services Card */}
                <div className="absolute -right-8 top-12 bg-white rounded-lg p-3 shadow-lg">
                  <div className="text-sm text-gray-600 mb-2">HR Services</div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                </div>
                
                {/* Abstract Shapes */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Dashboard Content - Full Width */}
          <div className="flex-1">
            <Outlet context={{ 
              setQuestionClickHandler: (handler: (question: string) => void) => {
                setQuestionClickHandler(() => handler);
              }
            }} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;