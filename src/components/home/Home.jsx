import {
	StyledCircle,
	StyledContainer,
	StyledContainerLogoCircle,
	StyledIcono,
	StyledLogo,
	StyledName,
	StyledPorta
} from './homePrint.styles';

const Home = () => {
	return (
		<StyledContainer data-scroll-section>
			<StyledName>
				<StyledPorta>PORTA</StyledPorta>
				<StyledPorta>FOLIO</StyledPorta>
			</StyledName>
			<StyledContainerLogoCircle>
				<StyledLogo src='/assets/LogoJI-02.png' alt='Logo' />
				<StyledCircle></StyledCircle>
			</StyledContainerLogoCircle>
			<StyledIcono src='/assets/IconoDeslizar.png' alt='Icono' />
		</StyledContainer>
	);
};

export default Home;
