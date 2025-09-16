import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";

interface AgentCommandBarProps {
  onSubmit: (command: string) => void;
  disabled?: boolean;
}

export const AgentCommandBar = ({ onSubmit, disabled = false }: AgentCommandBarProps) => {
  const [command, setCommand] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim() && !disabled) {
      onSubmit(command.trim());
      setCommand("");
    }
  };

  const placeholder = "Give the agent a goal... (e.g., 'Onboard our new analyst, Ben Carter, starting October 1st')";

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-xl rounded-2xl" />
      
      <form onSubmit={handleSubmit} className="relative">
        <div className="glass-card-elevated rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <h2 className="text-lg font-semibold text-foreground">AI Agent Command Center</h2>
          </div>
          
          <div className="flex gap-3">
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              placeholder={placeholder}
              disabled={disabled}
              className="agent-command-input flex-1"
            />
            
            <Button
              type="submit"
              disabled={!command.trim() || disabled}
              className="bg-gradient-primary hover:bg-gradient-primary/90 px-6"
            >
              <Send className="h-4 w-4 mr-2" />
              Execute
            </Button>
          </div>
          
          {disabled && (
            <div className="mt-3 text-sm text-warning flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning animate-pulse" />
              Agent is currently processing a task...
            </div>
          )}
        </div>
      </form>
    </div>
  );
};