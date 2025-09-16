import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Home, Users, BookOpen, MessageSquare } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Onboarding Tracker",
    url: "/onboarding",
    icon: Users,
  },
  {
    title: "Knowledge Base",
    url: "/knowledge-base",
    icon: BookOpen,
  },
];

const recentQuestions = [
  "Create a job description for a Senior UX Designer.",
  "Screen the latest 20 applicants for the Junior Marketing role.",
  "Schedule a 30-minute screening call with candidate Alice Miller.",
  "Generate interview kits for the 3 finalists for the Data Analyst position.",
  "Find three potential candidates for a 'Head of Sustainability' role on LinkedIn.",
  "Send rejection emails to all applicants for the 'Office Manager' role.",
  "Prepare an offer letter for Jane Doe for the Software Engineer role...",
  "Check the status of the background check for candidate Tom Hardy.",
  "Draft a social media post for our company's Instagram about hiring.",
  "What is our average time-to-hire for engineering roles this year?",
  "Onboard our new software developer, Priya Sharma.",
  "Process the resignation for Mark Johnson.",
  "Prepare an onboarding plan for our new remote intern, Sam Wilson.",
  "Revoke all system access for contractor Emily White.",
  "Send a 'first-day welcome' email to all new hires starting next Monday.",
  "Assign mandatory 'Health & Safety' and 'Data Protection' training.",
  "Schedule a 90-day probation review for Priya Sharma.",
  "Transfer all of Mark Johnson's documents from OneDrive to his manager.",
  "What is the current salary band for a 'Senior Product Manager' role?",
  "Enrol new employee Ben Carter in the private health insurance plan.",
  "Process a one-time bonus of £1,500 for Sarah Jones.",
  "Generate total reward statements for all members of the sales team.",
  "Remind all employees to submit their expense reports for last month.",
  "How many employees are enrolled in our cycle-to-work scheme?",
  "Increase Olivia Chen's salary by 5% effective October 1st.",
  "Log a formal grievance for an employee in the IT department.",
  "Initiate the annual performance review cycle for all departments.",
  "Draft a Performance Improvement Plan (PIP) for an employee...",
  "Anonymously survey the engineering team about their current morale.",
  "What is our company's policy on flexible working requests?",
  "Log a long-term sickness absence for John Doe, starting today.",
  "Find a certified mediator to help resolve a team conflict.",
  "Generate a report on employee turnover for Q3 2025.",
  "What is our current gender pay gap?",
  "List all employees whose 'Right to Work' visas expire in the next 90 days.",
  "Confirm all new hires from last month have completed their GDPR training.",
  "What is our overall employee headcount as of today?",
  "Generate a diversity and inclusion report for the leadership team.",
  "Check if our employee handbook is compliant with the latest UK employment laws.",
  "Archive all employee records for staff who left more than 6 years ago.",
  "Book a meeting room for the HR team's monthly meeting this Friday.",
  "Order a new ergonomic chair for Ben Carter and have it sent to his home.",
  "Draft a company-wide announcement about the upcoming bank holiday.",
  "Who is Olivia Chen's line manager?",
  "Renew our company's subscription to our HR software.",
  "Translate our 'Welcome to the Team' document into Spanish.",
  "Set up a new Slack channel for the 'Social Committee'.",
  "What training courses did the marketing team complete last quarter?",
  "Send a password reset link to employee John Doe.",
  "Summarise the key takeaways from our last employee engagement survey."
];

interface AppSidebarProps {
  onQuestionClick?: (question: string) => void;
}

export function AppSidebar({ onQuestionClick }: AppSidebarProps) {
  const { state } = useSidebar();
  const location = useLocation();
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "nav-item-active"
      : "hover:bg-white/10 transition-all duration-300";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarContent className="bg-background border-r border-white/10">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 p-4">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) => getNavCls({ isActive })}
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && (
                        <span className="font-medium">{item.title}</span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel className="px-4 flex items-center gap-2 text-muted-foreground">
              <MessageSquare className="h-4 w-4" />
              Recent Questions
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="px-4 max-h-[calc(100vh-280px)] overflow-y-auto">
                <div className="space-y-1">
                  {recentQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => onQuestionClick?.(question)}
                      className="w-full text-left p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-md transition-colors duration-200 whitespace-normal leading-relaxed"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
    </Sidebar>
  );
}