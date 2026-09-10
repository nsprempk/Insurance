import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/Home";
import Insurance from "./pages/Insurance";
import Eligibility from "./pages/Eligibility";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import LeadDetails from "./pages/admin/LeadDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ================================
            PUBLIC WEBSITE
        ================================= */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="terms" element={<PrivacyPolicy />} />
          <Route path="privacy-policy" element={<Terms />} />
        </Route>

        {/* ================================
            ADMIN WEBSITE
        ================================= */}
        <Route element={<AdminLayout />}>
          <Route path="/admin/login" element={<Login />} />

          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/admin/leads/:id" element={<LeadDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
