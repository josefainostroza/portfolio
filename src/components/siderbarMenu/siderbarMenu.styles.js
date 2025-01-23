import styled from 'styled-components';

const StyledSidebarContainer = styled.nav`
	position: absolute;
	position: fixed;
	top: 55%;
	right: 20px;
	transform: translateY(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	z-index: 1000;
	font-family: 'inter';
	padding-right: 70px;
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
