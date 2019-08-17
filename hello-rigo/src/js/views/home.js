import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Characters from "../component/characters";
import Planets from "../component/planets";

export class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="scrolling-wrapper">
					<Characters />
				</div>
				<div className="scrolling-wrapper">
					<Planets />
				</div>
			</React.Fragment>
		);
	}
}
