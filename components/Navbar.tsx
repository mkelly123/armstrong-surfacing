export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-[#03152E]/95 backdrop-blur-md">

      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-8">

        <div className="flex items-center gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded bg-blue-600 text-3xl font-black text-white">
            A
          </div>

          <div>
            <h1 className="text-4xl font-black leading-none text-white">
              ARMSTRONG
            </h1>

            <p className="font-bold tracking-[3px] text-blue-500">
              SURFACING LTD
            </p>
          </div>

          <div className="ml-6 hidden border-l border-slate-600 pl-6 xl:block">
            <p className="text-xs uppercase tracking-wider text-slate-300">
              Trusted Surfacing
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-300">
              For A Stronger
            </p>
            <p className="text-xs uppercase tracking-wider text-slate-300">
              Northern Ireland
            </p>
          </div>

        </div>

        <nav className="hidden gap-8 text-sm font-semibold text-white xl:flex">

          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Our Services</a>
          <a href="#">Projects</a>
          <a href="#">Sectors</a>
          <a href="#">Careers</a>
          <a href="#">News</a>
          <a href="#">Contact</a>

        </nav>

        <div className="hidden items-center gap-6 xl:flex">

          <div className="text-right text-white">

            <p className="text-sm font-semibold">
              028 9264 8270
            </p>

            <p className="text-xs text-slate-300">
              enquiries@armstrong-surfacing.co.uk
            </p>

            <p className="text-xs text-slate-300">
              Lisburn, BT28 3RG
            </p>

          </div>

          <button className="rounded bg-blue-600 px-8 py-4 font-bold text-white">
            REQUEST A QUOTE
          </button>

        </div>

      </div>

    </header>
  );
}