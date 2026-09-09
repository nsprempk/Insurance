export default function Terms() {
  return (
    <main className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Legal
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-950">
            Terms & Conditions
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            Last updated: September 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-xl font-bold text-slate-900">
                1. Website Purpose
              </h2>

              <p className="mt-3">
                This website provides general information about health insurance
                categories and allows visitors to submit inquiries for
                assistance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                2. No Guarantee of Coverage
              </h2>

              <p className="mt-3">
                Information submitted through this website does not guarantee
                insurance eligibility, approval, coverage, pricing, or policy
                issuance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                3. Eligibility Information
              </h2>

              <p className="mt-3">
                Any eligibility result or indication provided through this
                website is preliminary. Final decisions are subject to the
                requirements, underwriting rules, terms, conditions, and
                exclusions of the applicable insurance provider.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">
                4. Accuracy of Information
              </h2>

              <p className="mt-3">
                Visitors should provide accurate information when submitting
                forms. Ontario Inc is not responsible for decisions resulting
                from inaccurate or incomplete information supplied by a visitor.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">5. Changes</h2>

              <p className="mt-3">
                These terms may be updated from time to time. Continued use of
                the website after changes are posted constitutes acceptance of
                the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900">6. Contact</h2>

              <p className="mt-3">
                Questions about these terms can be sent to{" "}
                <a
                  href="mailto:support@ontarioinc.site"
                  className="font-semibold text-blue-600"
                >
                  support@ontarioinc.site
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
