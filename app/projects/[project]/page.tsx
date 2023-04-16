import { getProject } from "@/sanity/sanity-utils"
import React from "react"

type Props = {
	params: { project: string }
}

async function Project({ params }: Props) {
	const slug = params.project

	const project = await getProject(slug)

	return <div>{project.name}</div>
}

export default Project
