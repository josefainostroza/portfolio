import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledCircle = styled.div`
	position: relative;
	background-color: transparent;
	border-radius: 50%;
	width: 400px;
	height: 400px;
	display: flex;
	justify-content: center;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		border: 20px solid #fab413;
		filter: blur(20px);
		z-index: -2;
	}
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		width: 400px;
		height: 400px;
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

const StyledPorta = styled.h2`
	top: 50%;
	font-size: 90px;
	font-family: 'inter';
	color: white;
`;

const StyledName = styled.h2`
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 550px;
	top: 50%;
`;
export { StyledContainer, StyledCircle, StyledLogo, StyledPorta, StyledName };
