"use client";

import {
  Boxes,
  Laptop,
  Tablet,
  Printer,
  Layers,
  ClipboardList,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="px-3 md:px-6 xl:px-8">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">
        Overview
      </h1>
      <p className="text-gray-600 mb-8">
        Welcome to Assetra Asset Management System.
      </p>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard title="Total Assets" value="128" icon={Boxes} />
        <StatCard title="Assigned Assets" value="94" icon={Layers} />
        <StatCard title="Pending Requests" value="7" icon={ClipboardList} />
        <StatCard title="Available Assets" value="34" icon={Boxes} />
      </div>

      {/* Asset Categories */}
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Asset Categories
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CategoryCard title="Laptops" count="62" icon={Laptop} />
        <CategoryCard title="Tablets" count="28" icon={Tablet} />
        <CategoryCard title="Printers" count="14" icon={Printer} />
        <CategoryCard title="Others" count="24" icon={Boxes} />
      </div>
    </div>
  );
}


/* ---------- Components ---------- */

function StatCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white border border-[#D7D3E2] rounded-xl p-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">
          {value}
        </p>
      </div>

      <div className="w-12 h-12 rounded-lg bg-[#6A2CD8]/10 flex items-center justify-center">
        <Icon size={22} className="text-[#6A2CD8]" />
      </div>
    </div>
  );
}

function CategoryCard({ title, count, icon: Icon }) {
  return (
    <div className="bg-white border border-[#D7D3E2] rounded-xl p-6 flex items-center gap-4">
      <div className="w-11 h-11 rounded-lg bg-[#6A2CD8]/10 flex items-center justify-center">
        <Icon size={20} className="text-[#6A2CD8]" />
      </div>

      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xl font-semibold text-gray-800">
          {count}
        </p>
      </div>
    </div>
  );
}
