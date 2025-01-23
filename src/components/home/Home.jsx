import React from 'react';
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
			<StyledLogo src='./public/assets/LogoJI-02.png' alt='Logo' />
			<StyledCircle></StyledCircle>
			<StyledIcono src='./public/assets/IconoDeslizar.png' alt='Icono' />
		</StyledContainer>
	);
};

export default Home;
