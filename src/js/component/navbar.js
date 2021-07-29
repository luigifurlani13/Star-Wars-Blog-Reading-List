import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png" />
			</Link>
			{/* <div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Check the Context in action</button>
				</Link>
			</div> */}
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
				</Dropdown.Toggle>

				<Dropdown.Menu>
					{store.favorites.map((favorite, i) => (
						<Dropdown.Item href="#/action-1" key={i}>
							{favorite}
						</Dropdown.Item>
					))}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
