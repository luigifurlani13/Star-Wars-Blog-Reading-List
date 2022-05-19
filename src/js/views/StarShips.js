import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { Context } from "../store/appContext";

export const StarShips = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<Container fluid className="main">
			<div className="d-flex">
				<div>
					<img
						className="charimage"
						src="https://lumiere-a.akamaihd.net/v1/images/quasar-fire-class-cruiser-carrier-169_26592dcb.jpeg?region=0%2C0%2C1560%2C878&width=1536"
					/>
				</div>
				<div>
					<h1 className="display-4">{store.starships[params.theid].name}</h1>
					<h4 className="chartext">
						Sed ut perspiciatis unde onis iste natus error sit voluptatem accusantium doloremque laudantium,
						totam rem aperiam, aeque ipsa quae ab illoinventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsma voluptatem quia voluptas sit aspernatur aut odit aut
						fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi{" "}
					</h4>
				</div>
			</div>
			<hr className="line" />
			<Container>
				<Row>
					<Col>Name</Col>
					<Col>Model</Col>
					<Col>Length</Col>
					<Col>Cost in Credits</Col>
					<Col>Vehicle Class</Col>
					<Col>Crew</Col>
				</Row>
				<Row>
					<Col>{store.starships[params.theid].name}</Col>
					<Col>{store.starships[params.theid].model}</Col>
					<Col>{store.starships[params.theid].length}</Col>
					<Col>{store.starships[params.theid].cost_in_credits}</Col>
					<Col>{store.starships[params.theid].vehicle_class || "NA"}</Col>
					<Col>{store.starships[params.theid].crew}</Col>
				</Row>
			</Container>
		</Container>
	);
};
