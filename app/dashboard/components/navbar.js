"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar({ onToggleSidebar }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <header className="relative h-16 bg-white border-b border-[#D7D3E2] flex items-center px-4 md:px-6">
      
      {/* Toggle – left */}
      <button
        onClick={onToggleSidebar}
        className="p-2 rounded-md hover:bg-gray-100 z-10"
        aria-label="Toggle Sidebar"
      >
        <Menu size={24} />
      </button>

      {/* Mobile logo – true center */}
      <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
        <img
          src="/logo.svg"
          alt="Assetra"
          className="h-8 w-auto"
        />
      </div>

      {/* Desktop profile – right */}
      <div className="hidden md:flex items-center gap-4 ml-auto">
        <div className="text-right leading-tight">
          <p className="text-sm font-medium text-gray-800">
            {user?.fullName || "User"}
          </p>
          <p className="text-xs text-gray-500">
            {user?.role || "Employee"}
          </p>
        </div>

        <div className="w-9 h-9 rounded-full bg-[#6A2CD8] text-white flex items-center justify-center font-semibold">
          {user?.fullName?.charAt(0) || "U"}
        </div>
      </div>
    </header>
  );
}
