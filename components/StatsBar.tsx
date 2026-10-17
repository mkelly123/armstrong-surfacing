export default function StatsBar() {
  return (
    <section className="-mt-16 relative z-20">

      <div className="mx-auto max-w-[1500px]">

        <div className="grid overflow-hidden rounded-lg border border-[#1B3C74] bg-[#071B39] md:grid-cols-4">

          <div className="border-r border-[#1B3C74] p-8 text-white">
            <h3 className="text-5xl font-black">100+</h3>

            <p className="uppercase text-blue-400">
              Years Experience
            </p>

            <p className="text-xs text-slate-400">
              Four Generations Strong
            </p>
          </div>

          <div className="border-r border-[#1B3C74] p-8 text-white">
            <h3 className="text-5xl font-black">5,000+</h3>

            <p className="uppercase text-blue-400">
              Projects Completed
            </p>

            <p className="text-xs text-slate-400">
              Across Northern Ireland
            </p>
          </div>

          <div className="border-r border-[#1B3C74] p-8 text-white">
            <h3 className="text-5xl font-black">NI</h3>

            <p className="uppercase text-blue-400">
              Wide Coverage
            </p>

            <p className="text-xs text-slate-400">
              Local Expertise
            </p>
          </div>

          <div className="p-8 text-white">
            <h3 className="text-5xl font-black">24/7</h3>

            <p className="uppercase text-blue-400">
              Project Support
            </p>

            <p className="text-xs text-slate-400">
              Commercial Specialists
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}