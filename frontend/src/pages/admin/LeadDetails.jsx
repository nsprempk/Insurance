import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Mail, Phone, Save, User } from "lucide-react";

import { getLead, updateLead } from "../../services/api";

export default function LeadDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lead, setLead] = useState(null);
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("adminToken")) {
      navigate("/admin/login");
      return;
    }

    loadLead();
  }, [id]);

  const loadLead = async () => {
    try {
      setLoading(true);

      const data = await getLead(id);

      setLead(data.lead);
      setStatus(data.lead.status);
      setNotes(data.lead.notes || "");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setMessage("");
      setError("");

      const data = await updateLead(id, {
        status,
        notes,
      });

      setLead(data.lead);
      setStatus(data.lead.status);
      setNotes(data.lead.notes || "");

      setMessage("Lead updated successfully.");
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50">
        <p className="text-sm text-slate-500">Loading lead...</p>
      </main>
    );
  }

  if (!lead) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Lead not found</h1>

          <Link
            to="/admin/dashboard"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/admin/dashboard"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-blue-600"
        >
          <ArrowLeft size={17} />
          Back to Dashboard
        </Link>

        <div className="mt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-blue-600">
                Visitor Request
              </p>

              <h1 className="mt-2 text-3xl font-bold text-slate-950">
                {lead.fullName}
              </h1>

              <p className="mt-2 text-sm text-slate-500">
                Submitted {new Date(lead.createdAt).toLocaleString()}
              </p>
            </div>

            <div className="flex gap-2">
              <a
                href={`tel:${lead.phone}`}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-bold text-slate-700"
              >
                <Phone size={16} />
                Call
              </a>

              <a
                href={`mailto:${lead.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-bold text-white"
              >
                <Mail size={16} />
                Email
              </a>
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">
            {error}
          </div>
        )}

        {message && (
          <div className="mt-6 flex items-center gap-2 rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700">
            <CheckCircle2 size={17} />
            {message}
          </div>
        )}

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <User size={20} />
              </div>

              <h2 className="text-xl font-bold text-slate-900">
                Visitor Information
              </h2>
            </div>

            <div className="mt-7 grid gap-6 sm:grid-cols-2">
              <Detail label="Full Name" value={lead.fullName} />

              <Detail label="Age" value={lead.age || "—"} />

              <Detail label="Gender" value={lead.gender || "—"} />

              <Detail label="City" value={lead.city || "—"} />

              <Detail label="State / Province" value={lead.state || "—"} />

              <Detail label="Phone" value={lead.phone} />

              <Detail label="Email" value={lead.email} />

              <Detail
                label="Preferred Contact"
                value={lead.preferredContact || "—"}
              />
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Lead Management
            </h2>

            <div className="mt-6">
              <label className="text-sm font-bold text-slate-800">Status</label>

              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
              >
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="closed">Closed</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="text-sm font-bold text-slate-800">
                Internal Notes
              </label>

              <textarea
                value={notes}
                onChange={(event) => setNotes(event.target.value)}
                rows="7"
                placeholder="Add notes about this visitor..."
                className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <button
              onClick={handleSave}
              disabled={saving}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 disabled:opacity-60"
            >
              <Save size={17} />
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </section>
        </div>

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900">
            Insurance Requirement
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Detail
              label="Insurance Type"
              value={formatInsuranceType(lead.insuranceType)}
            />

            <Detail label="Coverage For" value={lead.coverageFor || "—"} />

            <Detail label="Family Members" value={lead.familyMembers || "—"} />

            <Detail
              label="Existing Insurance"
              value={lead.existingInsurance || "—"}
            />

            <Detail
              label="Coverage Amount"
              value={lead.coverageAmount || "—"}
            />
          </div>

          {lead.message && (
            <div className="mt-7 border-t border-slate-200 pt-6">
              <p className="text-sm font-bold text-slate-800">
                Visitor Message
              </p>

              <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-slate-600">
                {lead.message}
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1.5 text-sm font-semibold text-slate-800">{value}</p>
    </div>
  );
}

function formatInsuranceType(type) {
  const labels = {
    individual: "Individual Health Insurance",
    family: "Family Health Insurance",
    senior: "Senior Citizen Insurance",
    critical: "Critical Illness Insurance",
    group: "Group Health Insurance",
    "not-sure": "Not Sure",
  };

  return labels[type] || type || "—";
}
