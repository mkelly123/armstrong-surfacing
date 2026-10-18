import Image from "next/image";

const vacancies = [
  {
    title: "HGV Driver",
    type: "Full Time",
    location: "Northern Ireland",
  },
  {
    title: "Surfacing Operative",
    type: "Full Time",
    location: "Northern Ireland",
  },
  {
    title: "Groundworks Operative",
    type: "Full Time",
    location: "Northern Ireland",
  },
];

export default function CareersPage() {
  return (
    <main>
      {/* Hero */}

      <section className="relative h-[500px]">
        <Image
          src="/images/careers-hero.jpg"
          alt="Careers at Armstrong Surfacing"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#071B39]/80" />

        <div className="relative mx-auto flex h-full max-w-[1600px] items-center px-8">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-blue-400">
              Careers
            </p>

            <h1 className="text-6xl font-black text-white">
              Build Your Career
              <br />
              With Armstrong Surfacing
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-8 text-center">
          <h2 className="mb-6 text-5xl font-black">
            Join Our Team
          </h2>

          <p className="text-xl leading-relaxed text-slate-600">
            We are always interested in hearing from talented,
            motivated people looking to build a career in the
            surfacing, civil engineering and construction sectors.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-[1400px] px-8">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black">
              Why Work With Us?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-black">
                Long-Term Opportunities
              </h3>

              <p className="text-slate-600">
                Join a business with a strong reputation and
                long-term project pipeline.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-black">
                Training & Development
              </h3>

              <p className="text-slate-600">
                We support career development and professional
                growth.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-black">
                Experienced Team
              </h3>

              <p className="text-slate-600">
                Work alongside skilled professionals delivering
                projects across Northern Ireland.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vacancies */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1200px] px-8">
          <div className="mb-16 text-center">
            <h2 className="text-5xl font-black">
              Current Vacancies
            </h2>
          </div>

          <div className="space-y-6">
            {vacancies.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-slate-200 p-8"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-black">
                      {job.title}
                    </h3>

                    <p className="text-slate-600">
                      {job.type} • {job.location}
                    </p>
                  </div>

                  <button className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#071B39] py-24 text-white">
        <div className="mx-auto max-w-4xl px-8 text-center">
          <h2 className="mb-6 text-5xl font-black">
            Don&apos;t See A Suitable Vacancy?
          </h2>

          <p className="mb-10 text-xl text-slate-300">
            We are always interested in talking to talented
            individuals. Send us your CV and we&apos;ll keep it on file.
          </p>

          <a
            href="/contact"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
}