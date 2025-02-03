import React from 'react';
import {
	StyledContainerName,
	StyledHeaderContainer,
	StyledNameInostroza,
	StyledNameJosefa
} from './Header.styles';

const Header = () => {
	return (
		<StyledContainerName>
			<StyledNameJosefa>Josefa</StyledNameJosefa>
			<StyledNameInostroza>Inostroza</StyledNameInostroza>
		</StyledContainerName>
	);
};

export default Header;
