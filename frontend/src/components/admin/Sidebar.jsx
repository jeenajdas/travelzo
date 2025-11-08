import { NavLink } from "react-router-dom";
import { LayoutDashboard, Bus, Users, BarChart2, ClipboardList } from "lucide-react";

const Sidebar = () => {
  const links = [
    { to: "/admin", label: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { to: "/admin/buses", label: "Manage Buses", icon: <Bus size={20} /> },
    { to: "/admin/bookings", label: "Bookings", icon: <ClipboardList size={20} /> },
    { to: "/admin/reports", label: "Reports", icon: <BarChart2 size={20} /> },
    { to: "/admin/users", label: "Users", icon: <Users size={20} /> },
  ];

  return (
    <div className="w-64 bg-white dark:bg-[#101E42] shadow-lg h-screen sticky top-0 flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8 text-[#0A1F44] dark:text-white">Travelzo Admin</h1>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-[#00A8E8] text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#172A5A]"
              }`
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
