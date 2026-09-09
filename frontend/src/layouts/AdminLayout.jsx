import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LogOut, ShieldCheck } from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("adminToken");
  const adminUser = JSON.parse(localStorage.getItem("adminUser") || "null");

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login", { replace: true });
  };

  const isLoginPage = location.pathname === "/admin/login";

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Admin Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to={token ? "/admin/dashboard" : "/admin/login"}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <ShieldCheck size={21} />
            </div>

            <div>
              <p className="font-bold text-slate-900">Ontario Inc</p>

              <p className="text-xs text-slate-500">Admin Dashboard</p>
            </div>
          </Link>

          {/* Right Side */}
          {!isLoginPage && token && (
            <div className="flex items-center gap-4">
              <span className="hidden text-sm font-medium text-slate-600 sm:block">
                {adminUser?.name || "Admin"}
              </span>

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                <LogOut size={16} />

                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Admin Page */}
      <Outlet />
    </div>
  );
}
