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
        return <CheckCircle className="h-5 w-5 text-success" />;
      case "pending":
        return <Loader2 className="h-5 w-5 text-primary animate-spin" />;
      default:
        return <Clock className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <Card className="glass-card-elevated p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-foreground">{task.title}</h3>
          <p className="text-sm text-muted-foreground mt-1">"{task.command}"</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Badge 
            variant="outline" 
            className={
              task.status === "completed" 
                ? "bg-success/20 text-success border-success/30" 
                : "bg-primary/20 text-primary border-primary/30"
            }
          >
            {task.status === "completed" ? "Complete" : "Processing"}
          </Badge>
          
          <div className="text-sm text-muted-foreground">
            {completedSteps}/{totalSteps} steps
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Progress</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-background-secondary rounded-full h-2">
          <div 
            className="bg-gradient-primary h-2 rounded-full transition-all duration-500 ease-out"
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
        <div className="mt-6 p-4 rounded-lg bg-success/10 border border-success/20">
          <div className="flex items-center gap-2 text-success">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Task completed successfully!</span>
          </div>
          <p className="text-sm text-success/80 mt-1">
            All steps have been executed. You can now check the results in the relevant sections.
          </p>
        </div>
      )}
    </Card>
  );
};