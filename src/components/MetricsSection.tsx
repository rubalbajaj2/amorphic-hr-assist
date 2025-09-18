import { Card } from "@/components/ui/card";
import { Users, FileCheck, HelpCircle, TrendingUp } from "lucide-react";

const metrics = [
  {
    id: 1,
    title: "Active Employees Onboarding",
    value: 4,
    change: "+2 this week",
    trend: "up",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Pending Policy Reviews",
    value: 7,
    change: "-3 since last month",
    trend: "down",
    icon: FileCheck,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    id: 3,
    title: "Open Employee Queries",
    value: 12,
    change: "+5 today",
    trend: "up",
    icon: HelpCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

export const MetricsSection = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Key Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <Card 
            key={metric.id} 
            className="metric-card fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-2">
                  {metric.title}
                </p>
                <p className="text-3xl font-bold text-gray-800 mb-2">
                  {metric.value}
                </p>
                <div className="flex items-center gap-1 text-sm">
                  <TrendingUp 
                    className={`h-4 w-4 ${
                      metric.trend === "up" ? "text-green-500" : "text-red-500"
                    } ${metric.trend === "down" ? "rotate-180" : ""}`} 
                  />
                  <span 
                    className={
                      metric.trend === "up" ? "text-green-500" : "text-red-500"
                    }
                  >
                    {metric.change}
                  </span>
                </div>
              </div>
              
              <div className={`p-3 rounded-xl ${metric.bgColor}`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};