import { BrowserRouter, Route} from 'react-router-dom';
// import { Routes } from 'react-router';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';


function App(props) {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<Navbar />
				<div class='app-wrapper-content'>
					{/* <Router component={Dialogs}/> */}
					{/* <Router component={Profile}/> */}
					<Route path='/dialogs' component={Dialogs} />
					<Route path='/profile' component={Profile} />
				</div>
			</div>
		</BrowserRouter>
	)
}

export default App;
