import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos Router, Routes y Route
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Home from './components/home/Home';
import Main from './components/proyects/main/Main';
// import SidebarMenu from './components/siderbarMenu/SidebarMenu';
import Vision from './components/vision/Vision';
import { GlobalStyles } from './styles/GlobalStyles';
import ProjectDetails from './components/projectdetails/ProjectDetails';

const App = () => {
	return (
		<Router>
			<GlobalStyles />
			{/* <SidebarMenu /> */}
			<Header />
			<Routes>
				{/* Ruta principal con Home, Hero, Vision y Main */}
				<Route
					path='/'
					element={
						<>
							<Home />
							<Hero />
							<Vision />
							<Main />
						</>
					}
				/>

				{/* Ruta de detalles del proyecto con categoría y slug */}
				<Route path='/projects/:slug' element={<ProjectDetails />} />
			</Routes>
		</Router>
	);
};

export default App;
