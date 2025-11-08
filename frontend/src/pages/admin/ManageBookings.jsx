// src/pages/admin/ManageBookings.jsx
import React, { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { format } from "date-fns";

/**
 * Booking list with simple filters (date, route search)
 * Uses mock bookings.
 */

const mockBookings = [
  {
    id: "bk_001",
    passenger: "Riya Sharma",
    bus: "Volvo AC Express",
    route: "Kochi → Bangalore",
    date: "2025-10-15",
    seat: "12A",
    amount: 450,
    status: "confirmed",
  },
  {
    id: "bk_002",
    passenger: "Amit Kumar",
    bus: "Mercedes Sleeper",
    route: "Mumbai → Pune",
    date: "2025-10-16",
    seat: "3B",
    amount: 300,
    status: "cancelled",
  },
  {
    id: "bk_003",
    passenger: "Sneha Menon",
    bus: "Volvo AC Express",
    route: "Kochi → Bangalore",
    date: "2025-10-16",
    seat: "7C",
    amount: 450,
    status: "confirmed",
  },
];

export default function ManageBookings() {
  const [query, setQuery] = useState("");
  const [date, setDate] = useState("");
  const [bookings, setBookings] = useState(mockBookings);

  const filtered = useMemo(() => {
    return bookings.filter((b) => {
      if (query && !`${b.passenger} ${b.bus} ${b.route}`.toLowerCase().includes(query.toLowerCase())) return false;
      if (date && b.date !== date) return false;
      return true;
    });
  }, [bookings, query, date]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-[#0A1F44]">Manage Bookings</h1>

        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow">
            <Search size={16} className="text-gray-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search passenger, bus or route"
              className="outline-none text-sm"
            />
          </div>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="px-3 py-2 rounded-lg border bg-white text-sm"
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="px-4 py-3">Passenger</th>
                <th className="px-4 py-3">Bus / Route</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Seat</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((b) => (
                <tr key={b.id} className="border-t">
                  <td className="px-4 py-3">{b.passenger}</td>
                  <td className="px-4 py-3">
                    <div className="text-sm font-medium">{b.bus}</div>
                    <div className="text-xs text-gray-500">{b.route}</div>
                  </td>
                  <td className="px-4 py-3">{format(new Date(b.date), "dd MMM yyyy")}</td>
                  <td className="px-4 py-3">{b.seat}</td>
                  <td className="px-4 py-3">₹{b.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        b.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                    No bookings found.
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
