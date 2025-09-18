import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, User } from "lucide-react";

const timelineStages = [
  { id: "offer", title: "Offer Signed", color: "bg-success" },
  { id: "provisioning", title: "IT & Systems Provisioning", color: "bg-warning" },
  { id: "induction", title: "Induction Scheduled", color: "bg-primary" },
  { id: "completed", title: "Completed", color: "bg-accent" },
];

const mockEmployees = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Developer",
    manager: "David Chen",
    startDate: "2024-10-06",
    currentStage: "provisioning",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "UX Designer", 
    manager: "Sarah Williams",
    startDate: "2024-10-15",
    currentStage: "offer",
    avatar: "MJ",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Data Analyst",
    manager: "Michael Torres",
    startDate: "2024-09-28",
    currentStage: "completed",
    avatar: "ER",
  },
];

const OnboardingTracker = () => {
  const [employees] = useState(mockEmployees);

  const getEmployeesByStage = (stageId: string) => {
    return employees.filter(emp => emp.currentStage === stageId);
  };

  const getStagePosition = (stageId: string) => {
    return timelineStages.findIndex(stage => stage.id === stageId);
  };

  return (
    <div className="space-y-8">
      <div className="fade-in">
        <h1 className="text-3xl font-bold text-foreground mb-2">Onboarding Tracker</h1>
        <p className="text-muted-foreground">
          Track the progress of new hires through the onboarding process
        </p>
      </div>

      {/* Timeline View */}
      <div className="fade-in" style={{ animationDelay: "0.1s" }}>
        <div className="grid grid-cols-4 gap-6">
          {timelineStages.map((stage, stageIndex) => {
            const employeesInStage = getEmployeesByStage(stage.id);
            
            return (
              <div key={stage.id} className="timeline-stage">
                {/* Stage Header */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${stage.color}`} />
                  <h3 className="font-semibold text-foreground text-xs whitespace-nowrap">{stage.title}</h3>
                </div>

                {/* Progress Line */}
                {stageIndex < timelineStages.length - 1 && (
                  <div className="absolute top-6 left-full w-6 h-0.5 bg-border" />
                )}

                {/* Employee Cards */}
                <div className="space-y-3">
                  {employeesInStage.map((employee) => (
                    <Card key={employee.id} className="glass-card p-4 hover:border-white/30 transition-all duration-300">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                          {employee.avatar}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground text-sm">
                            {employee.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            {employee.role}
                          </p>
                          
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <User className="h-3 w-3 text-blue-500" />
                              {employee.manager}
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3 text-blue-500" />
                              {new Date(employee.startDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                  
                  {employeesInStage.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground text-sm">
                      No employees in this stage
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Summary Stats */}
      <div className="fade-in" style={{ animationDelay: "0.2s" }}>
        <Card className="glass-card p-6">
          <h3 className="font-semibold text-foreground mb-4">Onboarding Summary</h3>
          <div className="grid grid-cols-4 gap-4">
            {timelineStages.map((stage) => {
              const count = getEmployeesByStage(stage.id).length;
              return (
                <div key={stage.id} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{count}</div>
                  <div className="text-xs text-muted-foreground">{stage.title}</div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OnboardingTracker;