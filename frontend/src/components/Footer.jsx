import { Link } from "react-router-dom";
import { ShieldCheck, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <ShieldCheck size={25} strokeWidth={2.2} />
              </div>

              <div>
                <div className="text-xl font-bold text-white">Ontario Inc</div>
                <div className="text-xs font-medium text-slate-400">
                  Health Insurance
                </div>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Helping individuals and families explore health insurance options
              and connect with assistance for their insurance needs.
            </p>

            <Link
              to="/eligibility"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
            >
              Check Your Eligibility
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/insurance"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/eligibility"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Eligibility
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Insurance */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Insurance
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  to="/insurance"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Individual Health Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/insurance"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Family Health Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/insurance"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Senior Citizen Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/insurance"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Critical Illness Insurance
                </Link>
              </li>

              <li>
                <Link
                  to="/insurance"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Group Health Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="tel:+18257931477"
                  className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <Phone size={18} className="mt-0.5 shrink-0 text-blue-400" />
                  <span>+1 825 793 1477</span>
                </a>
              </li>

              <li>
                <a
                  href="mailto:support@ontarioinc.site"
                  className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-white"
                >
                  <Mail size={18} className="mt-0.5 shrink-0 text-blue-400" />
                  <span>support@ontarioinc.site</span>
                </a>
              </li>

              <li>
                <div className="flex items-start gap-3 text-sm text-slate-400">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-blue-400" />
                  <span>
                    Serving individuals and families with insurance assistance.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ontario Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-sm text-slate-500 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm text-slate-500 hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/disclaimer"
              className="text-sm text-slate-500 hover:text-white"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
