import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface SuggestedNextStepsProps {
  metrics: {
    onboarding: number;
    policies: number;
    queries: number;
  };
}

export const SuggestedNextSteps = ({ metrics }: SuggestedNextStepsProps) => {
  const generateSuggestions = () => {
    const suggestions = [];
    
    if (metrics.onboarding > 0) {
      suggestions.push(
        `With ${metrics.onboarding} employees currently onboarding, check the 'Onboarding Tracker' to ensure there are no bottlenecks.`
      );
    }
    
    if (metrics.policies > 0) {
      suggestions.push(
        `There are ${metrics.policies} policies pending review. Prioritise these to ensure compliance.`
      );
    }
    
    if (metrics.queries > 0) {
      suggestions.push(
        `The ${metrics.queries} open queries are the highest priority. Ask the agent to 'Summarise open employee queries' to get an overview.`
      );
    }
    
    if (suggestions.length === 0) {
      suggestions.push("All systems running smoothly! Consider reviewing this week's performance metrics or planning next quarter's initiatives.");
    }
    
    return suggestions;
  };

  const suggestions = generateSuggestions();

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Suggested Next Steps</h3>
      </div>
      
      <div className="space-y-3">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="p-3 rounded-lg bg-background-secondary/30 border border-white/10"
          >
            <p className="text-sm text-foreground">{suggestion}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};