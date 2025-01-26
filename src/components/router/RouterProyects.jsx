import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Valdivia from '../proyects/interaccion/valdivia/Valdivia';

const RouterProyects = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/project/:id' element={<Valdivia />} />
			</Routes>
		</Router>
	);
};

export default RouterProyects;
