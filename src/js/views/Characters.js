import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="main">
			<div className="d-flex">
				<div>
					<img
						className="charimage"
						src="https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785"
					/>
				</div>
				<div>
					<h1 className="display-4">{store.people[params.theid].name}</h1>
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
					<div className="col-6 col-sm-2">Birth Year</div>
					<div className="col-6 col-sm-2">Gender</div>
					<div className="col-6 col-sm-2">Height</div>
					<div className="col-6 col-sm-2">Skin Color</div>
					<div className="col-6 col-sm-2">Eye Color</div>
				</div>
				<div className="row">
					<div className="col-6 col-sm-2">{store.people[params.theid].name}</div>
					<div className="col-6 col-sm-2">{store.people[params.theid].birth_year}</div>
					<div className="col-6 col-sm-2">{store.people[params.theid].gender}</div>
					<div className="col-6 col-sm-2">{store.people[params.theid].height}</div>
					<div className="col-6 col-sm-2">{store.people[params.theid].skin_color || "NA"}</div>
					<div className="col-6 col-sm-2">{store.people[params.theid].eye_color}</div>
				</div>
			</div>
		</div>
	);
};
