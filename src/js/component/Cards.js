import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Cartas = props => {
	return (
		<Card>
			<Card.Img className="imagen" variant="top" src="holder.js/200px400" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					<tr>Gender: {props.gender}</tr>
					<tr>Hair-Color: {props.hair_color}</tr>
					<tr>Eye-Color: {props.eye_color}</tr>
				</Card.Text>
				<Link to={"/characters/" + props.i}>
					<Button variant="primary">Learn More</Button>
				</Link>
				<Button variant="warning">
					<i className="far fa-heart" />
				</Button>
			</Card.Body>
		</Card>
	);
};
export const Cartas2 = props => {
	return (
		<Card>
			<Card.Img className="imagen" variant="top" src="holder.js/200px400" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					<tr>Model: {props.model}</tr>
					<tr>Length: {props.length}</tr>
					<tr>Cost: {props.cost_in_credits}</tr>
				</Card.Text>
				<Link to={"/characters/" + props.i}>
					<Button variant="primary">Learn More</Button>
				</Link>
				<Button variant="warning">
					<i className="far fa-heart" />
				</Button>
			</Card.Body>
		</Card>
	);
};
export const Cartas3 = props => {
	return (
		<Card>
			<Card.Img className="imagen" variant="top" src="holder.js/200px400" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					<tr>Model: {props.model}</tr>
					<tr>Length: {props.length}</tr>
					<tr>Cost: {props.cost_in_credits}</tr>
				</Card.Text>
				<Link to={"/characters/" + props.i}>
					<Button variant="primary">Learn More</Button>
				</Link>
				<Button variant="warning">
					<i className="far fa-heart" />
				</Button>
			</Card.Body>
		</Card>
	);
};

Cartas.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string
};
Cartas2.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string
};
Cartas3.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string
};
