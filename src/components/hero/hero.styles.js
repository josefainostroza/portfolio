import styled from 'styled-components';

export const HeroContainer = styled.section`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	/* background-color: #71178c; */
	color: #fff;
	position: relative;
`;

export const Title = styled.h1`
	font-size: 4rem;
	letter-spacing: 0.1em;
	z-index: 2;
`;

export const SubTitle = styled.h2`
	font-size: 1.5rem;
	margin-top: 10px;
	z-index: 2;
	color: #fdb927;
`;

export const CircleBackground = styled.div`
	position: absolute;
	width: 400px;
	height: 400px;
	background: radial-gradient(circle, #fdb927, transparent);
	border-radius: 50%;
	z-index: 1;
`;
