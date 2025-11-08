import { Sun, Moon, UserCircle } from "lucide-react";
import { useState } from "react";

const AdminNavbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="flex justify-between items-center bg-white dark:bg-[#132B5E] shadow-md px-6 py-3">
      <h2 className="text-xl font-semibold text-[#0A1F44] dark:text-white">Admin Dashboard</h2>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-[#0A1F44]"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <UserCircle size={28} className="text-[#0A1F44] dark:text-white" />
      </div>
    </header>
  );
};

export default AdminNavbar;
