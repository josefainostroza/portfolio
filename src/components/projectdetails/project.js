import styled from 'styled-components';

const StyledContainerProjects = styled.div`
	background-color: rgb(14, 14, 14);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 35px;
	padding: 50px 0px;

	/* padding: 50px 120px; */
`;

const StyledTitle = styled.h1`
	width: 900px;
	color: aliceblue;
	font-size: 30px;
	font-weight: 800;
`;
const StyledSubTitle = styled.p`
	width: 900px;
	color: aliceblue;
	font-size: 16px;
	font-weight: 300;
`;

const StyledImgProjects = styled.img`
	width: 100%;
	object-fit: cover;
	object-position: 50% 50%;
	max-width: 100%;
	/* border-radius: 25px; */
`;

const StyledMiniDescription = styled.p`
	color: aliceblue;
	font-weight: 200;
`;
const StyledContainerMiniDescription = styled.div`
	width: 946px;
	display: flex;
	justify-content: center;
	align-items: start;
	font-size: 12px;
	font-weight: 400;
	margin-top: -20px;
	margin-bottom: 40px;
	gap: 70px;
	line-height: 20px;
`;

const StyledInfoProyect = styled.p`
	width: 900px;
	font-size: 16px;
	color: aliceblue;
	font-weight: 300;
`;
const StyledtitleInfoProyect = styled.p`
	color: aliceblue;
	font-weight: 700;
`;
const StyledVideoProjects = styled.img`
	width: 946px;
	object-fit: cover;
	object-position: 50% 50%;
	max-width: 100%;
`;
const StyledContainerProgram = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 40px;
`;
const StyledImgProgram = styled.img`
	width: 70px;
`;
export {
	StyledContainerProjects,
	StyledTitle,
	StyledSubTitle,
	StyledImgProjects,
	StyledMiniDescription,
	StyledContainerMiniDescription,
	StyledInfoProyect,
	StyledtitleInfoProyect,
	StyledVideoProjects,
	StyledContainerProgram,
	StyledImgProgram
};
