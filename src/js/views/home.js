import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Cartas } from "./Cards";
import { useContext } from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<Container>
			<Row>
				{store.people.map((person, i) => {
					return (
						<Col xs key={i}>
							<Cartas />
						</Col>
					);
				})}
			</Row>
		</Container>
	);
};

// <div className="container">
// 	<h1>Characters</h1>
// 	<div className="mb-5 row">
// 		{store.people.map((person, i) => {
// 			return (
// 				<div className="col-3" key={i}>
// 					<Cartas />
// 				</div>
// 			);
// 		})}
// 	</div>
// </div>
