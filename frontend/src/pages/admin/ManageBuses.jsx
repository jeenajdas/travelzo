// src/pages/admin/ManageBuses.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, X } from "lucide-react";

/**
 * Simple in-memory CRUD UI for buses.
 * Replace with API calls when backend is ready.
 */

const initialBuses = [
  {
    id: "bus_001",
    name: "Volvo AC Express",
    route: "Kochi → Bangalore",
    seats: 40,
    status: "active",
  },
  {
    id: "bus_002",
    name: "Mercedes Sleeper",
    route: "Mumbai → Pune",
    seats: 30,
    status: "active",
  },
  {
    id: "bus_003",
    name: "Non-AC Seater",
    route: "Chennai → Hyderabad",
    seats: 45,
    status: "disabled",
  },
];

export default function ManageBuses() {
  const [buses, setBuses] = useState(initialBuses);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: "", route: "", seats: 0, status: "active" });

  const openAdd = () => {
    setEditing(null);
    setForm({ name: "", route: "", seats: 0, status: "active" });
    setShowModal(true);
  };

  const openEdit = (bus) => {
    setEditing(bus);
    setForm({ name: bus.name, route: bus.route, seats: bus.seats, status: bus.status });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!form.name.trim() || !form.route.trim()) return;
    if (editing) {
      setBuses((prev) => prev.map((b) => (b.id === editing.id ? { ...b, ...form } : b)));
    } else {
      const newBus = { id: `bus_${Date.now()}`, ...form };
      setBuses((prev) => [newBus, ...prev]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    if (!confirm("Delete this bus? This cannot be undone.")) return;
    setBuses((prev) => prev.filter((b) => b.id !== id));
  };

  const toggleStatus = (id) => {
    setBuses((prev) => prev.map((b) => (b.id === id ? { ...b, status: b.status === "active" ? "disabled" : "active" } : b)));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#0A1F44]">Manage Buses</h1>
        <button
          onClick={openAdd}
          className="inline-flex items-center gap-2 bg-[#00A8E8] text-white px-4 py-2 rounded-lg shadow hover:brightness-95"
        >
          <Plus size={16} /> Add Bus
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="px-4 py-3">Bus Name</th>
                <th className="px-4 py-3">Route</th>
                <th className="px-4 py-3">Seats</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {buses.map((b) => (
                <tr key={b.id} className="border-t">
                  <td className="px-4 py-3">{b.name}</td>
                  <td className="px-4 py-3">{b.route}</td>
                  <td className="px-4 py-3">{b.seats}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        b.status === "active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="inline-flex gap-2">
                      <button
                        onClick={() => openEdit(b)}
                        className="p-2 rounded-md hover:bg-gray-100"
                        title="Edit"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => toggleStatus(b.id)}
                        className="p-2 rounded-md hover:bg-gray-100"
                        title="Enable / Disable"
                      >
                        {b.status === "active" ? "Disable" : "Enable"}
                      </button>
                      <button
                        onClick={() => handleDelete(b.id)}
                        className="p-2 rounded-md hover:bg-red-50 text-red-600"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {buses.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                    No buses found. Add one using the button above.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowModal(false)} />
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="relative bg-white rounded-xl shadow-lg p-6 w-full max-w-lg z-10"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">{editing ? "Edit Bus" : "Add Bus"}</h3>
              <button onClick={() => setShowModal(false)} className="p-2 rounded-md">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-3">
              <input
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                placeholder="Bus name (e.g., Volvo AC Express)"
                className="w-full px-3 py-2 rounded-lg border"
              />
              <input
                value={form.route}
                onChange={(e) => setForm((s) => ({ ...s, route: e.target.value }))}
                placeholder="Route (e.g., Kochi → Bangalore)"
                className="w-full px-3 py-2 rounded-lg border"
              />
              <input
                type="number"
                value={form.seats}
                onChange={(e) => setForm((s) => ({ ...s, seats: Number(e.target.value) }))}
                placeholder="Seats"
                className="w-full px-3 py-2 rounded-lg border"
              />
              <select
                value={form.status}
                onChange={(e) => setForm((s) => ({ ...s, status: e.target.value }))}
                className="w-full px-3 py-2 rounded-lg border"
              >
                <option value="active">Active</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>

            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setShowModal(false)} className="px-4 py-2 rounded-lg">
                Cancel
              </button>
              <button onClick={handleSave} className="px-4 py-2 bg-[#0A1F44] text-white rounded-lg">
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
