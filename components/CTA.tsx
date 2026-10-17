export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#071B39] py-32">

      <div className="absolute inset-0 bg-gradient-to-r from-[#071B39] to-[#0D2E61]" />

      <div className="relative mx-auto max-w-7xl px-8 text-center text-white">

        <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-blue-400">
          Start Your Next Project
        </p>

        <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight lg:text-6xl">
          Ready To Discuss Your Surfacing Requirements?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-300">
          Speak to our experienced team today for a free
          consultation, site survey and competitive quotation.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <button className="rounded-lg bg-blue-600 px-10 py-5 font-bold text-white transition hover:bg-blue-700">
            REQUEST A QUOTE
          </button>

          <button className="rounded-lg border border-white px-10 py-5 font-bold text-white transition hover:bg-white hover:text-[#071B39]">
            CALL 028 9264 8270
          </button>

        </div>

      </div>

    </section>
  );
}