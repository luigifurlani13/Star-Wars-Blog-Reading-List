import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Cartas = props => {
	const source = props.source;
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img className="imagen" variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					<tr>Gender: {props.gender}</tr>
					<tr>Hair-Color: {props.hair}</tr>
					<tr>Eye-Color: {props.eyes}</tr>
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
	hair: PropTypes.string,
	eyes: PropTypes.string,
	i: PropTypes.string,
	source: PropTypes.string
};

// {source === people && (
// 	Gender: {props.gender}
// Hair-Color: {props.hair}
// Eye-Color: {props.eyess}
