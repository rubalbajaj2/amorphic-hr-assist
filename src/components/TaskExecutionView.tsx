import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Loader2, Clock } from "lucide-react";

interface TaskStep {
  id: number;
  text: string;
  status: "pending" | "completed";
}

interface Task {
  id: string;
  title: string;
  command: string;
  status: "processing" | "completed";
  steps: TaskStep[];
}

interface TaskExecutionViewProps {
  task: Task;
}

export const TaskExecutionView = ({ task }: TaskExecutionViewProps) => {
  const completedSteps = task.steps.filter(step => step.status === "completed").length;
  const totalSteps = task.steps.length;
  const progressPercentage = (completedSteps / totalSteps) * 100;

  const getStepIcon = (status: TaskStep["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "pending":
        return <Loader2 className="h-5 w-5 text-blue-500 animate-spin" />;
      default:
        return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm p-6 shadow-2xl border border-white/30">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-600 mt-1">"{task.command}"</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Badge 
            variant="outline" 
            className={
              task.status === "completed" 
                ? "bg-green-100 text-green-600 border-green-300" 
                : "bg-blue-100 text-blue-500 border-blue-300"
            }
          >
            {task.status === "completed" ? "Complete" : "Processing"}
          </Badge>
          
          <div className="text-sm text-gray-600">
            {completedSteps}/{totalSteps} steps
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-white/20 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Task Steps */}
      <div className="space-y-3">
        {task.steps.map((step) => (
          <div
            key={step.id}
            className={`task-step ${step.status}`}
          >
            {getStepIcon(step.status)}
            <span 
              className={`flex-1 ${
                step.status === "completed" 
                  ? "text-foreground" 
                  : "text-muted-foreground"
              }`}
              dangerouslySetInnerHTML={{
                __html: step.text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
              }}
            />
          </div>
        ))}
      </div>

      {task.status === "completed" && (
        <div className="mt-6 p-4 rounded-lg bg-green-50 border border-green-200">
          <div className="flex items-center gap-2 text-green-600">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Task completed successfully!</span>
          </div>
          <p className="text-sm text-green-500 mt-1">
            All steps have been executed. You can now check the results in the relevant sections.
          </p>
        </div>
      )}
    </Card>
  );
};