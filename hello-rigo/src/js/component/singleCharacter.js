import React from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
export class SingleCharacter extends React.Component {
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
												src="https://timedotcom.files.wordpress.com/2017/05/star-wars_1024.jpg"
												className="card-img-top"
											/>
										</div>
										<div className="col-6">
											<h1>{store.characters[this.props.match.params.theindex].name}</h1>
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
													{store.characters[this.props.match.params.theindex].name}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Birth Year</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].birth_year}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Gender</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].gender}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Height</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].height}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Skin Color</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].skin_color}
												</div>
											</div>
											<div className="col-2">
												<div className="text-danger mb-2">
													<strong>Eye Color</strong>
												</div>
												<div className="text-danger">
													{store.characters[this.props.match.params.theindex].eye_color}
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
SingleCharacter.propTypes = {
	match: PropTypes.object
};
