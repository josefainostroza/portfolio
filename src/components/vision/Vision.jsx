import {
	StyledVisionContainer,
	StyledTitleVision,
	StyledDescription
} from './vision.styles';

const Vision = () => {
	return (
		<StyledVisionContainer data-scroll-section>
			<StyledTitleVision>MISIÓN</StyledTitleVision>
			<StyledDescription>
				Mi objetivo es crear experiencias digitales enfocadas en la
				investigación, el diseño y soluciones funcionales que realmente conecten
				con las personas, mejoren el impacto de los productos y logren
				resultados significativos.
			</StyledDescription>
		</StyledVisionContainer>
	);
};

export default Vision;
