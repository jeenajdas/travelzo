import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import UserLayout from "./pages/layout/UserLayout";
import AdminLayout from "./pages/layout/AdminLayout";

import ProtectedRoute from "./components/ProtectedRoute";


// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchResults from "./pages/SearchResults";
import SeatSelection from "./pages/SeatSelection";
import Checkout from "./pages/Checkout";
import BookingSuccess from "./pages/BookingSuccess";
import MyBookings from "./pages/MyBookings";
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
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/seat-selection/:busId" element={<SeatSelection />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/booking-success" element={<BookingSuccess/>} />
          <Route path="/my-bookings" element={<MyBookings/>} />
        </Route>

        {/* Auth Layout */}
        
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        

        {/* Admin Protected Routes */}
        <Route element={<ProtectedRoute allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="buses" element={<ManageBuses />} />
            <Route path="bookings" element={<ManageBookings />} />
            <Route path="reports" element={<Reports />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
