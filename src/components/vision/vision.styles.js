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
		padding: 150px; /* Reduce padding en tablet */
		gap: 40px; /* Reducir el gap en dispositivos más pequeños */
	}

	@media (max-width: 480px) {
		padding: 80px; /* Ajuste de padding en móviles */
		gap: 20px;
		height: auto; /* Para que no haya un alto fijo */
	}
`;

const StyledTitleVision = styled.h1`
	font-weight: 900;
	font-size: 96px;

	@media (max-width: 768px) {
		font-size: 50px; /* Ajustar tamaño de fuente en tablet */
	}

	@media (max-width: 480px) {
		font-size: 30px; /* Ajustar tamaño de fuente en móviles */
		text-align: center; /* Centrar el título en pantallas pequeñas */
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

	@media (max-width: 480px) {
		font-size: 16px; /* Ajustar tamaño de fuente en móvil */
		width: 90%; /* Asegurarse que el texto no salga de la pantalla */
	}
`;

export { StyledVisionContainer, StyledTitleVision, StyledDescription };
