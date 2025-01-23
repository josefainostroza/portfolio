import React from 'react';
import { StyledMenuItem, StyledSidebarContainer } from './siderbarMenu.styles';

const SidebarMenu = () => {
	return (
		<StyledSidebarContainer>
			<StyledMenuItem href='#about'>SOBRE MI</StyledMenuItem>
			<StyledMenuItem href='#projects'>PROYECTOS</StyledMenuItem>
			<StyledMenuItem href='#contact'>CONTACTO</StyledMenuItem>
		</StyledSidebarContainer>
	);
};

export default SidebarMenu;
