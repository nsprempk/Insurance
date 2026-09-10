import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Users,
  UserPlus,
  PhoneCall,
  Clock3,
  CheckCircle2,
  XCircle,
  Search,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

import { getLeads, getLeadStats } from "../../services/api";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    total: 0,
    new: 0,
    contacted: 0,
    inProgress: 0,
    completed: 0,
    closed: 0,
  });

  const [leads, setLeads] = useState([]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);
      setError("");

      const [statsData, leadsData] = await Promise.all([
        getLeadStats(),
        getLeads({
          search: "",
          status: "",
          page: 1,
          limit: 20,
        }),
      ]);

      setStats(
        statsData?.stats || {
          total: 0,
          new: 0,
          contacted: 0,
          inProgress: 0,
          completed: 0,
          closed: 0,
        },
      );

      setLeads(leadsData?.leads || []);
    } catch (error) {
      console.error("Dashboard error:", error);

      if (
        error.message?.toLowerCase().includes("authentication") ||
        error.message?.toLowerCase().includes("unauthorized") ||
        error.message?.toLowerCase().includes("token")
      ) {
        handleLogout();
        return;
      }

      setError(error.message || "Unable to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getLeads({
        search,
        status,
        page: 1,
        limit: 20,
      });

      setLeads(data?.leads || []);
    } catch (error) {
      console.error("Search error:", error);

      if (
        error.message?.toLowerCase().includes("authentication") ||
        error.message?.toLowerCase().includes("unauthorized") ||
        error.message?.toLowerCase().includes("token")
      ) {
        handleLogout();
        return;
      }

      setError(error.message || "Unable to search leads.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      setError("");

      const [statsData, leadsData] = await Promise.all([
        getLeadStats(),
        getLeads({
          search,
          status,
          page: 1,
          limit: 20,
        }),
      ]);

      setStats(
        statsData?.stats || {
          total: 0,
          new: 0,
          contacted: 0,
          inProgress: 0,
          completed: 0,
          closed: 0,
        },
      );

      setLeads(leadsData?.leads || []);
    } catch (error) {
      console.error("Refresh error:", error);

      setError(error.message || "Unable to refresh dashboard.");
    } finally {
      setRefreshing(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");

    navigate("/admin/login", { replace: true });
  };

  const formatDate = (date) => {
    if (!date) return "—";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "—";
    }

    return parsedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <main className="min-h-[calc(100vh-73px)] bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div>
          <h1 className="text-3xl font-bold text-slate-950">
            Admin Dashboard | Ontario Inc.
          </h1>

          <p className="mt-2 text-sm text-slate-600">
            Manage health insurance inquiries submitted through your website.
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          <StatCard icon={Users} title="Total" value={stats.total} />

          <StatCard icon={UserPlus} title="New" value={stats.new} />

          <StatCard
            icon={PhoneCall}
            title="Contacted"
            value={stats.contacted}
          />

          <StatCard
            icon={Clock3}
            title="In Progress"
            value={stats.inProgress}
          />

          <StatCard
            icon={CheckCircle2}
            title="Completed"
            value={stats.completed}
          />

          <StatCard icon={XCircle} title="Closed" value={stats.closed} />
        </div>

        {/* Visitor Requests */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          {/* Section Header */}
          <div className="border-b border-slate-200 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Visitor Requests
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Review and manage submitted inquiries.
                </p>
              </div>

              {/* Search */}
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative">
                  <Search
                    size={17}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    placeholder="Search leads..."
                    className="w-full rounded-xl border border-slate-300 py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:w-64"
                  />
                </div>

                <select
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value);
                  }}
                  className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">All Status</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="closed">Closed</option>
                </select>

                <button
                  type="button"
                  onClick={handleSearch}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  <Search size={16} />
                  Search
                </button>

                <button
                  type="button"
                  onClick={handleRefresh}
                  disabled={refreshing}
                  title="Refresh"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-3 py-2.5 text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <RefreshCw
                    size={17}
                    className={refreshing ? "animate-spin" : ""}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          {loading ? (
            <div className="p-12 text-center">
              <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

              <p className="mt-4 text-sm text-slate-500">Loading leads...</p>
            </div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center">
              <Users className="mx-auto text-slate-300" size={40} />

              <h3 className="mt-4 font-bold text-slate-900">
                No requests found
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Visitor submissions will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                      Visitor
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                      Insurance
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                      Contact
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                      Status
                    </th>

                    <th className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide text-slate-500">
                      Date
                    </th>

                    <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-wide text-slate-500">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {leads.map((lead) => (
                    <tr key={lead._id} className="transition hover:bg-slate-50">
                      {/* Visitor */}
                      <td className="px-5 py-4">
                        <p className="font-bold text-slate-900">
                          {lead.fullName || "—"}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {lead.city || "—"}

                          {lead.state ? `, ${lead.state}` : ""}
                        </p>
                      </td>

                      {/* Insurance */}
                      <td className="px-5 py-4 text-sm text-slate-600">
                        {formatInsuranceType(lead.insuranceType)}
                      </td>

                      {/* Contact */}
                      <td className="px-5 py-4">
                        <p className="text-sm text-slate-700">
                          {lead.email || "—"}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {lead.phone || "—"}
                        </p>
                      </td>

                      {/* Status */}
                      <td className="px-5 py-4">
                        <StatusBadge status={lead.status} />
                      </td>

                      {/* Date */}
                      <td className="px-5 py-4 text-sm text-slate-500">
                        {formatDate(lead.createdAt)}
                      </td>

                      {/* Action */}
                      <td className="px-5 py-4 text-right">
                        <Link
                          to={`/admin/leads/${lead._id}`}
                          className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 transition hover:text-blue-700"
                        >
                          View
                          <ArrowRight size={15} />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

/* ----------------------------- */
/* STAT CARD */
/* ----------------------------- */

function StatCard({ icon: Icon, title, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={20} />
        </div>

        <span className="text-2xl font-bold text-slate-900">{value ?? 0}</span>
      </div>

      <p className="mt-4 text-sm font-semibold text-slate-500">{title}</p>
    </div>
  );
}

/* ----------------------------- */
/* STATUS BADGE */
/* ----------------------------- */

function StatusBadge({ status }) {
  const labels = {
    new: "New",
    contacted: "Contacted",
    "in-progress": "In Progress",
    completed: "Completed",
    closed: "Closed",
  };

  const classes = {
    new: "bg-blue-50 text-blue-700",
    contacted: "bg-yellow-50 text-yellow-700",
    "in-progress": "bg-purple-50 text-purple-700",
    completed: "bg-green-50 text-green-700",
    closed: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        classes[status] || classes.new
      }`}
    >
      {labels[status] || status || "New"}
    </span>
  );
}

/* ----------------------------- */
/* INSURANCE LABEL */
/* ----------------------------- */

function formatInsuranceType(type) {
  const labels = {
    individual: "Individual",
    family: "Family",
    senior: "Senior",
    critical: "Critical Illness",
    group: "Group",
    "not-sure": "Not Sure",
  };

  return labels[type] || type || "—";
}
