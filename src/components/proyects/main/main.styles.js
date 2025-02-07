import styled from 'styled-components';

const StyledImagePreview = styled.img`
	position: absolute;
	left: 10%;
	top: -300%;
	transform: translateY(-50%);
	width: 300px;
	height: auto;
	border: 1px solid transparent;
	border-radius: 8px;
	box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	z-index: 10;
	background-color: white;

	@media (max-width: 768px) {
		width: 200px; // Reducimos el tamaño de la imagen en tabletas
		left: 5%;
	}

	@media (max-width: 480px) {
		width: 150px; // Ajustamos el tamaño de la imagen en móviles
		left: 0;
	}
`;

const StyledContainer = styled.div`
	color: white;
	display: flex;
	padding: 50px;
	position: relative;

	@media (max-width: 768px) {
		padding: 40px;
	}
`;

const StyledContainerProyects = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	gap: 25px;

	@media (max-width: 768px) {
		gap: 25px;
	}
`;

const StyledContainerPar = styled.div`
	color: white;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 250px;

	@media (max-width: 768px) {
		flex-direction: column;
		padding: 0 40px;
	}
`;

const StyledTitleProyects = styled.h3`
	font-size: 30px;
	font-weight: 800;

	@media (max-width: 768px) {
		font-size: 24px; // Reducimos el tamaño de fuente en tabletas
	}

	@media (max-width: 480px) {
		font-size: 20px; // Ajustamos aún más el tamaño de fuente en móviles
	}
`;

const StyledNameProyect = styled.button`
	font-size: 18px;
	font-weight: 400;
	width: 386px;
	height: 37px;
	border: 1px solid white;
	border-radius: 18px;
	padding: 6px 32px;
	color: white;
	background-color: transparent;
	position: relative;
	display: flex;

	&:hover {
		color: black;
		background-color: #fdb927;
	}

	@media (max-width: 768px) {
		width: 300px; // Reducimos el tamaño del botón en tabletas
		font-size: 16px; // Ajustamos el tamaño de fuente
	}
`;

const StyledLine = styled.div`
	background-color: white;
	width: 1px;
	height: 172px;
	margin-right: 38px;

	@media (max-width: 768px) {
		height: 120px; // Reducimos la altura de la línea en tabletas
	}

	@media (max-width: 480px) {
		height: 80px; // Ajustamos la altura de la línea en móviles
	}
`;

const StyledTitle = styled.h1`
	font-weight: 900;
	font-size: 50px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 120px 120px 50px 120px;

	@media (max-width: 768px) {
		font-size: 40px; // Reducimos el tamaño del título en tabletas
		padding: 80px 80px 40px 80px; // Ajustamos el padding
	}
`;

export {
	StyledContainer,
	StyledContainerProyects,
	StyledTitle,
	StyledNameProyect,
	StyledLine,
	StyledContainerPar,
	StyledTitleProyects,
	StyledImagePreview
};
