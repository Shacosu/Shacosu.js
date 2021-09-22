import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function Footer() {
	return (
		<Container className="mt-4" fluid>
			<Row className="bg-dark ">
				<Col md={6} className="text-center my-auto text-white">
					<label className="fw-bolder">
						<i className="fas fa-clock"></i> Horarios Disponibles
					</label>
					<p className="m-0">- Lunes a Viernes - 13:00 a 19:00</p>
					<p>
						@Shacosu - {" "}
						<a
							href="https://github.com/Shacosu"
							target="_blank"
							rel="noreferrer"
						>
							<i className="fab fa-github text-white"></i>
						</a>
					</p>
				</Col>
				<Col md={6}>
					<Row className="w-50 p-2">
						<label className="text-center">
							<i className="fas fa-envelope"></i> Redes Sociales
						</label>
						<a
							href="https://www.instagram.com/4notf0und4/"
							target="_blank"
							rel="noreferrer"
							className="my-1 btn btn-light fw-bolder"
						>
							<i className="fab fa-instagram-square"></i> Instagram
						</a>
						<a
							href="https://www.facebook.com/shaco.fox/"
							target="_blank"
							rel="noreferrer"
							className="my-1 btn btn-light fw-bolder"
						>
							<i className="fab fa-facebook-square"></i> Facebook
						</a>
					</Row>
				</Col>
			</Row>
		</Container>
	);
}
