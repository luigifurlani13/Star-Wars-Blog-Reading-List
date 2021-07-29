import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="main d-flex">
			<img src="https://www.gannett-cdn.com/presto/2020/02/27/USAT/ec0879e6-eec9-4d41-bf4c-b7e1d03e57ca-yoda-luke.jpeg" />
			<h1 className="display-4">{store.people[params.theid].name}</h1>
			<div>This is the screen for characters</div>
		</div>
	);
};

Characters.propTypes = {
	match: PropTypes.object
};
