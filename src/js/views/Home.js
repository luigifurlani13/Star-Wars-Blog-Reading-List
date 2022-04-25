import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Cartas } from "../component/Cards";
import { Cartas2 } from "../component/Cards";
import { Cartas3 } from "../component/Cards";
import { useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Home = props => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h1 className="home">Characters</h1>
			<div className="scroll">
				{store.people.map((person, i) => {
					return (
						<Cartas
							key={i}
							name={person.name}
							hair_color={person.hair_color}
							eye_color={person.eye_color}
							gender={person.gender}
							i={i}
						/>
					);
				})}
			</div>
			<h1 className="home">Vehicles</h1>
			<div className="scroll">
				{store.vehicles.map((vehicles, i) => {
					return (
						<Cartas2
							key={i}
							name={vehicles.name}
							i={i}
							model={vehicles.model}
							length={vehicles.length}
							cost_in_credits={vehicles.cost_in_credits}
						/>
					);
				})}
			</div>
			<h1 className="home">StarShips</h1>
			<div className="scroll">
				{store.starships.map((starships, i) => {
					return (
						<Cartas3
							key={i}
							name={starships.name}
							i={i}
							model={starships.model}
							length={starships.length}
							cost_in_credits={starships.cost_in_credits}
						/>
					);
				})}
			</div>
		</div>
	);
};
