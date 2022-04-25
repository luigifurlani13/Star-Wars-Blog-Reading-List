import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Cartas = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col>
			<Card className="bg-dark text-white" style={{ width: "30rem" }}>
				<Card.Img
					className="imagen"
					variant="top"
					src="https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_86916bb6.jpeg?region=304%2C0%2C1778%2C1000&width=1536"
				/>
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
					<Button className="heart" variant="warning" onClick={() => actions.favoritesInfo(props.name)}>
						<i className="far fa-heart" />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};
export const Cartas2 = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col>
			<Card className="bg-dark text-white" style={{ width: "30rem" }}>
				<Card.Img
					className="imagen"
					variant="top"
					src="https://starwarsblog.starwars.com/wp-content/uploads/2020/12/hans-speeder-main-b_e7ca0176.jpg"
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>
						<tr>Model: {props.model}</tr>
						<tr>Length: {props.length}</tr>
						<tr>Cost: {props.cost_in_credits}</tr>
					</Card.Text>
					<Link to={"/vehicles/" + props.i}>
						<Button variant="primary">Learn More</Button>
					</Link>
					<Button className="heart" variant="warning">
						<i className="far fa-heart" onClick={() => actions.favoritesInfo(props.name)} />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};
export const Cartas3 = props => {
	const { store, actions } = useContext(Context);
	return (
		<Col>
			<Card className="bg-dark text-white" style={{ width: "30rem" }}>
				<Card.Img
					className="imagen"
					variant="top"
					src="https://lumiere-a.akamaihd.net/v1/images/millennium-falcon-main-tlj-a_7cf89d3a.jpeg?region=0%2C0%2C1280%2C720"
				/>
				<Card.Body>
					<Card.Title>{props.name}</Card.Title>
					<Card.Text>
						<tr>Model: {props.model}</tr>
						<tr>Length: {props.length}</tr>
						<tr>Cost: {props.cost_in_credits}</tr>
					</Card.Text>
					<Link to={"/starships/" + props.i}>
						<Button variant="primary">Learn More</Button>
					</Link>
					<Button className="heart" variant="warning">
						<i className="far fa-heart" onClick={() => actions.favoritesInfo(props.name)} />
					</Button>
				</Card.Body>
			</Card>
		</Col>
	);
};

Cartas.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string
};
Cartas2.propTypes = {
	name: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string
};
Cartas3.propTypes = {
	name: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string,
	model: PropTypes.string,
	length: PropTypes.string,
	cost_in_credits: PropTypes.string
};
