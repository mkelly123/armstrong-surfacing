import {
  Shield,
  Clock3,
  MapPinned,
  Truck,
  Hammer,
  Users,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Trusted For Over 100 Years",
    description:
      "Four generations of experience delivering surfacing and infrastructure projects throughout Northern Ireland.",
  },
  {
    icon: Truck,
    title: "Modern Plant & Equipment",
    description:
      "Access to specialist machinery and experienced operators for projects of all sizes.",
  },
  {
    icon: MapPinned,
    title: "NI Wide Coverage",
    description:
      "Supporting commercial, public sector and private clients across Northern Ireland.",
  },
  {
    icon: Hammer,
    title: "Complete Project Delivery",
    description:
      "From site preparation and drainage through to surfacing and finishing works.",
  },
  {
    icon: Clock3,
    title: "Reliable Scheduling",
    description:
      "Projects delivered efficiently with a strong focus on programme and quality.",
  },
  {
    icon: Users,
    title: "Experienced Workforce",
    description:
      "Dedicated surfacing and civil engineering teams with extensive industry knowledge.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#071B39] py-32 text-white">
      <div className="mx-auto max-w-[1600px] px-8">

        <div className="mb-16 text-center">

          <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-blue-400">
            Why Choose Armstrong
          </p>

          <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight lg:text-6xl">
            Delivering Quality Infrastructure
            Across Northern Ireland
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300">
            Combining over a century of experience with modern
            equipment, skilled teams and a commitment to quality
            workmanship on every project.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-900 bg-[#0B2348] p-8 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
              >
                <Icon
                  size={40}
                  className="mb-6 text-blue-400"
                />

                <h3 className="mb-4 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-slate-300">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}