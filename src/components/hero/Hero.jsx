import {
	HeroContainer,
	StyledButton,
	Styledcontainericons,
	StyledContainerImgCircle,
	StyledContainerLinks,
	StyledContexText,
	StyledHeroContainer,
	Styledimgicons,
	StyledImgPersonal,
	StyledLinks,
	StyledText,
	StyledTitle
} from './hero.styles';

const Hero = () => {
	return (
		<HeroContainer data-scroll-section id='about'>
			<StyledContexText>
				<StyledHeroContainer>
					<StyledTitle>¡Hola! Soy Josefa</StyledTitle>
					<StyledText>
						Diseñadora de Interacción Digital y Gráfica con Máster en UX/UI y Desarrollo Web. Combino una base sólida en branding, diseño visual y comunicación digital con experiencia en diseño de interfaces y productos centrados en el usuario.

Me interesa crear experiencias coherentes en todos los puntos de contacto, desde productos digitales y páginas web hasta contenido para redes sociales, cuidando siempre la identidad visual y la claridad del mensaje. Integro creatividad y tecnología para transformar ideas en soluciones funcionales y visualmente consistentes.
						{/*Diseñadora de Interacción Digital y Gráfica con Máster en UX/UI y
						Desarrollo Web. Creo experiencias digitales intuitivas y funcionales
						que logren conectar con las personas. Desarrollo páginas web
						dinámicas con JavaScript y React, asegurándome de que cada proyecto
						sea visualmente impactante y funcional. Mi enfoque está en el
						usuario, la creatividad y la tecnología, transformando ideas en
						soluciones digitales efectivas.*/}
					</StyledText>
					<StyledContainerLinks>
						<Styledcontainericons>
							<Styledimgicons src='assets/programs/Linkedin.png' alt='' />
							<StyledLinks href='https://www.linkedin.com/in/josefa-inostroza-gonz%C3%A1lez-1b262224b/'>
								Linkedin
							</StyledLinks>
						</Styledcontainericons>
						<Styledcontainericons>
							<Styledimgicons src='/assets/programs/Github.png' alt='' />
							<StyledLinks href='https://github.com/josefainostroza?tab=repositories'>
								Github
							</StyledLinks>
						</Styledcontainericons>
						<Styledcontainericons>
							<Styledimgicons src='/assets/programs/gmail.png' alt='' />
							<StyledLinks href='mailto:josefainostrozag@gmail.com'>
								Gmail
							</StyledLinks>
						</Styledcontainericons>
					</StyledContainerLinks>

					<StyledButton
						onClick={() => {
							window.location.href = '/Curriculum-JosefaInostroza.pdf';
						}}
					>
						<img src='/assets/download.png' alt='' />
						Descargar CV
					</StyledButton>
				</StyledHeroContainer>
				<StyledContainerImgCircle>
					{/* <CircleBackground /> */}
					<StyledImgPersonal src='/assets/FotoPersonal.png' alt='img' />
				</StyledContainerImgCircle>
			</StyledContexText>
		</HeroContainer>
	);
};

export default Hero;
