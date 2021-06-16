import './App.css';
import Mainpage from './pages/mainpage/Mainpage';
import Favorites from './pages/favorites/Favorites';
import ErrorModal from './components/errormodal/Errormodal';
import Navigation from './components/navigation/Navigation';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
	const currentTheme = useSelector((state) => state.theme);
	return (
		<Router>
			<ErrorModal />
			<div className={`app app_${currentTheme}`}>
				<Navigation />
				<div className='app_body'>
					<Switch>
						<Route exact path='/'>
							<Mainpage />
						</Route>
						<Route exact path='/favorites'>
							<Favorites />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
export default App;
