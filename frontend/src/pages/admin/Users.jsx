// src/pages/admin/Users.jsx
import React, { useState } from "react";
import { ToggleLeft } from "lucide-react";

const initialUsers = [
  { id: "u1", name: "Riya Sharma", email: "riya@example.com", status: "active", role: "user", joined: "2024-01-10" },
  { id: "u2", name: "Amit Kumar", email: "amit@example.com", status: "disabled", role: "user", joined: "2023-11-03" },
  { id: "u3", name: "Admin User", email: "admin@travelzo.com", status: "active", role: "admin", joined: "2022-05-22" },
];

export default function Users() {
  const [users, setUsers] = useState(initialUsers);

  const toggleUser = (id) => {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status: u.status === "active" ? "disabled" : "active" } : u)));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#0A1F44]">Users</h1>
      </div>

      <div className="bg-white rounded-2xl shadow p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Joined</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u.id} className="border-t">
                  <td className="px-4 py-3">{u.name}</td>
                  <td className="px-4 py-3">{u.email}</td>
                  <td className="px-4 py-3">{u.role}</td>
                  <td className="px-4 py-3">{u.joined}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${u.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {u.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => toggleUser(u.id)}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200"
                    >
                      <ToggleLeft size={16} />
                      {u.status === "active" ? "Disable" : "Enable"}
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
