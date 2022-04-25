import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="main">
			<div className="d-flex">
				<div>
					<img
						className="charimage"
						src="https://lumiere-a.akamaihd.net/v1/images/juggernaut-transport-vehicle-main_09946f42.jpeg?region=329%2C0%2C951%2C536"
					/>
				</div>
				<div>
					<h1 className="display-4">{store.vehicles[params.theid].name}</h1>
					<h4 className="chartext">
						Sed ut perspiciatis unde onis iste natus error sit voluptatem accusantium doloremque laudantium,
						totam rem aperiam, aeque ipsa quae ab illoinventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsma voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi{" "}
					</h4>
				</div>
			</div>
			<hr className="line" />
			<div className="container">
				<div className="row">
					<div className="col-6 col-sm-2">Name</div>
					<div className="col-6 col-sm-2">Model</div>
					<div className="col-6 col-sm-2">Length</div>
					<div className="col-6 col-sm-2">Cost in Credits</div>
					<div className="col-6 col-sm-2">Vehicle Class</div>
					<div className="col-6 col-sm-2">Crew</div>
				</div>
				<div className="row">
					<div className="col-6 col-sm-2">{store.vehicles[params.theid].name}</div>
					<div className="col-6 col-sm-2">{store.vehicles[params.theid].model}</div>
					<div className="col-6 col-sm-2">{store.vehicles[params.theid].length}</div>
					<div className="col-6 col-sm-2">{store.vehicles[params.theid].cost_in_credits}</div>
					<div className="col-6 col-sm-2">{store.vehicles[params.theid].vehicle_class || "NA"}</div>
					<div className="col-6 col-sm-2">{store.vehicles[params.theid].crew}</div>
				</div>
			</div>
		</div>
	);
};
