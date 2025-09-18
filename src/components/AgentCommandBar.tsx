import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, X } from "lucide-react";

interface AgentCommandBarProps {
  onSubmit: (command: string) => void;
  disabled?: boolean;
  externalCommand?: string;
  autoExecute?: boolean;
  onClear?: () => void;
}

export const AgentCommandBar = ({ onSubmit, disabled = false, externalCommand, autoExecute = false, onClear }: AgentCommandBarProps) => {
  const [command, setCommand] = useState("");
  const executeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle external command input
  useEffect(() => {
    if (externalCommand) {
      setCommand(externalCommand);
      if (autoExecute && !disabled) {
        // Small delay to ensure the input is updated, then focus on execute button
        setTimeout(() => {
          if (executeButtonRef.current) {
            executeButtonRef.current.focus();
            executeButtonRef.current.click();
          }
        }, 100);
      }
    }
  }, [externalCommand, autoExecute, disabled, onSubmit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim() && !disabled) {
      onSubmit(command.trim());
      setCommand("");
    }
  };

  const handleClear = () => {
    setCommand("");
    if (onClear) {
      onClear();
    }
  };

  const placeholder = "Give the agent a goal... (e.g., 'Onboard our new analyst, Ben Carter, starting October 1st')";

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 blur-xl rounded-2xl" />
      
      <form onSubmit={handleSubmit} className="relative">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">AI Agent Command Center</h2>
          </div>
          
          <div className="flex gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                className="agent-command-input w-full pr-10"
              />
              {command && (
                <button
                  type="button"
                  onClick={handleClear}
                  disabled={disabled}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
                <Button
                  ref={executeButtonRef}
                  type="submit"
                  disabled={!command.trim() || disabled}
                  className="bg-blue-600 hover:bg-blue-700 px-6 h-12 text-white"
                >
              <Send className="h-4 w-4 mr-2" />
              Execute
            </Button>
          </div>
          
              {disabled && (
                <div className="mt-3 text-sm text-orange-600 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  Agent is currently processing a task...
                </div>
              )}
              
              {externalCommand && !disabled && (
                <div className="mt-3 text-sm text-blue-500 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Question loaded! Click "Execute" to run the command.
                </div>
              )}
        </div>
      </form>
    </div>
  );
};