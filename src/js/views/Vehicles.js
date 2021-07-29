import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.vehicles[params.theid].name}</h1>

			<hr className="my-4" />
		</div>
	);
};

Vehicles.propTypes = {
	match: PropTypes.object
};
