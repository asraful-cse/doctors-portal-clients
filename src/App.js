import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import Login from "./Pages/Shared/Login/Login/Login";
import Register from "./Pages/Shared/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Shared/Login/PrivateRoute/PrivateRoute";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
// import Footer from "./Pages/Shared/Footer/Footer";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route exact path="/home">
							<Home></Home>
						</Route>
						<PrivateRoute path="/appointments">
							<Appointment></Appointment>
						</PrivateRoute>
						<PrivateRoute path="/dashboard">
							<Dashboard></Dashboard>
						</PrivateRoute>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/register">
							<Register></Register>
						</Route>
						{/* <Route path="/footer">
							<Footer></Footer>
						</Route> */}
					</Switch>
				</Router>
			</AuthProvider>
		</div>
	);
}

export default App;
