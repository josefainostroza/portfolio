import styled from 'styled-components';

const StyledVisionContainer = styled.section`
	height: 100vh;
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
`;

const StyledTitleVision = styled.h1`
	font-weight: 900;
	font-size: 96px;
`;

const StyledDescription = styled.p`
	font-weight: 400;
	font-size: 40px;
	width: 998px;
	height: 425px;
`;

export { StyledVisionContainer, StyledTitleVision, StyledDescription };
