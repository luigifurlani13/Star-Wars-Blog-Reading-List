import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<Container fluid className="main">
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
			<Container>
				<Row>
					<Col>Name</Col>
					<Col>Birth Year</Col>
					<Col>Gender</Col>
					<Col>Height</Col>
					<Col>Skin Color</Col>
					<Col>Eye Color</Col>
				</Row>
				<Row>
					<Col>{store.people[params.theid].name}</Col>
					<Col>{store.people[params.theid].birth_year}</Col>
					<Col>{store.people[params.theid].gender}</Col>
					<Col>{store.people[params.theid].height}</Col>
					<Col>{store.people[params.theid].skin_color || "NA"}</Col>
					<Col>{store.people[params.theid].eye_color}</Col>
				</Row>
			</Container>
		</Container>
	);
};
