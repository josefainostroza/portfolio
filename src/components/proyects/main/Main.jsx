import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	TITLE_PROYECTS01,
	TITLE_PROYECTS02
} from '../../constants/title-proyects';
import {
	StyledContainer,
	StyledContainerPar,
	StyledContainerProyects,
	StyledLine,
	StyledNameProyect,
	StyledTitle,
	StyledTitleProyects,
	StyledImagePreview
} from './main.styles';

const Main = () => {
	const [activeProject, setActiveProject] = useState(null);
	const navigate = useNavigate(); // Hook para la navegación

	const handleMouseEnter = projectId => {
		setActiveProject(projectId); // Activa el proyecto actual
	};

	const handleMouseLeave = () => {
		setActiveProject(null); // Resetea cuando el mouse sale
	};

	const handleProjectClick = slug => {
		navigate(`/projects/${slug}`);
	};

	const renderProjects = projectGroup =>
		projectGroup.map(category => (
			<StyledContainer key={category.id}>
				<StyledLine />
				<StyledContainerProyects>
					<StyledTitleProyects>{category.title}</StyledTitleProyects>

					{/* Renderizamos los nombres de los proyectos */}
					{category.projects.map(project => {
						const projectId = `${category.id}-${project.slug}`;
						return (
							<StyledNameProyect
								key={projectId}
								onMouseEnter={() => handleMouseEnter(projectId)}
								onMouseLeave={handleMouseLeave}
								onClick={() => handleProjectClick(project.slug)}
							>
								{project.name}

								{/* Muestra una previsualización de la imagen si el proyecto está activo */}
								{activeProject === projectId && (
									<StyledImagePreview
										src={project.image}
										alt={`Preview de ${project.name}`}
									/>
								)}
							</StyledNameProyect>
						);
					})}
				</StyledContainerProyects>
			</StyledContainer>
		));

	return (
		<div id='projects'>
			<StyledTitle>PROYECTOS</StyledTitle>
			<StyledContainerPar>
				{renderProjects(TITLE_PROYECTS01)}
			</StyledContainerPar>
			<StyledContainerPar>
				{renderProjects(TITLE_PROYECTS02)}
			</StyledContainerPar>
		</div>
	);
};

export default Main;
