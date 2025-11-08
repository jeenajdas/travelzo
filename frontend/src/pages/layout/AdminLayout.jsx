import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex bg-gray-50 dark:bg-[#0A1F44] min-h-screen transition-colors">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
