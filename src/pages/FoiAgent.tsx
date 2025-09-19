import { useState, useEffect, useCallback } from "react";
import { useOutletContext } from "react-router-dom";
import { AgentCommandBar } from "@/components/AgentCommandBar";
import { TaskExecutionView } from "@/components/TaskExecutionView";
import { MetricsSection } from "@/components/MetricsSection";
import { SuggestedNextSteps } from "@/components/SuggestedNextSteps";
import { questionMapping } from "@/data/questionMapping";
import { suggestedStepsMapping } from "@/data/suggestedStepsMapping";
import { proTipMapping } from "@/data/proTipMapping";

const FoiAgent = () => {
  const [currentTask, setCurrentTask] = useState<any>(null);
  const [metrics] = useState({
    foiRequests: 12,
    responses: 8,
    pending: 4
  });
  const [externalCommand, setExternalCommand] = useState<string>("");
  const [autoExecute, setAutoExecute] = useState<boolean>(false);
  const [suggestedSteps, setSuggestedSteps] = useState<{ findOutput?: string; nextSteps?: string[]; proTip?: string }>({});
  const [suggestedStepsLoading, setSuggestedStepsLoading] = useState<{ findOutput: boolean; nextSteps: boolean; proTip: boolean }>({ findOutput: false, nextSteps: false, proTip: false });
  const [currentCommand, setCurrentCommand] = useState<string>("");
  const [showMetrics, setShowMetrics] = useState<boolean>(false);
  const [metricsLoading, setMetricsLoading] = useState<boolean>(false);
  
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
    setSuggestedStepsLoading({ findOutput: false, nextSteps: false, proTip: false });
    setCurrentCommand("");
    setShowMetrics(false);
    setMetricsLoading(false);
  }, []);

  const isFoiRelated = useCallback((command: string) => {
    const foiKeywords = [
      'foi', 'freedom of information', 'request', 'disclosure', 'public information',
      'data request', 'information request', 'transparency', 'public records'
    ];
    return foiKeywords.some(keyword => 
      command.toLowerCase().includes(keyword)
    );
  }, []);

  useEffect(() => {
    if (setQuestionClickHandler) {
      setQuestionClickHandler(handleQuestionClick);
    }
  }, [setQuestionClickHandler, handleQuestionClick]);

  const handleAgentCommand = async (command: string) => {
    // Clear any existing suggested steps at the start
    setSuggestedSteps({});
    setSuggestedStepsLoading({ findOutput: false, nextSteps: false, proTip: false });
    setCurrentCommand(command);
    setShowMetrics(false);
    setMetricsLoading(false);

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
    const proTip = proTipMapping[command];
    
    if (steps || proTip) {
      // Start loading for all sections
      setSuggestedStepsLoading({ findOutput: true, nextSteps: true, proTip: true });
      
      // Show "Find the Output" after a longer delay
      setTimeout(() => {
        setSuggestedSteps(prev => ({
          ...prev,
          findOutput: steps?.findOutput
        }));
        setSuggestedStepsLoading(prev => ({ ...prev, findOutput: false }));
      }, 2000);
      
      // Show "Plan Your Actions" after an even longer delay
      setTimeout(() => {
        setSuggestedSteps(prev => ({
          ...prev,
          nextSteps: steps?.nextSteps
        }));
        setSuggestedStepsLoading(prev => ({ ...prev, nextSteps: false }));
      }, 4000);
      
      // Show "Pro Tip" after the longest delay
      setTimeout(() => {
        setSuggestedSteps(prev => ({
          ...prev,
          proTip: proTip
        }));
        setSuggestedStepsLoading(prev => ({ ...prev, proTip: false }));
        
        // After all suggested steps are complete, show metrics for FOI questions
        if (isFoiRelated(command)) {
          setTimeout(() => {
            setMetricsLoading(true);
            setTimeout(() => {
              setMetricsLoading(false);
              setShowMetrics(true);
            }, 2000); // 2 seconds loading for metrics
          }, 1000); // 1 second delay after pro tip appears
        }
      }, 6000);
    }
    
    // Reset external command state after execution
    setExternalCommand("");
    setAutoExecute(false);
  };

  const extractTaskTitle = (command: string): string => {
    if (command.toLowerCase().includes("foi") || command.toLowerCase().includes("freedom of information")) {
      return "FOI Request Processing";
    }
    if (command.toLowerCase().includes("request")) {
      return "Information Request";
    }
    return "FOI AI Task Execution";
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
    
    // Fallback for FOI-related commands
    if (command.toLowerCase().includes("foi") || command.toLowerCase().includes("freedom of information")) {
      return [
        { id: 1, text: "Analyzing FOI request...", status: "pending" },
        { id: 2, text: "Searching relevant documents...", status: "pending" },
        { id: 3, text: "Reviewing disclosure requirements...", status: "pending" },
        { id: 4, text: "Preparing response...", status: "pending" },
        { id: 5, text: "Finalizing FOI response...", status: "pending" },
      ];
    }
    
    return [
      { id: 1, text: "Analyzing request...", status: "pending" },
      { id: 2, text: "Processing information...", status: "pending" },
      { id: 3, text: "Finalizing response...", status: "pending" },
    ];
  };

  return (
    <div className="space-y-8">
      {/* Header Panel */}
      <div className="glass-card p-6 rounded-2xl relative">
        <div className="flex items-center justify-center relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-400 mb-3">
              Cloudwick | Amorphic
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Amorphic is a cloud orchestration platform that simplifies how IT, business, and data science teams manage advanced AWS analytics and machine learning. By seamlessly integrating over <strong>75+ AWS services</strong> with your existing data pipelines, it streamlines data operations and enhances usability.
            </p>
          </div>
          
          {/* AWS Logo - Panel Corner */}
          <div className="absolute" style={{ top: '-8px', right: '-8px' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" 
              alt="AWS Logo" 
              className="h-6 w-auto brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement.innerHTML = '<div class="text-white font-bold text-xs">AWS</div>';
              }}
            />
          </div>
        </div>
      </div>

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

      {/* Suggested Next Steps - Only show when there's content or loading */}
      {(suggestedSteps.findOutput || suggestedSteps.nextSteps || suggestedSteps.proTip || 
        suggestedStepsLoading.findOutput || suggestedStepsLoading.nextSteps || suggestedStepsLoading.proTip) && (
        <div className="fade-in" style={{ animationDelay: "0.4s" }}>
          <SuggestedNextSteps 
            metrics={metrics} 
            findOutput={suggestedSteps.findOutput}
            nextSteps={suggestedSteps.nextSteps}
            proTip={suggestedSteps.proTip}
            loading={suggestedStepsLoading}
          />
        </div>
      )}

      {/* Metrics Section - Only for FOI-related questions, shown after suggested steps */}
      {isFoiRelated(currentCommand) && (showMetrics || metricsLoading) && (
        <div className="fade-in" style={{ animationDelay: "0.6s" }}>
          {metricsLoading ? (
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                </div>
                <h3 className="text-lg font-semibold text-foreground">Key Metrics</h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-muted-foreground">Loading key metrics...</p>
              </div>
            </div>
          ) : (
            <MetricsSection />
          )}
        </div>
      )}
    </div>
  );
};

export default FoiAgent;
