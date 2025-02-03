import styled from 'styled-components';

const HeroContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #71178c;
	color: #fff;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: auto;
	}
`;

const StyledTitle = styled.h2`
	font-weight: 900;
	font-size: 30px;

	@media (max-width: 768px) {
		font-size: 24px;
	}
`;

const StyledText = styled.p`
	font-weight: 400;
	line-height: 26px;
	font-size: 16px;

	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const StyledContexText = styled.div`
	font-family: 'inter';
	color: white;
	/* width: 497px; */
	padding: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const StyledHeroContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	max-width: 500px;
	@media (max-width: 480px) {
	}
`;

const CircleBackground = styled.div`
	position: relative;
	width: 400px;
	height: 400px;
	background-color: transparent;
	border-radius: 50%;
	z-index: 1;
	margin-left: 50%;
	margin-top: 9%;

	&::before {
		content: '';
		position: absolute;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		border: 20px solid #fab413;
		filter: blur(20px);
		z-index: -2;
		margin-left: 50%;
		margin-top: 9%;

		@media (max-width: 480px) {
			width: 200px;
			height: 200px;
		}

		@media (max-width: 768px) {
			width: 200px;
			height: 200px;
		}
	}

	&::after {
		content: '';
		position: absolute;
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background-color: #fab413; /* El borde nítido, sin blur */
		z-index: -1;
		margin-left: 50%;
		margin-top: 9%;

		@media (max-width: 480px) {
			width: 200px;
			height: 200px;
		}

		@media (max-width: 768px) {
			width: 200px;
			height: 200px;
		}
	}
`;

const StyledImgPersonal = styled.img`
	position: absolute;
	top: -53px;
	left: 0;
	width: 400px;
	z-index: 1;
	/* 
	@media (max-width: 480px) {
		width: 200px;
		margin-left: 0%;
		margin-top: 0%;
	}

	@media (max-width: 768px) {
		width: 200px;
	} */
`;
const StyledContainerImgCircle = styled.div`
	/* display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center; */
	min-width: 400px;
	height: 400px;
	border-radius: 50%;
	background-color: #fab413;
	position: relative;

	@media (max-width: 768px) {
		margin-bottom: 120px;
	}
`;

const StyledContainerLinks = styled.div`
	display: flex;
	justify-content: center;
	gap: 35px;
	font-weight: 700;

	@media (max-width: 768px) {
		gap: 15px;
	}
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

	@media (max-width: 768px) {
		width: 100%;
		padding: 10px;
	}
`;
const Styledimgicons = styled.img`
	width: 30px;
	height: 30px;
`;
const Styledcontainericons = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
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
	StyledButton,
	StyledContainerImgCircle,
	Styledimgicons,
	Styledcontainericons,
	StyledHeroContainer
};
