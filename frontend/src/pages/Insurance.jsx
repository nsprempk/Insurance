import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Users,
  UserRound,
  Building2,
  ShieldPlus,
  Phone,
  HelpCircle,
} from "lucide-react";

const insuranceOptions = [
  {
    id: "individual",
    title: "Individual Health Insurance",
    icon: UserRound,
    description:
      "Health insurance options designed for individuals who want to explore personal healthcare protection.",
    points: [
      "Designed for individual coverage needs",
      "Explore different coverage options",
      "Understand policy features and benefits",
      "Request assistance based on your needs",
    ],
  },
  {
    id: "family",
    title: "Family Health Insurance",
    icon: Users,
    description:
      "Explore health insurance options that may provide coverage for multiple members of your family under suitable policies.",
    points: [
      "Options for multiple family members",
      "Explore family-oriented coverage",
      "Compare available features",
      "Request assistance for your family needs",
    ],
  },
  {
    id: "senior",
    title: "Senior Citizen Health Insurance",
    icon: HeartPulse,
    description:
      "Explore health insurance options intended for older adults, subject to insurer-specific eligibility requirements.",
    points: [
      "Options designed for older adults",
      "Explore available healthcare coverage",
      "Understand applicable requirements",
      "Get assistance with your inquiry",
    ],
  },
  {
    id: "critical",
    title: "Critical Illness Insurance",
    icon: ShieldPlus,
    description:
      "Explore insurance products that may provide financial benefits following diagnosis of specified critical illnesses.",
    points: [
      "Coverage for specified conditions",
      "Explore available policy benefits",
      "Understand applicable terms",
      "Request information about available options",
    ],
  },
  {
    id: "group",
    title: "Group Health Insurance",
    icon: Building2,
    description:
      "Health insurance options designed for employees, businesses, organizations, and other eligible groups.",
    points: [
      "Options for eligible groups",
      "Explore employee coverage",
      "Learn about group insurance features",
      "Request assistance for your organization",
    ],
  },
];

const generalQuestions = [
  {
    question: "Which health insurance should I choose?",
    answer:
      "The appropriate type of insurance depends on your personal circumstances, coverage needs, eligibility, budget, and the requirements of the applicable insurer. Ontario Inc can help you begin exploring your options.",
  },
  {
    question: "Does Ontario Inc provide insurance policies directly?",
    answer:
      "This website is designed to help visitors explore insurance options and submit inquiries. Availability, eligibility, pricing, coverage, and final approval depend on the applicable insurance provider and policy terms.",
  },
  {
    question: "Can I explore more than one type of insurance?",
    answer:
      "Yes. You can submit an inquiry and indicate the type of coverage you are interested in. You can also contact our team if you have questions about your options.",
  },
  {
    question: "Does eligibility guarantee insurance approval?",
    answer:
      "No. The eligibility information provided through this website is preliminary and does not guarantee approval, coverage, pricing, or issuance of an insurance policy.",
  },
];

export default function Insurance() {
  return (
    <main>
      {/* HERO */}
      <section className="bg-slate-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <ShieldCheck size={17} />
              Health Insurance Options
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Explore Health Insurance Options
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Learn about different types of health insurance and find an option
              that may fit your individual, family, or organizational needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/eligibility"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Check Your Eligibility
                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-900"
              >
                Request a Call Back
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <HeartPulse size={28} />
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Find the Type of Coverage You're Looking For
          </h2>

          <p className="mt-5 leading-7 text-slate-600">
            Health insurance products can vary significantly depending on the
            person, family, organization, insurer, and policy. Start by
            understanding the different categories available and then submit an
            inquiry if you would like assistance.
          </p>
        </div>
      </section>

      {/* INSURANCE CARDS */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 lg:grid-cols-2">
            {insuranceOptions.map((option, index) => {
              const Icon = option.icon;

              return (
                <article
                  key={option.id}
                  className={`rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8 ${
                    index === insuranceOptions.length - 1
                      ? "lg:col-span-2 lg:mx-auto lg:max-w-[calc(50%-0.875rem)]"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <Icon size={27} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
                        {option.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {option.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {option.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-xl bg-slate-50 p-3"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-blue-600"
                        />

                        <span className="text-sm font-medium text-slate-700">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/eligibility"
                    className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Check Eligibility
                    <ArrowRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY EXPLORE */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Before You Choose
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Understand Your Insurance Needs First
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Every person's insurance needs are different. Before applying
                for a policy, it can be useful to consider your healthcare
                requirements, who needs coverage, desired benefits, and
                applicable eligibility conditions.
              </p>

              <Link
                to="/eligibility"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Start Eligibility Check
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-3xl bg-slate-950 p-7 sm:p-9">
              <h3 className="text-xl font-bold text-white">
                Things to consider
              </h3>

              <div className="mt-6 space-y-4">
                {[
                  "Who needs health insurance?",
                  "What type of coverage are you looking for?",
                  "What level of coverage may be appropriate?",
                  "Are there insurer-specific eligibility requirements?",
                  "What exclusions, limits, waiting periods, or conditions may apply?",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900 p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-blue-400"
                    />

                    <p className="text-sm leading-6 text-slate-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              How to Get Started
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Begin your insurance inquiry in just a few simple steps.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Explore",
                text: "Review the different types of health insurance and decide which category interests you.",
              },
              {
                number: "02",
                title: "Check",
                text: "Complete our preliminary eligibility questionnaire with some basic information.",
              },
              {
                number: "03",
                title: "Connect",
                text: "Submit your request and our team can follow up regarding your inquiry.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="text-4xl font-black text-blue-100">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY CTA */}
      <section className="bg-blue-600 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto text-white" size={42} />

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Not Sure Which Option Is Right for You?
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Start with our preliminary eligibility questionnaire and tell us
            what kind of health insurance you're interested in.
          </p>

          <Link
            to="/eligibility"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 transition hover:bg-blue-50"
          >
            Check Your Eligibility
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Questions
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Health Insurance FAQs
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {generalQuestions.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5"
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 font-bold text-slate-900">
                  <HelpCircle size={20} className="shrink-0 text-blue-600" />

                  <span className="flex-1">{item.question}</span>

                  <span className="text-xl text-slate-400 transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-4 pl-8 text-sm leading-6 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-950 px-6 py-12 sm:px-12 sm:py-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Need Help Exploring Your Options?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Submit an inquiry online or contact Ontario Inc directly. Our
                  team can follow up regarding your insurance request.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Request a Call Back
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="tel:+18257931477"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-900"
                >
                  <Phone size={17} />
                  +1 825 793 1477
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
