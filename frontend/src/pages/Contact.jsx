import { useState } from "react";
import { Link } from "react-router-dom";
import { submitLead } from "../services/api";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    insuranceType: "",
    message: "",
  });

  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim()) {
      setError("Please complete your name, phone number, and email.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.phone.replace(/\D/g, "").length < 7) {
      setError("Please enter a valid phone number.");
      return;
    }

    setSubmitting(true);

    try {
      await submitLead({
        fullName: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim().toLowerCase(),
        insuranceType: form.insuranceType || "not-sure",
        message: form.message.trim(),
        source: "contact",
      });

      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        insuranceType: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact submission error:", error);

      setError(
        error.message || "Unable to send your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <Mail size={17} />
              Contact Ontario Inc
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              We're Here to Help
            </h1>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Have a question or want to request assistance with your health
              insurance inquiry? Get in touch with Ontario Inc.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                Contact us directly or submit the form and request a callback.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="tel:+18257931477"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-200"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Phone size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Helpline
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      +1 825 793 1477
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:support@ontarioinc.site"
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-blue-200"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Mail size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Email
                    </p>

                    <p className="mt-1 font-bold text-slate-900">
                      support@ontarioinc.site
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Online Assistance
                    </p>

                    <p className="mt-1 font-bold text-slate-900">Ontario Inc</p>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-blue-600 p-6 text-white">
                <ShieldCheck size={25} />

                <h3 className="mt-4 font-bold">
                  Looking for insurance options?
                </h3>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  You can also complete our preliminary eligibility
                  questionnaire.
                </p>

                <Link
                  to="/eligibility"
                  className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-bold text-blue-700 hover:bg-blue-50"
                >
                  Check Eligibility
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
              {submitted ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <CheckCircle2 size={34} />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-slate-900">
                    Request Received
                  </h2>

                  <p className="mt-3 max-w-md leading-7 text-slate-600">
                    Thank you for contacting Ontario Inc. Your request has been
                    successfully submitted. Our team will review your
                    information and follow up using your preferred contact
                    details.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setError("");
                    }}
                    className="mt-7 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Request a Call Back
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Fill in your details and tell us how we can assist you.
                  </p>

                  {error && (
                    <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                    <Input
                      label="Full Name"
                      required
                      value={form.name}
                      placeholder="Enter your full name"
                      onChange={(value) => updateField("name", value)}
                    />

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Input
                        label="Phone Number"
                        required
                        type="tel"
                        value={form.phone}
                        placeholder="+1 825 793 1477"
                        onChange={(value) => updateField("phone", value)}
                      />

                      <Input
                        label="Email Address"
                        required
                        type="email"
                        value={form.email}
                        placeholder="you@example.com"
                        onChange={(value) => updateField("email", value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-800">
                        Insurance Type
                      </label>

                      <select
                        value={form.insuranceType}
                        onChange={(event) =>
                          updateField("insuranceType", event.target.value)
                        }
                        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      >
                        <option value="">Select an option</option>

                        <option value="individual">
                          Individual Health Insurance
                        </option>

                        <option value="family">Family Health Insurance</option>

                        <option value="senior">Senior Citizen Insurance</option>

                        <option value="critical">
                          Critical Illness Insurance
                        </option>

                        <option value="group">Group Health Insurance</option>

                        <option value="not-sure">Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-800">
                        How can we help?
                      </label>

                      <textarea
                        value={form.message}
                        onChange={(event) =>
                          updateField("message", event.target.value)
                        }
                        rows="5"
                        placeholder="Tell us briefly about your insurance inquiry..."
                        className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Sending..." : "Send Request"}

                      {!submitting && <Send size={17} />}
                    </button>

                    <p className="text-center text-xs leading-5 text-slate-500">
                      By submitting this form, you are requesting information or
                      assistance. Submission does not guarantee insurance
                      coverage or approval.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({
  label,
  required,
  type = "text",
  value,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label className="block text-sm font-bold text-slate-800">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}
