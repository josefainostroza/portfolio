import React from 'react';
import {
	HeroContainer,
	CircleBackground,
	StyledImgPersonal,
	StyledText,
	StyledTitle,
	StyledContexText,
	StyledContainerLinks,
	StyledButton,
	StyledLinks,
	StyledContainerImgCircle,
	Styledimgicons,
	Styledcontainericons
} from './hero.styles';

const Hero = () => {
	return (
		<HeroContainer data-scroll-section id='about'>
			<StyledContexText>
				<div>
					<StyledTitle>¡Hola! Soy Josefa</StyledTitle>
					<StyledText>
						Diseñadora de Interacción Digital y Gráfica con Máster en UX/UI y
						Desarrollo Web. Creo experiencias digitales intuitivas y funcionales
						que logren conectar con las personas. Desarrollo páginas web
						dinámicas con JavaScript y React, asegurándome de que cada proyecto
						sea visualmente impactante y funcional. Mi enfoque está en el
						usuario, la creatividad y la tecnología, transformando ideas en
						soluciones digitales efectivas.
					</StyledText>
				</div>
				<StyledContainerLinks>
					<Styledcontainericons>
						<Styledimgicons src='assets/programs/Linkedin.png' alt='' />
						<StyledLinks href='https://www.linkedin.com/in/josefa-inostroza-gonz%C3%A1lez-1b262224b/'>
							Linkedin
						</StyledLinks>
					</Styledcontainericons>
					<Styledcontainericons>
						<Styledimgicons src='assets/programs/Github.png' alt='' />
						<StyledLinks href='https://github.com/josefainostroza?tab=repositories'>
							Github
						</StyledLinks>
					</Styledcontainericons>
					<Styledcontainericons>
						<Styledimgicons src='assets/programs/gmail.png' alt='' />
						<StyledLinks href='mailto:josefainostrozag@gmail.com'>
							Gmail
						</StyledLinks>
					</Styledcontainericons>
				</StyledContainerLinks>
				<StyledButton
					onClick={() => {
						window.location.href = './public/Curriculum-Vitae_.pdf';
					}}
				>
					Descargar CV
				</StyledButton>
			</StyledContexText>
			<StyledContainerImgCircle>
				<CircleBackground />
				<StyledImgPersonal src='./public/assets/FotoPersonal.png' alt='img' />
			</StyledContainerImgCircle>
		</HeroContainer>
	);
};

export default Hero;
