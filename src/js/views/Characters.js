import React, { useState, useEffect, useContext } from "react";
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
						src="https://www.gannett-cdn.com/presto/2020/02/27/USAT/ec0879e6-eec9-4d41-bf4c-b7e1d03e57ca-yoda-luke.jpeg"
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
					<div className="col-6 col-sm-3">Name</div>
					<div className="col-6 col-sm-3">Gender</div>

					<div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
					<div className="col-6 col-sm-3">.col-6 .col-sm-3</div>
				</div>
			</div>
		</div>
	);
};

Characters.propTypes = {
	match: PropTypes.object
};
