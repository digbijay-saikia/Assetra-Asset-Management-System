"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#F5F4F8] overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      {/* Main */}
      <div className="flex flex-col flex-1">
        <Navbar
          onToggleSidebar={() => {
            if (window.innerWidth < 768) {
              setMobileOpen((v) => !v);
            } else {
              setCollapsed((v) => !v);
            }
          }}
        />

        <main className="flex-1 overflow-y-auto px-6 xl:px-8 py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
