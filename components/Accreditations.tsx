const accreditations = [
  "Constructionline",
  "CHAS",
  "SafeContractor",
  "ISO 9001",
  "ISO 14001",
  "NHSS",
];

export default function Accreditations() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-[1600px] px-8">

        <div className="mb-16 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-600">
            Trusted & Accredited
          </p>

          <h2 className="text-5xl font-black text-slate-900">
            Quality, Safety & Compliance
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            We are committed to maintaining the highest standards
            of safety, quality and environmental responsibility
            across every project we undertake.
          </p>

        </div>

        {/* Accreditation Logos */}

        <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-6">

          {accreditations.map((accreditation) => (
            <div
              key={accreditation}
              className="flex h-40 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-center">

                {/* Replace with actual logo later */}

                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-blue-600"></div>

                <p className="font-bold text-slate-800">
                  {accreditation}
                </p>

              </div>
            </div>
          ))}

        </div>

        {/* Trust Bar */}

        <div className="mt-20 rounded-3xl bg-[#071B39] p-12 text-white">

          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <h3 className="text-4xl font-black text-blue-400">
                100+
              </h3>

              <p className="mt-2 font-semibold uppercase">
                Years of Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-400">
                5,000+
              </h3>

              <p className="mt-2 font-semibold uppercase">
                Projects Delivered
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-400">
                NI Wide
              </h3>

              <p className="mt-2 font-semibold uppercase">
                Infrastructure Coverage
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}