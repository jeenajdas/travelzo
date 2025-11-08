// src/pages/admin/Reports.jsx
import React from "react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar } from "recharts";
import { data as mock } from "../../data/mockData";

/**
 * Reports page showing charts using data/mockData.js
 * Ensure you installed recharts: npm i recharts
 */

export default function Reports() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-[#0A1F44]">Reports & Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold mb-3">Daily Revenue Trends</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <LineChart data={mock.dailyRevenue}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#00A8E8" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-4">
          <h3 className="font-semibold mb-3">Top 5 Routes by Revenue</h3>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={mock.topRoutes}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#00A8E8" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-4">
        <h3 className="font-semibold mb-3">Quick Summary</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
          {mock.stats.map((s, i) => (
            <div key={i} className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500">{s.title}</div>
              <div className="text-xl font-semibold text-[#0A1F44]">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
