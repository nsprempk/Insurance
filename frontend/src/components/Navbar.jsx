import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";

const navigation = [
  { name: "Home", path: "/" },
  { name: "Insurance", path: "/insurance" },
  { name: "Eligibility", path: "/eligibility" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
              <ShieldCheck size={25} strokeWidth={2.2} />
            </div>

            <div>
              <div className="text-xl font-bold tracking-tight text-slate-900">
                Ontario Inc
              </div>
              <div className="text-xs font-medium text-slate-500">
                Health Insurance
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-semibold transition ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href="tel:+18257931477"
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-blue-600"
            >
              <Phone size={17} />
              +1 825 793 1477
            </a>

            <Link
              to="/eligibility"
              className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              Check Eligibility
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
            <nav className="flex flex-col">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 border-t border-slate-200 pt-4">
              <a
                href="tel:+18257931477"
                className="flex items-center gap-2 px-4 py-3 text-sm font-semibold text-slate-700"
              >
                <Phone size={17} />
                +1 825 793 1477
              </a>

              <Link
                to="/eligibility"
                onClick={closeMobileMenu}
                className="mt-2 block rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700"
              >
                Check Eligibility
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
