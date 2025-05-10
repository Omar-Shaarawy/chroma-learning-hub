
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { 
  Home, BookOpen, Video, Users, CreditCard, 
  FileText, PieChart, Menu, X 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { 
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";

const DashboardLayout = () => {
  const location = useLocation();
  const path = location.pathname;
  const [open, setOpen] = useState(true);

  const navigationItems = [
    { name: "لوحة التحكم", href: "/dashboard", icon: Home },
    { name: "دوراتي", href: "/dashboard/courses", icon: BookOpen },
    { name: "البث المباشر", href: "/dashboard/live", icon: Video },
    { name: "تفاعل الطلاب", href: "/dashboard/engagement", icon: Users },
    { name: "المدفوعات", href: "/dashboard/payments", icon: CreditCard },
    { name: "الملفات", href: "/dashboard/files", icon: FileText },
    { name: "التحليلات", href: "/dashboard/analytics", icon: PieChart },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
            أستاذي
          </span>
        </Link>
        <button 
          onClick={() => setOpen(!open)} 
          className="p-2 rounded-md hover:bg-gray-100"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider defaultOpen={true}>
          <Sidebar className="pt-16 md:pt-0">
            <SidebarHeader>
              <div className="flex items-center px-4 py-3">
                <Link to="/" className="flex items-center space-x-2">
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
                    أستاذي
                  </span>
                </Link>
                <div className="mr-auto">
                  <SidebarTrigger />
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent className="px-4">
              <SidebarMenu>
                {navigationItems.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <Link to={item.href}>
                      <SidebarMenuButton
                        isActive={path === item.href}
                        tooltip={item.name}
                      >
                        <item.icon />
                        <span>{item.name}</span>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="px-4">
              <div className="mb-4 mt-auto">
                <Link to="/dashboard/settings">
                  <SidebarMenuButton tooltip="الإعدادات" className="w-full">
                    <span>الإعدادات</span>
                  </SidebarMenuButton>
                </Link>
              </div>
            </SidebarFooter>
          </Sidebar>

          <div className="flex-1 overflow-y-auto">
            <div className="container mx-auto px-4 py-6 md:py-8">
              <Outlet />
            </div>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default DashboardLayout;
