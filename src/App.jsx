import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Home from './components/home/Home';
// import Scroll from './components/scrollcolorchanger/Scroll';
import SidebarMenu from './components/siderbarMenu/SidebarMenu';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			{/* <Scroll /> */}
			<SidebarMenu />
			<Home />
			<Header />
			<Hero />
		</>
	);
};

export default App;
