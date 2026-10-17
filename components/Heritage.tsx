import Image from "next/image";

export default function Heritage() {
  return (
    <section className="bg-[#071B39] py-32 text-white">
      <div className="mx-auto grid max-w-[1600px] gap-16 px-8 lg:grid-cols-2">

        {/* Left Content */}
        <div className="flex flex-col justify-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-400">
            Our Heritage
          </p>

          <h2 className="text-5xl font-black leading-tight xl:text-6xl">
            {"Building Northern Ireland's Infrastructure For More Than 100 Years"}
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            The Armstrong family has been involved in quarrying,
            surfacing and infrastructure projects throughout
            Northern Ireland for more than 100 years.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            From commercial developments and industrial estates
            to roads, car parks and civil engineering projects,
            Armstrong Surfacing continues to deliver quality,
            reliability and long-term value for clients across
            the region.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">

            <div>
              <h3 className="text-4xl font-black text-blue-400">
                100+
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-blue-400">
                4
              </h3>

              <p className="mt-2 text-sm uppercase tracking-wider">
                Generations
              </p>
            </div>

          </div>

          <button className="mt-10 w-fit rounded bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-700">
            ABOUT OUR COMPANY
          </button>

        </div>

        {/* Right Image */}

        <div className="relative min-h-[600px] overflow-hidden rounded-2xl">

          <Image
            src="/images/heritage.jpg"
            alt="Armstrong Surfacing team"
            fill
            className="object-cover"
          />

        </div>

      </div>
    </section>
  );
}