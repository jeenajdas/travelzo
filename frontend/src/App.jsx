import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/layout/UserLayout";
import AdminLayout from "./pages/layout/AdminLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";
import DashboardHome from "./pages/admin/DashboardHome";
import ManageBuses from "./pages/admin/ManageBuses";
import ManageBookings from "./pages/admin/ManageBookings";
import Reports from "./pages/admin/Reports";
import Users from "./pages/admin/Users";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public/User Layout */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="buses" element={<ManageBuses />} />
          <Route path="bookings" element={<ManageBookings />} />
          <Route path="reports" element={<Reports />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
