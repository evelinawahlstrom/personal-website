import { getProjects } from "@/sanity/sanity-utils";
import Image from 'next/image';
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-7xl font-extrabold pt-20">Hej. I&apos;m <span className="bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">Evelina</span>!</h1>
      <p className="mt-3 text-xl text-gray-600">Welcome to my little corner of the internet.</p>
      <h2 className="mt-20 font-bold text-gray-700 text-3xl">My projects / talks</h2>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project._id} className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 transition">
          {project.image && (
            <Image src={project.image} alt={project.alt} width={750} height={300} className="object-cover border border-gray-500" />
          )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-purple-500 to-blue-300 bg-clip-text text-transparent">{project.name}</div>
        </Link>
      ))}
      </div>
    </div>
  );
}
