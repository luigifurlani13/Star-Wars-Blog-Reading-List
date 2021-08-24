import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Context } from "../store/appContext";
import getState from "../store/flux";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png" />
			</Link>
			<Dropdown>
				<Dropdown.Toggle className="toggle" variant="primary" id="dropdown-basic" size="lg">
					Dropdown Button
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{store.favorites.length > 0 ? (
						store.favorites.map((favorite, i) => (
							<Dropdown.Item href="#/action-1" key={i}>
								{favorite}
								<Button variant="danger" onClick={() => actions.favoritesInfo(favorite, i)}>
									<i className="fas fa-trash-alt" />
								</Button>
							</Dropdown.Item>
						))
					) : (
						<DropdownItem>There are no favorites</DropdownItem>
					)}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
