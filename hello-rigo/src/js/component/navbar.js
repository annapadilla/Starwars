import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			dropdownOpen: false
		};
	}

	toggle() {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

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
					<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
						<Context.Consumer>
							{({ store, actions }) => {
								return (
									<DropdownToggle caret>
										<span className="badge badge-danger mr-3">{store.favorite.length}</span>
										Favorites
									</DropdownToggle>
								);
							}}
						</Context.Consumer>
						<DropdownMenu>
							<Context.Consumer>
								{({ store, actions }) => {
									return store.favorite.map((name, index) => {
										return (
											<DropdownItem key={index}>
												{name}
												<span onClick={() => actions.removeFavorites(name)}>
													<i className="fas fa-times align-right" />
												</span>
											</DropdownItem>
										);
									});
								}}
							</Context.Consumer>
						</DropdownMenu>
					</Dropdown>
				</div>
			</nav>
		);
	}
}
