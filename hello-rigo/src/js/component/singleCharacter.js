import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export class SingleCharacter extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="container">
								<div>{store.characters[this.props.match.params.theindex].name}</div>
								<div>{store.characters[this.props.match.params.theindex].gender}</div>
							</div>
						);
					}}
				</Context.Consumer>
			</React.Fragment>
		);
	}
}
SingleCharacter.propTypes = {
	match: PropTypes.object
};
