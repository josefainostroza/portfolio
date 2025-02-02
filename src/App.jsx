// import SidebarMenu from './components/siderbarMenu/SidebarMenu';
import { BrowserRouter } from 'react-router-dom';
import RouterProyects from './router/RouterProyects';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			{/* <SidebarMenu /> */}
			<RouterProyects />
		</BrowserRouter>
	);
};

export default App;
