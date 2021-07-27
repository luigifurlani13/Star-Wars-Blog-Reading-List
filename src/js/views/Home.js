import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cartas } from "../component/Cards";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import PropTypes from "prop-types";

export const Home = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1>Characters</h1>
			<div className="scroll">
				{store.people.map((person, i) => {
					return <Cartas className="cards" key={i} source={"people"} name={person.name} i={i} />;
				})}
			</div>
			<h1>Vehicles</h1>
			<div className="scroll">
				{store.vehicles.map((vehicles, i) => {
					return <Cartas key={i} source={"people"} name={vehicles.name} i={i} />;
				})}
			</div>
			<h1>StarShips</h1>
			<div className="scroll">
				{store.starships.map((starships, i) => {
					return <Cartas className="cards" key={i} source={"people"} name={starships.name} i={i} />;
				})}
			</div>
		</div>
	);
};
