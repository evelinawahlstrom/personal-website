import { Project } from "@/app/types/project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId: 'q0vgokty',
        dataset: 'production',
        apiVersion: "2025-01-16",
    });

   return client.fetch(
        groq`*[_type == "project" ]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        alt,
        content
        }`
    );
};
