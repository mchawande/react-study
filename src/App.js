import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/firstComponent';

function App() {
	return (
		<div className="App">

			<header className="App-header">
				<nav className="navbar navbar-light bg-light shadow-sm border-bottom">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							<img src={logo} alt="Logo" width="30" height="24" />
							React Study
						</a>
					</div>
				</nav>
			</header>

			<main>
				<div class="container">
					<FirstComponent title="Guest" />
					<FirstComponent title="User"/>
				</div>
			</main>

	    </div>
	);
}

export default App;
