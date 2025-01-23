import styled from 'styled-components';

const StyledSidebarContainer = styled.nav`
	position: fixed;
	top: 50%;
	right: 20px;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 1000;
`;

const StyledMenuItem = styled.a`
	margin: 10px 0;
	font-size: 1rem;
	color: white;
	text-decoration: none;
	writing-mode: vertical-rl;
	text-orientation: mixed;
	transition: color 0.3s ease;

	&:hover {
		color: #fdb927;
	}
`;
export { StyledSidebarContainer, StyledMenuItem };
