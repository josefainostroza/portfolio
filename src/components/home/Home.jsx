import React from 'react';
import {
	StyledCircle,
	StyledContainer,
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
			<StyledLogo src='./public/assets/LogoJI-02.png' alt='' />
			<StyledCircle></StyledCircle>
		</StyledContainer>
	);
};

export default Home;
