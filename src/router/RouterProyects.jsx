import { Route, Routes } from 'react-router-dom';
import Header from '../components/header/Header';
import ProjectDetails from '../components/projectdetails/ProjectDetails';
import HomePage from '../pages/homePage/HomePage';

const RouterProyects = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/projects/:slug' element={<ProjectDetails />} />
				{/* <Route path='/project/:id' element={<Valdivia />} /> */}
			</Routes>
		</>
	);
};

export default RouterProyects;
