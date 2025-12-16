"use client";

import { useState } from "react";
import { Edit2, Trash2, Filter } from "lucide-react";

export default function AssetsPage() {
  const initialAssets = [
    { AssetId: "LAP-001", AssetName: "Dell XPS 13", Category: "Laptop", Status: "Available", PurchaseDate: "2023-01-15", Price: "$1200" },
    { AssetId: "TAB-002", AssetName: "iPad Pro", Category: "Tablet", Status: "Assigned", PurchaseDate: "2022-11-20", Price: "$900" },
    { AssetId: "PRN-003", AssetName: "HP LaserJet", Category: "Printer", Status: "Available", PurchaseDate: "2021-08-10", Price: "$450" },
    { AssetId: "OTH-004", AssetName: "Scanner XYZ", Category: "Others", Status: "Deleted", PurchaseDate: "2022-05-05", Price: "$300" },
  ];

  const [assets, setAssets] = useState(initialAssets);
  const [filterCategory, setFilterCategory] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const filteredAssets = assets.filter(a => 
    (filterCategory ? a.Category === filterCategory : true) &&
    (filterStatus ? a.Status === filterStatus : true)
  );

  return (
    <div className="px-3 md:px-6 xl:px-8">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Assets</h1>
      <p className="text-gray-600 mb-6">Manage all company assets here.</p>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4 items-start sm:items-center">
        {/* Category Filter */}
        <div className="flex items-center gap-2 border border-[#D7D3E2] rounded-lg px-3 py-2 hover:border-[#6A2CD8] transition text-gray-700 bg-white">
          <Filter size={16} className="text-[#6A2CD8]" />
          <select
            className="bg-transparent border-none focus:outline-none text-sm text-gray-700"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Laptop">Laptop</option>
            <option value="Tablet">Tablet</option>
            <option value="Printer">Printer</option>
            <option value="Others">Others</option>
          </select>
        </div>

        {/* Status Filter */}
        <div className="flex items-center gap-2 border border-[#D7D3E2] rounded-lg px-3 py-2 hover:border-[#6A2CD8] transition text-gray-700 bg-white">
          <Filter size={16} className="text-[#6A2CD8]" />
          <select
            className="bg-transparent border-none focus:outline-none text-sm text-gray-700"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="Available">Available</option>
            <option value="Assigned">Assigned</option>
            <option value="Deleted">Deleted</option>
          </select>
        </div>

        <button className="ml-auto flex items-center gap-1 bg-[#6A2CD8] text-white px-4 py-2 rounded-lg hover:bg-[#5a24b3] transition text-sm">
          + Add New Asset
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white border border-[#D7D3E2] rounded-xl">
        <table className="min-w-full divide-y divide-[#D7D3E2]">
          <thead className="bg-gray-50">
            <tr>
              {["Asset ID","Name","Category","Status","Purchase Date","Price"].map((col) => (
                <th key={col} className="px-4 py-3 text-left text-sm font-medium text-gray-500">
                  {col}
                </th>
              ))}
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#D7D3E2]">
            {filteredAssets.map(asset => (
              <tr key={asset.AssetId}>
                <td className="px-4 py-3 text-sm text-gray-700">{asset.AssetId}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{asset.AssetName}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{asset.Category}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{asset.Status}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{asset.PurchaseDate}</td>
                <td className="px-4 py-3 text-sm text-gray-700">{asset.Price}</td>
                <td className="px-4 py-3 text-sm text-right flex gap-2 justify-end">
                  <button className="flex items-center gap-1 text-white bg-[#6A2CD8] px-3 py-1 rounded hover:bg-[#5a24b3] transition text-sm">
                    <Edit2 size={16} /> Edit
                  </button>
                  <button className="flex items-center gap-1 text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition text-sm">
                    <Trash2 size={16} /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredAssets.length === 0 && (
          <div className="px-4 py-6 text-center text-gray-500">
            No assets found
          </div>
        )}
      </div>
    </div>
  );
}
