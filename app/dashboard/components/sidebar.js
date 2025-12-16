"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

export default function Sidebar({ collapsed, mobileOpen, onCloseMobile }) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Assets", href: "/dashboard/assets", icon: Package },
    { name: "Reports", href: "/dashboard/reports", icon: BarChart3 },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static z-50
          h-full bg-white border-r border-[#D7D3E2]
          transition-all duration-300
          ${collapsed ? "md:w-20" : "md:w-64"}
          ${mobileOpen ? "left-0 w-64" : "-left-64 md:left-0"}
        `}
      >
        {/* Logo – desktop only */}
        <div className="hidden md:flex items-center justify-center py-4">
          <img
            src={collapsed ? "/logo-icon.svg" : "/logo.svg"}
            alt="Assetra Logo"
            className="h-8 w-auto"
          />
        </div>


        {/* Mobile Profile */}
        <div className="md:hidden px-4 py-4 border-b border-[#D7D3E2]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#6A2CD8] text-white flex items-center justify-center font-semibold">
              U
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                User Name
              </p>
              <p className="text-xs text-gray-500">
                Employee
              </p>
            </div>
          </div>
        </div>


        {/* Menu */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {menu.map((item) => {
            const active = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={onCloseMobile}
                className={`flex items-center gap-3 rounded-lg transition
                  ${active ? "bg-[#6A2CD8] text-white" : "text-gray-700 hover:bg-gray-100"}
                  ${collapsed ? "justify-center p-3" : "px-5 py-3"}
                `}
              >
                <Icon size={18} />
                {!collapsed && item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className={`border-t border-[#D7D3E2] ${collapsed ? "p-3" : "p-4"}`}>
          <button className="w-full flex items-center justify-center gap-2 py-2 text-sm rounded-lg border border-[#D7D3E2] hover:bg-gray-100">
            <LogOut size={16} />
            {!collapsed && "Logout"}
          </button>
        </div>
      </aside>
    </>
  );
}
