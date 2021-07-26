import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Cartas = props => {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img className="imagen" variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title />
				<Card.Text />
				<Button variant="primary">Go somewhere</Button>
				<Button variant="warning">
					<i className="far fa-heart" />
				</Button>
			</Card.Body>
		</Card>
	);
};

Card.propTypes = {};
