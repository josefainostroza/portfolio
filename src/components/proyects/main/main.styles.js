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
`;

const StyledContainer = styled.div`
	color: white;
	display: flex;
	padding: 50px;
	position: relative;
`;

const StyledContainerProyects = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	gap: 25px;
`;

const StyledContainerPar = styled.div`
	color: white;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	padding: 0 250px;
`;

const StyledTitleProyects = styled.h3`
	font-size: 30px;
	font-weight: 800;
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
		/* background-color: #fdb927; */
	}
`;

const StyledLine = styled.div`
	background-color: white;
	width: 1px;
	height: 172px;
	margin-right: 38px;
`;

const StyledTitle = styled.h1`
	font-weight: 900;
	font-size: 50px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 120px 120px 50px 120px;
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
