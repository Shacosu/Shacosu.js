import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import styled from "styled-components";

const NavBar = styled(Navbar)`
	height: 80px;
	-webkit-box-shadow: 0px 10px 7px -8px rgba(0,0,0,0.75); 
	box-shadow: 0px 10px 7px -8px rgba(0,0,0,0.75);
`;

const LinkStyled = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	width: 110px;
	
	&:hover {
		color: gold;
	}
`;

export default function Header() {
	return (
		<NavBar bg="dark" variant="dark" expand="lg" sticky="top">
			<Container className="d-flex flex-row">
				<LinkStyled
					to="intro-scroll"
					smooth={true}
					duration={1000}
					offset={-300}
				>
					<h4 className="text-white border-bottom">Shacosu.js</h4>
				</LinkStyled>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<LinkStyled
							className="text-white "
							to="about-scroll"
							smooth={true}
							duration={1000}
							offset={-300}
						>
							<i className="fas fa-info-circle"></i> Sobre Mi
						</LinkStyled>
						<LinkStyled
							className="text-white"
							to="contact-scroll"
							smooth={true}
							offset={-300}
							duration={1000}
						>
							<i className="fas fa-envelope "></i> Contacto
						</LinkStyled>
						<LinkStyled
							className="text-white"
							to="proyect-scroll"
							smooth={true}
							offset={-300}
							duration={1000}
						>
							<i className="fas fa-bookmark "></i> Proyectos
						</LinkStyled>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</NavBar>
	);
}
