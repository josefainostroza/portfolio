import { useParams } from 'react-router-dom';
import { PROJECT_DETAILS } from '../../constants/project-details';
import {
	StyledContainerMiniDescription,
	StyledContainerProgram,
	StyledContainerProjects,
	StyledImgProgram,
	StyledImgProjects,
	StyledInfoProyect,
	StyledMiniDescription,
	// StyledSubTitle,
	// StyledTitle,
	StyledtitleInfoProyect,
	StyledVideoProjects
} from './project';

const ProjectDetails = () => {
	const { slug } = useParams();
	let projectData = null;

	for (const category in PROJECT_DETAILS) {
		const categoryData = PROJECT_DETAILS[category];
		const project = categoryData.projects.find(p => p.slug === slug);
		if (project) {
			projectData = {
				title: project.title,
				subtitle: project.subtitle,
				img: project.img,
				info: project.info,
				año: project.año,
				rol: project.rol,
				video: project.video,
				program01: project.program01,
				program02: project.program02,
				Asignature: project.Asignature,
				teacher: project.teacher,
				team: project.team,
				img02: project.img02,
				titledescription: project.titledescription,
				img05: project.img05,
				img06: project.img06
			};
			break;
		}
	}

	if (!projectData) {
		return <div>Proyecto no encontrado</div>;
	}

	return (
		<StyledContainerProjects>
			{/* <StyledTitle>{projectData.title}</StyledTitle>
			<StyledSubTitle>{projectData.subtitle}</StyledSubTitle> */}
			<StyledImgProjects src={projectData.img} alt='' />
			<StyledContainerMiniDescription>
				<StyledMiniDescription>{projectData.Asignature}</StyledMiniDescription>
				<StyledMiniDescription>{projectData.teacher}</StyledMiniDescription>
				<StyledMiniDescription>{projectData.año}</StyledMiniDescription>
				<StyledMiniDescription>{projectData.team}</StyledMiniDescription>
				<StyledMiniDescription>{projectData.rol}</StyledMiniDescription>
			</StyledContainerMiniDescription>
			<StyledtitleInfoProyect>
				{projectData.titledescription}
			</StyledtitleInfoProyect>
			<StyledInfoProyect>{projectData.info}</StyledInfoProyect>
			<StyledContainerProgram>
				<StyledImgProgram src={projectData.program01} alt='' />
				<StyledImgProgram src={projectData.program02} alt='' />
			</StyledContainerProgram>
			<img src={projectData.img02} alt='' />
			<img src={projectData.img05} alt='' />
			<img src={projectData.img06} alt='' />

			<StyledVideoProjects src={projectData.video} alt='' />
		</StyledContainerProjects>
	);
};

export default ProjectDetails;
