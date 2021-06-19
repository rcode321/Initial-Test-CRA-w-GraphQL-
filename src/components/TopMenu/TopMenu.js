import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import MenuLinks from "../MenuLinks/MenuLinks";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

const TopMenu = ({ rockets }) => {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Logo />
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<MenuLinks rockets={rockets} />
					</Nav>
					<Nav>
						<Nav.Link as={Link} to="/launches">
							Past Launhes
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default TopMenu;
