import React, { useState, useEffect } from 'react';
import { Wrapper, Content } from './scroll.styles'; // Importamos los estilos actualizados

const Scroll = () => {
	const colores = ['#191919', '#71178c', '#fdb927', '#191919', '#DCDCDC'];
	const [colorFondo, setColorFondo] = useState(colores[0]);

	const actualizarColor = () => {
		const alturaPagina =
			document.documentElement.scrollHeight - window.innerHeight;
		const scrollPos = window.scrollY;

		const indiceColor = Math.floor((scrollPos / alturaPagina) * colores.length);
		setColorFondo(colores[indiceColor]);
	};

	useEffect(() => {
		window.addEventListener('scroll', actualizarColor);

		return () => {
			window.removeEventListener('scroll', actualizarColor);
		};
	}, []);

	return (
		<Wrapper colorFondo={colorFondo}>
			<Content>
				<h1>Desplázate hacia abajo para cambiar el color de fondo</h1>
			</Content>
		</Wrapper>
	);
};

export default Scroll;
