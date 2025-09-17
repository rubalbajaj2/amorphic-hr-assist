import { useState, useEffect, useCallback } from "react";
import { useOutletContext } from "react-router-dom";
import { AgentCommandBar } from "@/components/AgentCommandBar";
import { TaskExecutionView } from "@/components/TaskExecutionView";
import { MetricsSection } from "@/components/MetricsSection";
import { SuggestedNextSteps } from "@/components/SuggestedNextSteps";
import { questionMapping } from "@/data/questionMapping";
import { suggestedStepsMapping } from "@/data/suggestedStepsMapping";

const Dashboard = () => {
  const [currentTask, setCurrentTask] = useState<any>(null);
  const [metrics] = useState({
    onboarding: 4,
    policies: 2,
    queries: 7
  });
  const [externalCommand, setExternalCommand] = useState<string>("");
  const [autoExecute, setAutoExecute] = useState<boolean>(false);
  const [suggestedSteps, setSuggestedSteps] = useState<{ findOutput?: string; nextSteps?: string[] }>({});
  const [suggestedStepsLoading, setSuggestedStepsLoading] = useState<{ findOutput: boolean; nextSteps: boolean }>({ findOutput: false, nextSteps: false });
  
  const { setQuestionClickHandler } = useOutletContext<{
    setQuestionClickHandler: (handler: (question: string) => void) => void;
  }>();

  const handleQuestionClick = useCallback((question: string) => {
    setExternalCommand(question);
    setAutoExecute(false); // Don't auto-execute, just populate the field
  }, []);

  const handleClear = useCallback(() => {
    setExternalCommand("");
    setAutoExecute(false);
    setCurrentTask(null);
    setSuggestedSteps({});
    setSuggestedStepsLoading({ findOutput: false, nextSteps: false });
  }, []);

  useEffect(() => {
    if (setQuestionClickHandler) {
      setQuestionClickHandler(handleQuestionClick);
    }
  }, [setQuestionClickHandler, handleQuestionClick]);

  const handleAgentCommand = async (command: string) => {
    // Clear any existing suggested steps at the start
    setSuggestedSteps({});
    setSuggestedStepsLoading({ findOutput: false, nextSteps: false });

    // Simulate agent processing
    const taskId = Date.now().toString();
    const task = {
      id: taskId,
      command,
      title: extractTaskTitle(command),
      status: "processing",
      steps: generateTaskSteps(command),
    };

    setCurrentTask(task);
    
    // Simulate step-by-step execution
    for (let i = 0; i < task.steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
      
      setCurrentTask(prev => ({
        ...prev,
        steps: prev.steps.map((step: any, index: number) => 
          index === i ? { ...step, status: "completed" } : step
        )
      }));
    }

    // Mark task as completed
    setCurrentTask(prev => ({ ...prev, status: "completed" }));

    // Set suggested steps after task completion with loading states
    const steps = suggestedStepsMapping[command];
    if (steps) {
      // Start loading for both sections
      setSuggestedStepsLoading({ findOutput: true, nextSteps: true });
      
      // Show "Find the Output" after a longer delay
      setTimeout(() => {
        setSuggestedSteps(prev => ({
          ...prev,
          findOutput: steps.findOutput
        }));
        setSuggestedStepsLoading(prev => ({ ...prev, findOutput: false }));
      }, 2000);
      
      // Show "Plan Your Actions" after an even longer delay
      setTimeout(() => {
        setSuggestedSteps(prev => ({
          ...prev,
          nextSteps: steps.nextSteps
        }));
        setSuggestedStepsLoading(prev => ({ ...prev, nextSteps: false }));
      }, 4000);
    }
    
    // Reset external command state after execution
    setExternalCommand("");
    setAutoExecute(false);
  };

  const extractTaskTitle = (command: string): string => {
    if (command.toLowerCase().includes("onboard")) {
      const nameMatch = command.match(/onboard.*?([A-Z][a-z]+ [A-Z][a-z]+)/i);
      return nameMatch ? `Onboarding: ${nameMatch[1]}` : "Employee Onboarding";
    }
    return "AI Task Execution";
  };

  const generateTaskSteps = (command: string) => {
    // First check if we have a predefined mapping for this exact command
    const mappedSteps = questionMapping[command];
    if (mappedSteps) {
      return mappedSteps.map((text, index) => ({
        id: index + 1,
        text,
        status: "pending" as const
      }));
    }
    
    // Fallback for custom commands
    if (command.toLowerCase().includes("onboard")) {
      return [
        { id: 1, text: "Creating profile in Workday...", status: "pending" },
        { id: 2, text: "Provisioning IT accounts (Email, Slack, Jira)...", status: "pending" },
        { id: 3, text: "Analyzing manager's calendar for induction slots...", status: "pending" },
        { id: 4, text: "Sending meeting invite for induction session...", status: "pending" },
        { id: 5, text: "Updating onboarding tracker...", status: "pending" },
      ];
    }
    
    return [
      { id: 1, text: "Analyzing request...", status: "pending" },
      { id: 2, text: "Executing primary task...", status: "pending" },
      { id: 3, text: "Finalizing results...", status: "pending" },
    ];
  };

  return (
    <div className="space-y-8">
      {/* Agent Command Bar */}
          <div className="fade-in">
            <AgentCommandBar
              onSubmit={handleAgentCommand}
              disabled={currentTask?.status === "processing"}
              externalCommand={externalCommand}
              autoExecute={autoExecute}
              onClear={handleClear}
            />
          </div>

      {/* Real-time Task View */}
      {currentTask && (
        <div className="slide-up">
          <TaskExecutionView task={currentTask} />
        </div>
      )}

      {/* Metrics Section */}
      <div className="fade-in" style={{ animationDelay: "0.2s" }}>
        <MetricsSection />
      </div>

      {/* Suggested Next Steps */}
      <div className="fade-in" style={{ animationDelay: "0.4s" }}>
        <SuggestedNextSteps 
          metrics={metrics} 
          findOutput={suggestedSteps.findOutput}
          nextSteps={suggestedSteps.nextSteps}
          loading={suggestedStepsLoading}
        />
      </div>
    </div>
  );
};

export default Dashboard;