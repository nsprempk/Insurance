import { Link } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  Home,
  Phone,
  ShieldCheck,
} from "lucide-react";

export default function ThankYou() {
  return (
    <main className="flex min-h-[75vh] items-center bg-slate-50 py-16">
      <div className="mx-auto w-full max-w-2xl px-4 sm:px-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-50 text-green-600">
            <CheckCircle2 size={42} />
          </div>

          <div className="mt-7 flex items-center justify-center gap-2 text-sm font-bold text-blue-600">
            <ShieldCheck size={18} />
            Ontario Inc
          </div>

          <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">
            Thank You!
          </h1>

          <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">
            Your health insurance inquiry has been submitted successfully. Our
            team can review your request and contact you using the details you
            provided.
          </p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-5 text-left">
            <p className="text-sm font-bold text-slate-900">
              Need immediate assistance?
            </p>

            <a
              href="tel:+18257931477"
              className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
            >
              <Phone size={17} />
              +1 825 793 1477
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700"
            >
              <Home size={17} />
              Back to Home
            </Link>

            <Link
              to="/insurance"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              <ArrowLeft size={17} />
              Explore Insurance
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
