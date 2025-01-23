import styled from 'styled-components';

const HeroContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: #71178c;
	color: #fff;
`;

const StyledTitle = styled.h2`
	font-weight: 900;
	margin-bottom: 25px;
	font-size: 30px;
`;

const StyledText = styled.p`
	font-weight: 400;
	line-height: 26px;
	font-size: 16px;
`;
const StyledContexText = styled.div`
	position: absolute;
	font-family: 'inter';
	color: white;
	width: 497px;
	height: 370px;
	padding: 25px;
	left: 10%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
`;

const CircleBackground = styled.div`
	position: relative;
	width: 400px;
	height: 400px;
	background-color: transparent;
	border-radius: 50%;
	z-index: 1;
	top: 5%;

	&::before {
		content: '';
		position: absolute;
		left: 70%;
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
		left: 70%;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background-color: #fab413; /* El borde nítido, sin blur */
		z-index: -1; /* Este borde va encima del borde borroso */
	}
`;
const StyledImgPersonal = styled.img`
	position: absolute;
	width: 400px;
	top: 113.5%;
	left: 56%;
	z-index: 1;
`;
const StyledContainerLinks = styled.div`
	display: flex;
	justify-content: center;
	gap: 35px;
	font-weight: 700;
`;

const StyledLinks = styled.a`
	transition: color 0.3s ease;

	&:hover {
		color: #fdb927;
	}
`;

const StyledButton = styled.button`
	width: 318px;
	height: 46px;
	background-color: transparent;
	border: 1px solid #fab413;
	border-radius: 23px;
	color: white;
	padding: 10px 90px;
	transition: color 0.3s ease;

	&:hover {
		background-color: #fdb927;
		color: black;
	}
`;

export {
	HeroContainer,
	StyledTitle,
	StyledText,
	StyledContexText,
	CircleBackground,
	StyledImgPersonal,
	StyledContainerLinks,
	StyledLinks,
	StyledButton
};
