import { Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Home from './components/home/Home';
import Main from './components/proyects/main/Main';
// import Scroll from './components/scrollcolorchanger/Scroll';
import SidebarMenu from './components/siderbarMenu/SidebarMenu';
import Vision from './components/vision/Vision';
import { GlobalStyles } from './styles/GlobalStyles';
import Valdivia from './components/proyects/interaccion/valdivia/Valdivia';

const App = () => {
	return (
		<>
			<GlobalStyles />
			{/* <Scroll /> */}
			<SidebarMenu />
			<Header />
			<Home />
			<Hero />
			<Vision />
			<Main />
			<Valdivia />
		</>
	);
};

export default App;
