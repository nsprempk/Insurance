import { ShieldCheck } from "lucide-react";

export default function Disclaimer() {
  return (
    <main className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <ShieldCheck size={25} />
          </div>

          <h1 className="mt-6 text-4xl font-bold text-slate-950">Disclaimer</h1>

          <div className="mt-8 space-y-7 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-xl font-bold text-slate-900">
                General Information
              </h2>

              <p className="mt-3">
                The information on this website is provided for general
                informational purposes and should not be considered insurance,
                legal, financial, medical, or professional advice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Preliminary Eligibility
              </h2>

              <p className="mt-3">
                Any eligibility questionnaire or result on this website is
                preliminary. It does not constitute an official underwriting
                decision and does not guarantee that an applicant will qualify
                for a particular insurance product.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                Insurance Providers
              </h2>

              <p className="mt-3">
                Insurance products, benefits, premiums, exclusions, limits,
                waiting periods, underwriting requirements, and eligibility
                criteria vary by provider and policy. Visitors should review the
                applicable policy documents and obtain appropriate professional
                advice before making decisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">No Guarantee</h2>

              <p className="mt-3">
                Submitting a request through this website does not guarantee
                contact, an insurance quote, insurance approval, coverage, or
                policy issuance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">Contact</h2>

              <p className="mt-3">
                If you have questions about information presented on this
                website, contact Ontario Inc at{" "}
                <a
                  href="mailto:support@ontarioinc.site"
                  className="font-semibold text-blue-600"
                >
                  support@ontarioinc.site
                </a>{" "}
                or{" "}
                <a
                  href="tel:+18257931477"
                  className="font-semibold text-blue-600"
                >
                  +1 825 793 1477
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}
