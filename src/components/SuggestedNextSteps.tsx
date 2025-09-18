import { Card } from "@/components/ui/card";
import { Sparkles, Search, CheckCircle, Loader2, Lightbulb } from "lucide-react";

interface SuggestedNextStepsProps {
  metrics?: {
    onboarding: number;
    policies: number;
    queries: number;
  };
  findOutput?: string;
  nextSteps?: string[];
  proTip?: string;
  loading?: {
    findOutput: boolean;
    nextSteps: boolean;
    proTip: boolean;
  };
}

export const SuggestedNextSteps = ({ metrics, findOutput, nextSteps, proTip, loading }: SuggestedNextStepsProps) => {
  const generateDefaultSuggestions = () => {
    if (!metrics) return [];
    
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

  const defaultSuggestions = generateDefaultSuggestions();

  return (
    <Card className="glass-card p-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Suggested Next Steps</h3>
      </div>
      
      <div className="space-y-6">
        {/* Find the Output Section */}
        {(findOutput || loading?.findOutput) && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Search className="h-5 w-5 text-blue-400" />
              <h4 className="text-md font-semibold text-foreground">Find the Output</h4>
            </div>
            <div className="p-4 rounded-lg bg-blue-50/10 border border-blue-200/20">
              {loading?.findOutput ? (
                <div className="flex items-center gap-3">
                  <Loader2 className="h-4 w-4 animate-spin text-blue-400" />
                  <p className="text-sm text-muted-foreground">Analyzing output location...</p>
                </div>
              ) : (
                <p className="text-sm text-foreground">{findOutput}</p>
              )}
            </div>
          </div>
        )}

        {/* Next Steps Section */}
        {((nextSteps && nextSteps.length > 0) || loading?.nextSteps) && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <h4 className="text-md font-semibold text-foreground">Plan Your Actions</h4>
            </div>
            <div className="space-y-2">
              {loading?.nextSteps ? (
                <div className="flex items-center gap-3 p-3 rounded-lg bg-background-secondary/30 border border-white/10">
                  <Loader2 className="h-4 w-4 animate-spin text-green-400" />
                  <p className="text-sm text-muted-foreground">Generating action plan...</p>
                </div>
              ) : (
                nextSteps?.map((step, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-background-secondary/30 border border-white/10"
                  >
                    <p className="text-sm text-foreground">{step}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* Pro Tip Section */}
        {(proTip || loading?.proTip) && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="h-5 w-5 text-yellow-400" />
              <h4 className="text-md font-semibold text-foreground">Pro Tip</h4>
            </div>
            <div className="p-4 rounded-lg bg-yellow-50/10 border border-yellow-200/20">
              {loading?.proTip ? (
                <div className="flex items-center gap-3">
                  <Loader2 className="h-4 w-4 animate-spin text-yellow-400" />
                  <p className="text-sm text-muted-foreground">Generating pro tip...</p>
                </div>
              ) : (
                <p 
                  className="text-sm text-foreground"
                  dangerouslySetInnerHTML={{
                    __html: proTip?.replace(/\*(.*?)\*/g, '<em class="italic text-yellow-300">$1</em>') || ''
                  }}
                />
              )}
            </div>
          </div>
        )}

        {/* Default suggestions when no specific output/steps provided and metrics are available */}
        {!findOutput && !nextSteps && !proTip && !loading?.findOutput && !loading?.nextSteps && !loading?.proTip && metrics && (
          <div className="space-y-3">
            {defaultSuggestions.map((suggestion, index) => (
              <div
                key={index}
                className="p-3 rounded-lg bg-background-secondary/30 border border-white/10"
              >
                <p className="text-sm text-foreground">{suggestion}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};