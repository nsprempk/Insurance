import { useState } from "react";
import { submitLead } from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  UserRound,
  Users,
  Phone,
  HeartPulse,
} from "lucide-react";

const initialForm = {
  fullName: "",
  age: "",
  gender: "",
  city: "",
  state: "",
  insuranceType: "",
  coverageFor: "",
  familyMembers: "",
  existingInsurance: "",
  coverageAmount: "",
  phone: "",
  email: "",
  preferredContact: "",
};

const steps = [
  "Personal Information",
  "Insurance Requirement",
  "Coverage Details",
  "Contact Information",
];

export default function Eligibility() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const updateField = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));

    setError("");
  };

  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!form.fullName.trim()) {
        newErrors.fullName = "Please enter your full name.";
      }

      if (!form.age) {
        newErrors.age = "Please enter your age.";
      } else if (Number(form.age) < 18 || Number(form.age) > 100) {
        newErrors.age = "Please enter an age between 18 and 100.";
      }

      if (!form.gender) {
        newErrors.gender = "Please select your gender.";
      }

      if (!form.city.trim()) {
        newErrors.city = "Please enter your city.";
      }

      if (!form.state.trim()) {
        newErrors.state = "Please enter your state/province.";
      }
    }

    if (step === 2) {
      if (!form.insuranceType) {
        newErrors.insuranceType = "Please select an insurance type.";
      }

      if (!form.coverageFor) {
        newErrors.coverageFor = "Please select who needs coverage.";
      }
    }

    if (step === 3) {
      if (!form.existingInsurance) {
        newErrors.existingInsurance =
          "Please select whether you currently have insurance.";
      }

      if (!form.coverageAmount) {
        newErrors.coverageAmount = "Please select a preferred coverage amount.";
      }
    }

    if (step === 4) {
      if (!form.phone.trim()) {
        newErrors.phone = "Please enter your phone number.";
      } else if (form.phone.replace(/\D/g, "").length < 7) {
        newErrors.phone = "Please enter a valid phone number.";
      }

      if (!form.email.trim()) {
        newErrors.email = "Please enter your email address.";
      } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
        newErrors.email = "Please enter a valid email address.";
      }

      if (!form.preferredContact) {
        newErrors.preferredContact =
          "Please select your preferred contact method.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateStep()) return;

    if (step < steps.length) {
      setStep((previous) => previous + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep((previous) => previous - 1);
      setErrors({});
      setError("");

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep()) return;

    setError("");
    setSubmitting(true);

    try {
      await submitLead({
        fullName: form.fullName.trim(),
        age: Number(form.age),
        gender: form.gender,
        city: form.city.trim(),
        state: form.state.trim(),
        insuranceType: form.insuranceType,
        coverageFor: form.coverageFor,
        familyMembers: form.familyMembers,
        existingInsurance: form.existingInsurance,
        coverageAmount: form.coverageAmount,
        phone: form.phone.trim(),
        email: form.email.trim().toLowerCase(),
        preferredContact: form.preferredContact,
        source: "eligibility",
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("Eligibility submission error:", error);

      setError(
        error.message || "Unable to submit your request. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-slate-50">
      {/* Header */}
      <section className="bg-slate-950 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
            <ShieldCheck size={28} />
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Check Your Eligibility
          </h1>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Answer a few basic questions to submit a preliminary health
            insurance inquiry.
          </p>

          <p className="mt-4 text-sm text-slate-400">
            This is not an official insurance approval or underwriting decision.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Progress */}
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-center justify-between">
              {steps.map((item, index) => {
                const number = index + 1;
                const active = number === step;
                const completed = number < step;

                return (
                  <div key={item} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${
                          completed || active
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {completed ? <CheckCircle2 size={19} /> : number}
                      </div>

                      <span
                        className={`mt-2 hidden text-center text-xs font-semibold sm:block ${
                          active ? "text-blue-600" : "text-slate-500"
                        }`}
                      >
                        {item}
                      </span>
                    </div>

                    {number < steps.length && (
                      <div
                        className={`mx-2 h-0.5 flex-1 ${
                          number < step ? "bg-blue-600" : "bg-slate-200"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9"
          >
            {/* API Error */}
            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <div className="mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <UserRound size={24} />
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    Tell Us About Yourself
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    Start with some basic information.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    required
                    value={form.fullName}
                    onChange={(value) => updateField("fullName", value)}
                    error={errors.fullName}
                    placeholder="Enter your full name"
                  />

                  <Field
                    label="Age"
                    required
                    type="number"
                    value={form.age}
                    onChange={(value) => updateField("age", value)}
                    error={errors.age}
                    placeholder="Enter your age"
                    min="18"
                    max="100"
                  />

                  <SelectField
                    label="Gender"
                    required
                    value={form.gender}
                    onChange={(value) => updateField("gender", value)}
                    error={errors.gender}
                    options={[
                      ["", "Select gender"],
                      ["male", "Male"],
                      ["female", "Female"],
                      ["other", "Other"],
                      ["prefer-not-to-say", "Prefer not to say"],
                    ]}
                  />

                  <Field
                    label="City"
                    required
                    value={form.city}
                    onChange={(value) => updateField("city", value)}
                    error={errors.city}
                    placeholder="Enter your city"
                  />

                  <Field
                    label="State / Province"
                    required
                    value={form.state}
                    onChange={(value) => updateField("state", value)}
                    error={errors.state}
                    placeholder="Enter your state or province"
                  />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <div className="mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <HeartPulse size={24} />
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    What Are You Looking For?
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    Tell us what type of health insurance you are interested in.
                  </p>
                </div>

                <div className="space-y-6">
                  <RadioGroup
                    label="Insurance Type"
                    required
                    value={form.insuranceType}
                    error={errors.insuranceType}
                    onChange={(value) => updateField("insuranceType", value)}
                    options={[
                      ["individual", "Individual Health Insurance"],
                      ["family", "Family Health Insurance"],
                      ["senior", "Senior Citizen Insurance"],
                      ["critical", "Critical Illness Insurance"],
                      ["group", "Group Health Insurance"],
                      ["not-sure", "I'm Not Sure"],
                    ]}
                  />

                  <RadioGroup
                    label="Who needs coverage?"
                    required
                    value={form.coverageFor}
                    error={errors.coverageFor}
                    onChange={(value) => updateField("coverageFor", value)}
                    options={[
                      ["myself", "Myself"],
                      ["myself-family", "Myself and Family"],
                      ["parents", "Parents"],
                      ["family", "Family"],
                      ["employees", "Employees / Organization"],
                    ]}
                  />
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <div className="mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Users size={24} />
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    Coverage Details
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    A few additional details will help us understand your
                    inquiry.
                  </p>
                </div>

                <div className="space-y-6">
                  <RadioGroup
                    label="Do you currently have health insurance?"
                    required
                    value={form.existingInsurance}
                    error={errors.existingInsurance}
                    onChange={(value) =>
                      updateField("existingInsurance", value)
                    }
                    options={[
                      ["yes", "Yes"],
                      ["no", "No"],
                      ["not-sure", "Not Sure"],
                    ]}
                  />

                  <SelectField
                    label="How many people need coverage?"
                    value={form.familyMembers}
                    onChange={(value) => updateField("familyMembers", value)}
                    options={[
                      ["", "Select number"],
                      ["1", "1"],
                      ["2", "2"],
                      ["3", "3"],
                      ["4", "4"],
                      ["5+", "5 or more"],
                    ]}
                  />

                  <RadioGroup
                    label="Preferred coverage amount"
                    required
                    value={form.coverageAmount}
                    error={errors.coverageAmount}
                    onChange={(value) => updateField("coverageAmount", value)}
                    options={[
                      ["under-5", "Under $500,000"],
                      ["5-10", "$500,000 - $1 Million"],
                      ["10-25", "$1 Million - $2.5 Million"],
                      ["25+", "More than $2.5 Million"],
                      ["not-sure", "Not Sure"],
                    ]}
                  />
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div>
                <div className="mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Phone size={24} />
                  </div>

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    How Can We Reach You?
                  </h2>

                  <p className="mt-2 text-sm text-slate-600">
                    Provide your contact details so our team can follow up about
                    your inquiry.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Phone Number"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(value) => updateField("phone", value)}
                    error={errors.phone}
                    placeholder="+1 825 793 1477"
                  />

                  <Field
                    label="Email Address"
                    required
                    type="email"
                    value={form.email}
                    onChange={(value) => updateField("email", value)}
                    error={errors.email}
                    placeholder="you@example.com"
                  />

                  <div className="sm:col-span-2">
                    <RadioGroup
                      label="Preferred contact method"
                      required
                      value={form.preferredContact}
                      error={errors.preferredContact}
                      onChange={(value) =>
                        updateField("preferredContact", value)
                      }
                      options={[
                        ["phone", "Phone Call"],
                        ["email", "Email"],
                        ["either", "Either"],
                      ]}
                    />
                  </div>
                </div>

                <div className="mt-7 rounded-2xl bg-slate-50 p-5">
                  <div className="flex gap-3">
                    <ShieldCheck
                      size={20}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <p className="text-sm leading-6 text-slate-600">
                      By submitting this form, you are requesting information or
                      assistance. Submission does not guarantee insurance
                      coverage, approval, pricing, or policy issuance.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-10 flex flex-col-reverse gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={previousStep}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  <ArrowLeft size={17} />
                  Back
                </button>
              ) : (
                <Link
                  to="/insurance"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  <ArrowLeft size={17} />
                  Back
                </Link>
              )}

              {step < steps.length ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Continue
                  <ArrowRight size={17} />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Request"}

                  {!submitting && <CheckCircle2 size={17} />}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
  min,
  max,
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
        min={min}
        max={max}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-2 w-full rounded-xl border px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
          error ? "border-red-400" : "border-slate-300"
        }`}
      />

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

function SelectField({ label, required, value, onChange, error, options }) {
  return (
    <div>
      <label className="block text-sm font-bold text-slate-800">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={`mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
          error ? "border-red-400" : "border-slate-300"
        }`}
      >
        {options.map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

function RadioGroup({ label, required, value, onChange, error, options }) {
  return (
    <div>
      <label className="block text-sm font-bold text-slate-800">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {options.map(([optionValue, optionLabel]) => {
          const selected = value === optionValue;

          return (
            <label
              key={optionValue}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                selected
                  ? "border-blue-500 bg-blue-50"
                  : "border-slate-200 hover:border-blue-200 hover:bg-slate-50"
              }`}
            >
              <input
                type="radio"
                name={label}
                value={optionValue}
                checked={selected}
                onChange={() => onChange(optionValue)}
                className="h-4 w-4 accent-blue-600"
              />

              <span className="text-sm font-medium text-slate-700">
                {optionLabel}
              </span>
            </label>
          );
        })}
      </div>

      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}
