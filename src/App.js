import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { Switch, Route } from "react-router-dom";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import { auth } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ currentUser: user });
			console.log(user);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div className="App">
				<Header currentUser = {this.state.currentUser}></Header>
				<Switch>
					<Route exact path="/" component={Homepage}></Route>
					<Route exact path="/shop" component={ShopPage}></Route>
					<Route
						exact
						path="/signin"
						component={SignInSignUp}
					></Route>
				</Switch>
			</div>
		);
	}
}

export default App;
