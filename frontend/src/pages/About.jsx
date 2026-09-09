import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Users,
  Headphones,
} from "lucide-react";

export default function About() {
  return (
    <main>
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <ShieldCheck size={17} />
              About Ontario Inc
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Making Health Insurance Easier to Explore
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Ontario Inc provides a simple online starting point for
              individuals and families who want to learn about health insurance
              options and request assistance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Who We Are
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                A straightforward way to begin your insurance inquiry
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Choosing health insurance can involve understanding different
                coverage types, eligibility requirements, benefits, limits,
                exclusions, and policy conditions.
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                Ontario Inc is designed to make the first step easier. Visitors
                can explore different insurance categories, complete a
                preliminary eligibility questionnaire, and request assistance
                from our team.
              </p>

              <Link
                to="/eligibility"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700"
              >
                Check Your Eligibility
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-3xl bg-slate-50 p-7 sm:p-10">
              <div className="grid gap-5">
                <InfoCard
                  icon={HeartPulse}
                  title="Health-Focused"
                  text="Explore categories of insurance designed around different healthcare needs."
                />

                <InfoCard
                  icon={Users}
                  title="Individual & Family"
                  text="Explore options for yourself, your family, parents, or other eligible groups."
                />

                <InfoCard
                  icon={Headphones}
                  title="Personal Assistance"
                  text="Submit an inquiry if you would like our team to follow up with you."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Simple. Clear. Convenient.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Easy-to-understand information",
              "Simple online inquiry process",
              "A convenient way to request assistance",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <CheckCircle2 className="text-blue-600" size={23} />

                <h3 className="mt-4 font-bold text-slate-900">{item}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  We focus on making the initial insurance inquiry simple and
                  straightforward.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to explore your options?
          </h2>

          <p className="mt-4 text-blue-100">
            Start with our preliminary eligibility questionnaire.
          </p>

          <Link
            to="/eligibility"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 hover:bg-blue-50"
          >
            Get Started
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ icon: Icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={21} />
      </div>

      <div>
        <h3 className="font-bold text-slate-900">{title}</h3>

        <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
      </div>
    </div>
  );
}
