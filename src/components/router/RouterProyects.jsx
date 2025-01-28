import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Main from './components/main';
import Valdivia from '../proyects/interaccion/valdivia/Valdivia';

const RouterProyects = () => {
	return (
		<BrowserRouter>
			<header>
				<Link to='/' style={inlineStyles}></Link>
			</header>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/project/:id' element={<Valdivia />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RouterProyects;
