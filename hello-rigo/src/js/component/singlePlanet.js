import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export class SinglePlanet extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<div>{store.planets[this.props.match.params.theindex].population}</div>
								<div>{store.planets[this.props.match.params.theindex].terrain}</div>
							</div>
						);
					}}
				</Context.Consumer>
			</React.Fragment>
		);
	}
}
SinglePlanet.propTypes = {
	match: PropTypes.object
};
