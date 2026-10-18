import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | Armstrong Surfacing Ltd`,
    description: project.description,

    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}


export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main>

        <section className="relative h-[500px]">

        <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
        />

        <div className="absolute inset-0 bg-[#071B39]/75" />

        <div className="relative mx-auto flex h-full max-w-[1600px] items-center px-8">

            <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[4px] text-blue-400">
                {project.sector}
            </p>

            <h1 className="text-6xl font-black text-white">
                {project.title}
            </h1>

            </div>

        </div>

        </section>

        <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-8">

            <h2 className="mb-6 text-4xl font-black">
            Project Overview
            </h2>

            <p className="mb-10 text-lg text-slate-600">
            {project.description}
            </p>

            <div className="grid gap-6 md:grid-cols-3">

            <div className="rounded-xl bg-slate-100 p-6">
                <h3 className="font-bold">
                Location
                </h3>

                <p>{project.location}</p>
            </div>

            <div className="rounded-xl bg-slate-100 p-6">
                <h3 className="font-bold">
                Sector
                </h3>

                <p>{project.sector}</p>
            </div>

            <div className="rounded-xl bg-slate-100 p-6">
                <h3 className="font-bold">
                Contractor
                </h3>

                <p>Armstrong Surfacing</p>
            </div>

            </div>

        </div>

        </section>

    </main>
    );
}