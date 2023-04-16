import { createClient, groq } from "next-sanity"

import clientConfig from "./config/client-config"
import { Project } from "@/types/Project"

export const getProjects = async (): Promise<Project[]> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'project']{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content

    }`
	)
}

export const getProject = async (slug: string): Promise<Project> => {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'project' && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content

    }`,
		{ slug }
	)
}
