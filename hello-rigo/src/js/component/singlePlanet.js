import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export class SinglePlanet extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="container">
					<div className="row">
						<Context.Consumer>
							{({ store }) => {
								return (
									<React.Fragment>
										<div className="col-6">
											<img
												src="https://starwarsblog.starwars.com/wp-content/uploads/2015/03/Mapping2.jpeg"
												className="card-img-top"
											/>
										</div>
										<div className="col-6">
											<h1>{store.planets[this.props.match.params.theindex].name}</h1>
											<p>
												Lorem Ipsum is simply dummy text of the printing and typesetting
												industry. Lorem Ipsum has been the industrys standard dummy text ever
												since the 1500s, when an unknown printer took a galley of type and
												scrambled it to make a type specimen book. It has survived not only five
												centuries, but also the leap into electronic typesetting, remaining
												essentially unchanged.1500s, when an unknown printer took a galley of
												type and scrambled it to make a type specimen book. It has survived not
												only five centuries, but also the leap into electronic typesetting,
												remaining essentially unchanged.1500s, when an unknown printer took a
												galley of type and scrambled it to make a type specimen book. It has
												survived not only five centuries, but also the leap into electronic
												typesetting, remaining essentially unchanged.
											</p>
										</div>
										<div className="row mt-5 container-fluid">
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Name</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.theindex].name}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Climate</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.theindex].climate}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Diameter</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.theindex].diameter}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Population</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.theindex].population}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Gravity</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.theindex].gravity}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Terrain</strong>
												</div>
												<div className="text-danger">
													{store.planets[this.props.match.params.theindex].terrain}
												</div>
											</div>
										</div>
									</React.Fragment>
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
SinglePlanet.propTypes = {
	match: PropTypes.object
};
