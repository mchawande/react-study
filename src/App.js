import logo from './assets/images/logo.svg';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

import Home from './pages/home';
import Workspace from './pages/workspace';
import TodoApp from './pages/todo-app';
import TicTacToe from './pages/tic-tac-toe';

function App() {
	return (
		<Router>
			<div>

				<header>
					<nav className="navbar navbar-light navbar-expand-lg shadow-sm border-bottom">
						<div className="container-fluid">
							<a className="navbar-brand" href="#">
								<img src={logo} alt="Logo" width="30" height="24" />
								React Study
							</a>

							<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>

							<div className="collapse navbar-collapse" id="navbarNav">
								<ul className="navbar-nav ms-auto">
									<li className="nav-item">
										<Link to="/" className="nav-link" aria-current="page">Home</Link>
									</li>
									<li className="nav-item">
										<Link to="/workspace" className="nav-link" aria-current="workspace">Workspace</Link>
									</li>
									<li className="nav-item">
										<Link to="/todo-app" className="nav-link" aria-current="todo-app">Todo App</Link>
									</li>
									<li className="nav-item">
										<Link to="/tic-tac-toe" className="nav-link" aria-current="tic-tac-toe">Todo App Page</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</header>

				<main>
					<div className="container p-2">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/workspace">
								<Workspace />
							</Route>
							<Route path="/todo-app">
								<TodoApp />
							</Route>
							<Route path="/tic-tac-toe">
								<TicTacToe />
							</Route>
						</Switch>
					</div>
				</main>

			</div>
	    </Router>

	);
}

export default App;
