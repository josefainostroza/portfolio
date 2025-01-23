import styled from 'styled-components';

const StyledHeaderContainer = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	height: 60px;
	width: 100%;
	background-color: transparent;
	z-index: 100;
`;

const StyledNameJosefa = styled.h2`
	font-size: 30px;
	color: #fab413;
	font-family: 'inter';
	font-weight: 400;
`;

const StyledNameInostroza = styled.h2`
	font-size: 30px;
	color: #fab413;
	margin-top: 2px;
	font-family: 'inter';
	font-weight: 600;
`;

const StyledContainerName = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: end;
	align-items: end;
	padding: 50px 77px;
`;
// const StyledLogo = styled.div`
// 	font-size: 1.5rem;
// 	color: #000;
// 	font-weight: bold;
// `;
export {
	StyledHeaderContainer,
	StyledNameJosefa,
	StyledNameInostroza,
	StyledContainerName
};
