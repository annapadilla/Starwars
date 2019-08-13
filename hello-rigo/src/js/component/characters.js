import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Characters = () => {
	return (
		<div className="container">
			<Context.Consumer>
				{({ store, actions }) => {
					return store.characters.map((item, index) => {
						return (
							<div key={index} className="card mb-3">
								<div className="card col-sm">
									<img
										className="card-img-top"
										src="https://starwarsblog.starwars.com/wp-content/uploads/2015/10/tfa_poster_wide_header-1536x864-959818851016.jpg"
										alt="Card image cap"
									/>
									<div className="card-header font-weight-bold bg-white">{item.name}</div>
									<div className="card-body">{"Gender: " + item.gender}</div>
									<div className="card-body">{"Hair Color: " + item.hair_color}</div>
									<div className="card-body">{"Eye Color: " + item.eye_color}</div>
									<div className="card-footer bg-white">
										<Link to={"/single-characters/" + index + "/" + item.name}>
											<button className="btn btn-success">Details</button>
										</Link>
										<button className="far fa-heart float-right text-warning" />
									</div>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		</div>
		/*	<Context.Consumer>
			{({ store, actions }) => {
				return store.characters.map((item, index) => {
					return (
						<div key={index} className="card mb-3">
							<div className="card col-sm">
								<img
									className="card-img-top"
									src="https://starwarsblog.starwars.com/wp-content/uploads/2015/10/tfa_poster_wide_header-1536x864-959818851016.jpg"
									alt="Card image cap"
								/>
								<div className="card-header font-weight-bold bg-white">{item.name}</div>
								<div className="card-body">{"Gender: " + item.gender}</div>
								<div className="card-body">{"Hair Color: " + item.hair_color}</div>
								<div className="card-body">{"Eye Color: " + item.eye_color}</div>
								<div className="card-footer bg-white">
									<Link to={"/single-characters/" + index + "/" + item.name}>
										<button className="btn btn-success">Details</button>
									</Link>
									<button className="far fa-heart float-right text-warning" />
								</div>
							</div>
						</div>
					);
				});
			}}
		</Context.Consumer> */
	);
};
export default Characters;
