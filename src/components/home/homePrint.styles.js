import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledCircle = styled.div`
	position: relative;
	background-color: transparent;
	border-radius: 50%;
	width: 450px;
	height: 450px;
	display: flex;
	justify-content: center;
	align-items: center;

	&::before {
		content: '';
		position: absolute;
		top: -20px;
		left: -20px;
		right: -20px;
		bottom: -20px;
		border-radius: 50%;
		border: 20px solid #fab413;
		filter: blur(20px);
		z-index: -2;
	}
	&::after {
		content: '';
		position: absolute;
		top: -20px;
		left: -20px;
		right: -20px;
		bottom: -20px;
		border-radius: 50%;
		border: 20px solid #fab413; /* El borde nítido, sin blur */
		z-index: -1; /* Este borde va encima del borde borroso */
	}
`;

const StyledLogo = styled.img`
	position: absolute;
	width: 950px;
	height: 950px;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	object-fit: contain;
	z-index: 1;
`;
export { StyledContainer, StyledCircle, StyledLogo };
