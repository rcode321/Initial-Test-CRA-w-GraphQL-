import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const Logo = () => {
	return (
		<Navbar className="mb-1 p-2">
			<Nav.Link as={Link} to="/" className="p-0">
				<Navbar.Brand>SpaceX</Navbar.Brand>
			</Nav.Link>
		</Navbar>
	);
};

export default Logo;
