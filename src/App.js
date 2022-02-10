import React, { useState } from "react";
import { Provider } from "react-redux";
import {
	BrowserRouter as Router,
	Route,
	Switch
} from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar";

import axios from 'axios';

import store from "./store";

import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import ProductUpload from "./components/ProductUpload/ProductUpload";
import ProductPage from "./components/ProductPage/ProductPage";
import SignIn from "./components/SignIn/SignIn";
import Footer from "./components/Footer/Footer";

import authGuard from './components/HOCs/authGuard';

axios.defaults.withCredentials = true;

const App = () => {

	const [isNotFoundPage, setIsNotFoundPage] = useState(false);

	const handleNotFound = () => setIsNotFoundPage(true);

	return (
		// Provider: wraps the React application and makes the Redux state available to all container components in the application’s hierarchy
		<Provider store={store}>
			<Router>
				<Sidebar>
					<Switch>
						<Route exact path="/" component={authGuard(Dashboard)} />
						<Route path="/product/upload" component={authGuard(ProductUpload)} />
						<Route path="/product/:id" component={authGuard(ProductPage)} />
						<Route path="/iniciar-sesion" component={authGuard(SignIn)} />
						<Route path="*">
							<NotFound onNotFound={handleNotFound} />
						</Route>
					</Switch>
				</Sidebar>
				{!isNotFoundPage && <Footer />}
			</Router>
		</Provider>
	);
}

export default App;