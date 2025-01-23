import styled from 'styled-components';

// Wrapper para manejar el fondo dinámico
export const Wrapper = styled.div`
	width: 100%; /* Asegura que abarque todo el ancho */
	min-height: 100vh; /* Mínimo ocupa el 100% del viewport */
	background-color: ${({ colorFondo }) => colorFondo}; /* Fondo dinámico */
	transition: background-color 0.5s ease; /* Transición suave al cambiar */
	display: flex; /* Alineación central del contenido */
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

// Content para el texto o elementos internos
export const Content = styled.div`
	text-align: center;
	color: white; /* Contraste para cualquier fondo */
	padding: 20px;
	font-size: 24px;
`;
