import styled from 'styled-components';

const StyledHeaderContainer = styled.header`
	position: fixed;
	width: 100%;
	background-color: transparent;
	z-index: 100;
`;

const StyledNameJosefa = styled.h2`
	font-size: 30px;
	color: #fab413;
	font-weight: 400;

	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

const StyledNameInostroza = styled.h2`
	font-size: 30px;
	color: #fab413;
	margin-top: 2px;
	font-weight: 600;

	@media (max-width: 768px) {
		font-size: 20px;
	}
`;

const StyledContainerName = styled.div`
	position: fixed;
	top: 60px;
	right: 60px;
	text-align: right;

	@media (max-width: 768px) {
	}
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
