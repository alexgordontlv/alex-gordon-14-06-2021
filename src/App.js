import './App.css';
import Mainpage from './pages/mainpage/Mainpage';
import Navigation from './components/navigation/Navigation';
function App() {
	return (
		<div className='app'>
			<Navigation />
			<div className='app_body'>
				<Mainpage />
			</div>
		</div>
	);
}
export default App;
