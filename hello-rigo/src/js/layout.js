import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Navbarcharacters } from "./component/navbarcharacters";
import { Navbarplanets } from "./component/navbarplanets";
import { SingleCharacter } from "./component/singleCharacter";
import { SinglePlanet } from "./component/singlePlanet";
import { Footer } from "./component/footer";
import Planets from "./component/planets";
import Characters from "./component/characters";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />

						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/single/:theid" component={SingleCharacter} />
							<Route path="/single-people/:theindex/:thename" component={SingleCharacter} />
							<Route path="/single-planet/:theindex/:thename" component={SinglePlanet} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
