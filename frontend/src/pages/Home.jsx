import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Headphones,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { useState } from "react";

import { insuranceTypes } from "../data/insuranceTypes";

const faqs = [
  {
    question: "What is health insurance?",
    answer:
      "Health insurance is designed to help cover eligible healthcare expenses according to the terms, conditions, limits, and exclusions of a specific insurance policy.",
  },
  {
    question: "Can I check my eligibility online?",
    answer:
      "Yes. Our online eligibility form collects some basic information to help determine which types of insurance options may be worth exploring. It is a preliminary assessment and not an insurance approval.",
  },
  {
    question: "Can I request a call from Ontario Inc?",
    answer:
      "Yes. You can submit your contact information through our request form and our team can follow up with you regarding your inquiry.",
  },
  {
    question: "Does submitting an inquiry mean I have insurance coverage?",
    answer:
      "No. Submitting an inquiry does not create an insurance policy or guarantee coverage. Final eligibility, pricing, coverage, and approval are determined according to the applicable insurer's requirements and policy terms.",
  },
  {
    question: "What types of health insurance can I explore?",
    answer:
      "You can explore individual, family, senior citizen, critical illness, and group health insurance options.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50">
        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Hero Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Sparkles size={16} />
                Explore Health Insurance Options
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Protect Your Health.
                <span className="block text-blue-600">
                  Prepare for Tomorrow.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Ontario Inc helps individuals and families explore health
                insurance options and connect with assistance for their
                insurance needs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/eligibility"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Check Your Eligibility
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  Request a Call Back
                </Link>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <CheckCircle2 className="text-blue-600" size={18} />
                  Simple process
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <CheckCircle2 className="text-blue-600" size={18} />
                  Personal assistance
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                  <CheckCircle2 className="text-blue-600" size={18} />
                  Multiple options
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-1 shadow-2xl shadow-blue-900/10">
                <div className="rounded-[22px] bg-white p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">
                        Insurance Assistance
                      </p>

                      <h2 className="mt-1 text-2xl font-bold text-slate-900">
                        Find Your Options
                      </h2>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                      <ShieldCheck size={27} />
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Users size={20} />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            Choose Your Coverage
                          </p>
                          <p className="text-xs text-slate-500">
                            Individual, family & more
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                          <ShieldCheck size={20} />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            Check Eligibility
                          </p>
                          <p className="text-xs text-slate-500">
                            Complete our simple questionnaire
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 p-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                          <Headphones size={20} />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-900">
                            Get Assistance
                          </p>
                          <p className="text-xs text-slate-500">
                            Request a callback from our team
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link
                    to="/eligibility"
                    className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Start Eligibility Check
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block lg:-left-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-600">
                    <CheckCircle2 size={21} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Simple & Convenient
                    </p>
                    <p className="text-xs text-slate-500">
                      Start your inquiry online
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSURANCE TYPES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Insurance Options
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Explore Health Insurance Types
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Explore different types of health insurance and find an option
              that matches your needs.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {insuranceTypes.map((insurance) => {
              const Icon = insurance.icon;

              return (
                <div
                  key={insurance.id}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {insurance.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {insurance.description}
                  </p>

                  <Link
                    to="/insurance"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/insurance"
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-blue-600"
            >
              View All Insurance Options
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY ONTARIO INC */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Why Ontario Inc
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                A Simple Way to Start Exploring Your Options
              </h2>

              <p className="mt-5 leading-7 text-slate-600">
                Understanding health insurance can feel complicated. Ontario Inc
                provides a straightforward way to learn about different
                insurance categories and request assistance.
              </p>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <ShieldCheck size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Explore Suitable Options
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Learn about different categories of health insurance
                      before deciding what you want to explore.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Clock3 size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Simple Online Process
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Submit a preliminary eligibility inquiry online without
                      unnecessary complexity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Headphones size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Personal Assistance
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Request a callback if you would like assistance with your
                      insurance inquiry.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600">
                <ShieldCheck size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-bold">
                Ready to explore your options?
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Complete our short eligibility questionnaire and tell us what
                type of health insurance you're interested in.
              </p>

              <Link
                to="/eligibility"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-slate-100"
              >
                Check Eligibility
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              How It Works
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Get Started in Three Simple Steps
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose an Insurance Type",
                text: "Explore the health insurance categories available on our website.",
              },
              {
                number: "02",
                title: "Check Your Eligibility",
                text: "Answer a few basic questions to submit a preliminary eligibility inquiry.",
              },
              {
                number: "03",
                title: "Request Assistance",
                text: "Provide your contact details so our team can follow up with your request.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="relative rounded-2xl border border-slate-200 p-7"
              >
                <span className="text-5xl font-black text-blue-100">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
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
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <ShieldCheck className="mx-auto text-white" size={42} />

          <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
            Find Out Which Options You May Be Able to Explore
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Complete our simple preliminary eligibility questionnaire and submit
            a request for assistance.
          </p>

          <Link
            to="/eligibility"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-700 shadow-lg transition hover:bg-blue-50"
          >
            Start Eligibility Check
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              FAQ
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question} className="px-5 sm:px-6">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-sm font-bold text-slate-900 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="pb-5 pr-8 text-sm leading-6 text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-slate-950 px-6 py-12 text-center sm:px-12 sm:py-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Have Questions About Health Insurance?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              Get in touch with Ontario Inc and submit your request for
              assistance.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Request a Call Back
                <ArrowRight size={17} />
              </Link>

              <a
                href="tel:+18257931477"
                className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-900"
              >
                +1 825 793 1477
              </a>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              support@ontarioinc.site
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
