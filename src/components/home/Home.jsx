import {
	StyledCircle,
	StyledContainer,
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
			<StyledLogo src='/assets/LogoJI-02.png' alt='Logo' />
			<StyledCircle></StyledCircle>
			<StyledIcono src='/assets/IconoDeslizar.png' alt='Icono' />
		</StyledContainer>
	);
};

export default Home;
