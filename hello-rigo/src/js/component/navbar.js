import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<a className="navbar-brand" href="#">
					<img
						src="https://cdn.freebiesupply.com/logos/large/2x/star-wars-logo-png-transparent.png"
						width="60"
						height="60"
						alt=""
					/>
				</a>
				<Link to="/">
					<span className="navbar-brand mb-0 h1" />
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
				</div>
			</nav>
		);
	}
}
