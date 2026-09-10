import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, Mail, ShieldCheck, ArrowRight } from "lucide-react";

import { adminLogin } from "../../services/api";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await adminLogin(form.email, form.password);

      localStorage.setItem("adminToken", data.token);

      localStorage.setItem("adminUser", JSON.stringify(data.admin));

      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-slate-950 px-4 py-16">
      <div className="w-full max-w-md">
        <div className="rounded-3xl bg-white p-7 shadow-2xl sm:p-9">
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
              <ShieldCheck size={28} />
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm font-bold text-blue-600">Ontario Inc</p>

            <h1 className="mt-2 text-3xl font-bold text-slate-950">
              Admin Login | Ontario Inc.
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Sign in to manage visitor inquiries.
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div>
              <label className="text-sm font-bold text-slate-800">
                Email Address
              </label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  value={form.email}
                  onChange={(event) =>
                    handleChange("email", event.target.value)
                  }
                  placeholder="admin@ontarioinc.site"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-slate-800">
                Password
              </label>

              <div className="relative mt-2">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  value={form.password}
                  onChange={(event) =>
                    handleChange("password", event.target.value)
                  }
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
              {!loading && <ArrowRight size={17} />}
            </button>
          </form>

          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            Authorized Ontario Inc administrators only.
          </p>
        </div>
      </div>
    </main>
  );
}
