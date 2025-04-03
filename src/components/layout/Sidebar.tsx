
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  User,
  Settings,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

type SidebarItem = {
  icon: React.ElementType;
  label: string;
  path: string;
};

const sidebarItems: SidebarItem[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/",
  },
  {
    icon: FileText,
    label: "Conteúdo",
    path: "/content",
  },
  {
    icon: User,
    label: "Perfil",
    path: "/profile",
  },
  {
    icon: Settings,
    label: "Configurações",
    path: "/settings",
  },
];

export function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  return (
    <div
      className={cn(
        "flex flex-col h-screen bg-sidebar fixed lg:sticky top-0 left-0 z-40 border-r border-sidebar-border transition-all duration-300",
        isCollapsed ? "w-[70px]" : "w-[250px]"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {!isCollapsed && (
          <span className="font-bold text-xl text-sidebar-foreground">Admin</span>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-sidebar-foreground hover:bg-sidebar-accent ml-auto"
        >
          {isCollapsed ? <Menu size={18} /> : <X size={18} />}
        </Button>
      </div>

      <nav className="flex-1 p-2 space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all hover:bg-sidebar-accent",
              location.pathname === item.path
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-sidebar-foreground",
              isCollapsed && "justify-center"
            )}
          >
            <item.icon className={cn("h-5 w-5", isCollapsed ? "mr-0" : "mr-2")} />
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className={cn(
          "flex items-center",
          isCollapsed && "justify-center"
        )}>
          <div className="w-8 h-8 rounded-full bg-sidebar-primary flex items-center justify-center text-white">
            A
          </div>
          {!isCollapsed && (
            <div className="ml-3">
              <p className="text-sm font-medium text-sidebar-foreground">Admin User</p>
              <p className="text-xs text-sidebar-foreground/70">admin@example.com</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
