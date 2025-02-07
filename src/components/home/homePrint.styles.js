import styled from 'styled-components';

const StyledContainer = styled.div`
	height: 100vh;
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
		top: 0%;
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
		top: 0%;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		border: 20px solid #fab413; /* El borde nítido, sin blur */
		z-index: -1; /* Este borde va encima del borde borroso */
	}

	@media (max-width: 768px) {
		width: 250px;
		height: 250px;
		&::before,
		&::after {
			width: 250px;
			height: 250px;
			border-width: 10px;
			top: 0px;
		}
	}
`;

const StyledLogo = styled.img`
	position: absolute;
	width: 750px;
	height: 750px;
	top: -40%;
	left: 5%;
	object-fit: contain;
	z-index: 1;

	@media (max-width: 768px) {
		width: 350px;
		height: 350px;
		top: 7%;
		left: 10%;
	}
`;

const StyledPorta = styled.h2`
	top: 40%;
	font-size: 90px;
	font-family: 'inter';
	color: white;

	@media (max-width: 768px) {
		font-size: 40px;
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-items: start;
	}
`;

const StyledName = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 540px;
	top: 40%;

	@media (max-width: 768px) {
		gap: 2px;
		top: 25%;
	}
`;

const StyledIcono = styled.img`
	position: fixed;
	width: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	top: 90%;

	@media (max-width: 768px) {
		display: none;
	}
`;
const StyledContainerLogoCircle = styled.div`
	position: relative;
	min-width: 400px;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export {
	StyledContainer,
	StyledCircle,
	StyledLogo,
	StyledPorta,
	StyledName,
	StyledIcono,
	StyledContainerLogoCircle
};
