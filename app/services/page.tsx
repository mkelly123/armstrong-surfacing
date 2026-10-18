import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Armstrong Surfacing Ltd",
  description:
    "Commercial surfacing, road construction, civil engineering, car parks and infrastructure solutions.",

  openGraph: {
    title: "Services | Armstrong Surfacing Ltd",
    description:
      "Commercial surfacing, road construction and infrastructure solutions across Northern Ireland.",
    images: ["/images/services-hero.jpg"],
  },
};

const services = [
  {
    title: "Commercial Surfacing",
    image: "/images/service-commercial.jpg",
    description:
      "Professional asphalt and surfacing solutions for commercial developments, retail parks and industrial premises.",
  },
  {
    title: "Road Construction",
    image: "/images/service-road.jpg",
    description:
      "Road building, resurfacing and reconstruction projects delivered throughout Northern Ireland.",
  },
  {
    title: "Car Parks",
    image: "/images/service-carpark.jpg",
    description:
      "Construction and resurfacing of public and private car parks with drainage and line marking options.",
  },
  {
    title: "Civil Engineering",
    image: "/images/service-civil.jpg",
    description:
      "Groundworks, kerbing, drainage and supporting infrastructure projects.",
  },
  {
    title: "Driveways",
    image: "/images/service-driveway.jpg",
    description:
      "High-quality driveways and private access roads built to last.",
  },
  {
    title: "Site Preparation",
    image: "/images/service-site.jpg",
    description:
      "Complete site preparation, excavation and groundwork services before construction begins.",
  },
];

export default function ServicesPage() {
  return (
    <main>

      {/* Hero */}

      <section className="relative h-[500px]">

        <Image
          src="/images/services-hero.jpg"
          alt="Services"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#071B39]/75" />

        <div className="relative mx-auto flex h-full max-w-[1600px] items-center px-8">

          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-blue-400">
              Armstrong Surfacing Services
            </p>

            <h1 className="text-6xl font-black text-white">
              Surfacing &
              <br />
              Infrastructure Solutions
            </h1>

          </div>

        </div>

      </section>

      {/* Intro */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-8 text-center">

          <h2 className="mb-8 text-5xl font-black text-slate-900">
            Delivering Quality Across Every Project
          </h2>

          <p className="text-xl leading-relaxed text-slate-600">
            Armstrong Surfacing provides a comprehensive range of
            surfacing, groundwork and civil engineering services
            for commercial, industrial and residential clients
            throughout Northern Ireland.
          </p>

        </div>

      </section>

      {/* Services Grid */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-[1600px] px-8">

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >

                <div className="relative h-72">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <h3 className="mb-4 text-3xl font-black text-slate-900">
                    {service.title}
                  </h3>

                  <p className="leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Process */}

      <section className="bg-[#071B39] py-24 text-white">

        <div className="mx-auto max-w-[1400px] px-8">

          <div className="mb-16 text-center">

            <h2 className="text-5xl font-black">
              Our Process
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-4">

            <div>
              <h3 className="mb-3 text-4xl font-black text-blue-400">
                01
              </h3>

              <h4 className="mb-2 text-xl font-bold">
                Consultation
              </h4>

              <p className="text-slate-300">
                Discuss project requirements.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-4xl font-black text-blue-400">
                02
              </h3>

              <h4 className="mb-2 text-xl font-bold">
                Site Survey
              </h4>

              <p className="text-slate-300">
                Assess conditions and scope.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-4xl font-black text-blue-400">
                03
              </h3>

              <h4 className="mb-2 text-xl font-bold">
                Delivery
              </h4>

              <p className="text-slate-300">
                Complete works safely and efficiently.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-4xl font-black text-blue-400">
                04
              </h3>

              <h4 className="mb-2 text-xl font-bold">
                Handover
              </h4>

              <p className="text-slate-300">
                Final inspection and completion.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}