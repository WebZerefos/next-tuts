import Image from "next/image"

import { getProjects } from "@/sanity/sanity-utils"

import Link from "next/link"

const Home = async () => {
	const projects = await getProjects()

	return (
		<div className='max-w-5xl p-12 mx-auto'>
			<h1 className='text-7xl font-bold'>
				Olá eu sou <span className='bg-gradient-to-r from-teal-500  to-orange-500 bg-clip-text text-transparent'>Victor</span>!
			</h1>
			<p className='mt-3 text-xl text-slate-600'>Olá a todos! vejam alguns dos meus projetos!</p>

			<h2 className='mt-24 font-bold text-slate-700 text-3xl'>Meus Projetos!</h2>
			<div className='mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{projects.map((project) => (
					<Link
						href={`/projects/${project.slug}`}
						key={project._id}
						className='border border-slate-500 rounded-lg p-1 hover:scale-105 hover:border-teal-500 transition'
					>
						{project.image && (
							<Image
								src={project.image}
								alt={project.name}
								width={750}
								height={300}
								className='object-cover rounded-lg border border-slate-500'
							/>
						)}
						<div className='font-extrabold bg-gradient-to-r from-teal-500 via-red-400 to-orange-500 bg-clip-text text-transparent'>
							{project.name}
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Home

// 39:14
