import React from 'react';
import {
	StyledContainerName,
	StyledHeaderContainer,
	StyledNameInostroza,
	StyledNameJosefa
} from './Header.styles';

const Header = () => {
	return (
		<StyledHeaderContainer>
			<StyledContainerName>
				<StyledNameJosefa>Josefa</StyledNameJosefa>
				<StyledNameInostroza>Inostroza</StyledNameInostroza>
			</StyledContainerName>
			{/* <img src='./public/assets/LogoJI-02.png' alt='' /> */}
		</StyledHeaderContainer>
	);
};

export default Header;
