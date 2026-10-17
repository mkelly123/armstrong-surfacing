export default function Testimonials() {
  return (
    <section className="bg-slate-100 py-32">
      <div className="mx-auto max-w-6xl px-8 text-center">

        <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-600">
          Client Feedback
        </p>

        <h2 className="mb-16 text-5xl font-black text-slate-900">
          Trusted Across Northern Ireland
        </h2>

        <div className="rounded-3xl bg-white p-12 shadow-xl">

          <div className="mx-auto max-w-4xl">

            <div className="mb-8 text-8xl font-black leading-none text-blue-600 opacity-20">
              &ldquo;
            </div>

            <p className="text-2xl leading-relaxed text-slate-700">
              Excellent workmanship from start to finish.
              The project was delivered on schedule,
              communication was excellent and the finished
              surface exceeded expectations.
            </p>

            <div className="mt-10">

              <h3 className="text-xl font-black">
                Commercial Client
              </h3>

              <p className="text-slate-500">
                Lisburn, Northern Ireland
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}