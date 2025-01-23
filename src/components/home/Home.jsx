import React from 'react';
import { StyledCircle, StyledContainer, StyledLogo } from './homePrint.styles';

const Home = () => {
	return (
		<StyledContainer data-scroll-section>
			<div>
				<h1>PORTA</h1>
				<StyledLogo src='./public/assets/LogoJI-02.png' alt='' />
				<StyledCircle></StyledCircle>

				<h1>FOLIO</h1>
			</div>
		</StyledContainer>
	);
};

export default Home;
