import { projects } from "@/projects/project";
import Image, { StaticImageData } from "next/image";

const Projects = () => {
	return (
		<div className="min-h-[80vh] w-full bg-[rgba(0,0,0,2)] flex justify-center">
			<div className="h-full w-11/12 sm:w-4/5 flex flex-col items-center gap-4 my-8 sm:justify-center">
				<h1 className="text-5xl text-white font-bold">Projects</h1>
				<p className="text-center">
					Discover a selection of my most recent work, showcasing my ability to
					design and develop full-stack web apps.
				</p>

				<div className="w-full flex flex-row flex-wrap gap-8 mt-4 justify-center">
					{projects.map((project, index) => (
						<ProjectCard
							key={index}
							img={project.image}
							title={project.name}
							description={project.description}
							skills={project.tags}
							github={project.source_code_link}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

const ProjectCard = ({
	img,
	title,
	description,
	skills,
	github,
}: {
	img: StaticImageData;
	title: string;
	description: string;
	skills: string[];
	github: string;
}) => (
	<div className="w-[382px] h-[530px] bg-[hsla(0%,8%,0%,1%)] rounded-md p-8 flex flex-col items-center justify-between bg-[#0a0a0a] border-[1px] border-[rgba(255,255,255,0.1)]">
		<a
			className="w-full h-full rounded-md flex flex-col justify-between gap-4"
			href={github}
			target="_blank"
		>
			<Image src={img} alt="project" className="h-2/5 w-full rounded-md " />
			<h1 className="text-white text-2xl font-bold">{title}</h1>
			<p className="text-[whitesmoke] text-sm">{description}</p>
			<div className="flex flex-row gap-4 flex-wrap">
				{skills.map((skill, index) => (
					<span
						key={index}
						className="text-white bg-[rgba(0,0,0,2)] rounded-md px-2 py-1 text-xs border-[1px] border-[rgba(255,255,255,0.1)]"
					>
						{skill}
					</span>
				))}
			</div>
		</a>
	</div>
);

export default Projects;
