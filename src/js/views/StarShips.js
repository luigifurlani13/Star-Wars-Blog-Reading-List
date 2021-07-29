import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const StarShips = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.starships[params.theid].name}</h1>

			<hr className="my-4" />
		</div>
	);
};

StarShips.propTypes = {
	match: PropTypes.object
};
