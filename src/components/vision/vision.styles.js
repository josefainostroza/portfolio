import styled from 'styled-components';

const StyledVisionContainer = styled.section`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	top: 0%;
	right: 50%;
	background-color: #e8c92e;
	color: black;
	gap: 68px;
	padding: 300px;

	@media (max-width: 768px) {
		gap: 40px;
		padding: 20px;
		margin: 0;
	}
`;

const StyledTitleVision = styled.h1`
	font-weight: 900;
	font-size: 80px;

	@media (max-width: 768px) {
		font-size: 40px; /* Ajustar tamaño de fuente en tablet */
	}
`;

const StyledDescription = styled.p`
	font-weight: 400;
	font-size: 40px;
	width: 998px;

	@media (max-width: 768px) {
		font-size: 20px; /* Ajustar tamaño de fuente en tablet */
		width: 90%; /* Ancho ajustado en tablet */
	}
`;

export { StyledVisionContainer, StyledTitleVision, StyledDescription };
