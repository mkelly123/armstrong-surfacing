import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-[1600px] px-8">

        {/* Heading */}

        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[4px] text-blue-600">
              Featured Projects
            </p>

            <h2 className="text-4xl font-black md:text-5xl">
              Recent Projects
            </h2>

          </div>

          <Link
            href="/projects"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            View All Projects →
          </Link>

        </div>

        {/* Project Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {featuredProjects.map((project) => (

            <article
              key={project.slug}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#071B39]/90 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6">

                  <span className="rounded bg-blue-600 px-3 py-1 text-xs font-bold text-white">
                    {project.sector}
                  </span>

                </div>

              </div>

              <div className="p-8">

                <h3 className="mb-3 text-2xl font-black">
                  {project.title}
                </h3>

                <p className="mb-2 text-slate-500">
                  {project.location}
                </p>

                <p className="mb-6 text-slate-600">
                  {project.description}
                </p>

                <Link
                  href={`/projects/${project.slug}`}
                  className="font-semibold text-blue-600"
                >
                  View Project →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}