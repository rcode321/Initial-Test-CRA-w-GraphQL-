import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

// style scss
import "./style.scss";

const MenuLinks = ({ rockets }) =>
	rockets.map((rocket) => (
		<div key={rocket.name}>
			<Nav.Link as={Link} to={`/rocket/${rocket.id}`} className="m-2">
				{rocket.name.toUpperCase()}
			</Nav.Link>
		</div>
	));

export default MenuLinks;
