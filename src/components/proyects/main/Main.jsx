import React, { useState } from 'react';
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

	const handleMouseEnter = projectId => {
		setActiveProject(projectId); // Activa el proyecto actual
	};

	const handleMouseLeave = () => {
		setActiveProject(null); // Resetea cuando el mouse sale
	};

	return (
		<div id='projects'>
			<StyledTitle>PROYECTOS</StyledTitle>
			<StyledContainerPar>
				{TITLE_PROYECTS01.map(titleProyect01 => (
					<StyledContainer key={titleProyect01.id}>
						<StyledLine />
						<StyledContainerProyects>
							<StyledTitleProyects>{titleProyect01.title}</StyledTitleProyects>

							{/* Renderizamos los nombres de los proyectos */}
							{Object.keys(titleProyect01)
								.filter(key => key.includes('proyect'))
								.map((proyectKey, index) => {
									const projectId = `${titleProyect01.id}-${proyectKey}`;
									return (
										<StyledNameProyect
											key={projectId}
											onMouseEnter={() => handleMouseEnter(projectId)}
											onMouseLeave={handleMouseLeave}
										>
											{titleProyect01[proyectKey]}

											{activeProject === projectId && (
												<StyledImagePreview
													src={titleProyect01[`image0${index + 1}`]}
													alt='Preview del proyecto'
												/>
											)}
										</StyledNameProyect>
									);
								})}
						</StyledContainerProyects>
					</StyledContainer>
				))}
			</StyledContainerPar>

			<StyledContainerPar>
				{TITLE_PROYECTS02.map(titleProyect02 => (
					<StyledContainer key={titleProyect02.id}>
						<StyledLine />
						<StyledContainerProyects>
							<StyledTitleProyects>{titleProyect02.title}</StyledTitleProyects>

							{Object.keys(titleProyect02)
								.filter(key => key.includes('proyect'))
								.map((proyectKey, index) => {
									const projectId = `${titleProyect02.id}-${proyectKey}`;
									return (
										<StyledNameProyect
											key={projectId}
											onMouseEnter={() => handleMouseEnter(projectId)}
											onMouseLeave={handleMouseLeave}
										>
											{titleProyect02[proyectKey]}

											{activeProject === projectId && (
												<StyledImagePreview
													src={titleProyect02[`image0${index + 1}`]}
													alt='Preview del proyecto'
												/>
											)}
										</StyledNameProyect>
									);
								})}
						</StyledContainerProyects>
					</StyledContainer>
				))}
			</StyledContainerPar>
		</div>
	);
};

export default Main;
