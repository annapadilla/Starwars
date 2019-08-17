import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const Planets = () => {
	return (
		<div className="scroller">
			<div className="card-columns d-flex d-flex flex-row flex-nowrap">
				<Context.Consumer>
					{({ store, actions }) => {
						return store.planets.map((item, index) => {
							return (
								<div key={index} className="card mb-3">
									<img
										className="card-img-top"
										src="https://starwarsblog.starwars.com/wp-content/uploads/2015/10/tfa_poster_wide_header-1536x864-959818851016.jpg"
										alt="Card image cap"
									/>
									<div className="card-header font-weight-bold bg-white">{item.name}</div>
									<div className="card-body">{"Population: " + item.population}</div>
									<div className="card-body">{"Terrain: " + item.terrain}</div>
									<div className="card-footer bg-white">
										<Link to={"/single-planet/" + index + "/" + item.population}>
											<button className="btn btn-success">Details</button>
										</Link>
										<button
											onClick={() => actions.markAsFavorite(item.name)}
											className="far fa-heart float-right text-warning"
										/>
									</div>
								</div>
							);
						});
					}}
				</Context.Consumer>
			</div>
		</div>
	);
};
export default Planets;
