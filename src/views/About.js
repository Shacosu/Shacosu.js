import React from "react";
import { Col, Row, Container } from "react-bootstrap";

export default function AboutScreen() {
	return (
		<Container className="d-flex flex-column justify-content-center " id="about-scroll">
				<div className="bg-dark text-white p-3 mb-3 rounded">
					<h2 className="bg-light d-inline-block p-2 rounded text-dark ">🤵 ¿Sobre mí?</h2>
					<p className=" fw-bold">
						Soy un estudiante de ingeniería en informática, una de las cosas que
						más me llama la atención es que me gusta ser autodidacta y estar
						actualizado de las nuevas tecnologías en el mercado. Actualmente me
						encuentro cursando el tercer año de mi carrera y estudiando por mi
						cuenta actualmente me estoy centrando en aprender el stack MERN, es
						decir, MongoDB, Express, ReactJS, Node.js.
					</p>
				</div>
			<Row>


				<Col md={4}>
					<div className="bg-warning text-dark p-3 mb-3 rounded">
						<h2>📋 Mis metas</h2>
						<p className="fw-bolder">
							● Convertirme en software development. <br />
							● Trabajar en una empresa y/o startup. <br />
							● Enseñar mis conocimientos al resto de personas. <br />
							● Ser un gran aporte en donde quiera que trabaje. <br />● Aprender
							y seguir creciendo en este ambiente.
						</p>
					</div>
				</Col>
				<Col md={4}>
					<div className="bg-info text-dark  p-3 mb-3 rounded">
						<h2>✅ ¿Mis objetivos?</h2>
						<p className="fw-bolder">
							Aportar valor a la empresa de la que formo parte, dar ideas y
							crecer en un equipo fuerte. Creo que algo que puedo aportar es mi
							buena actitud frente a las situaciones y a su vez ser alguien
							creativo que siempre busca soluciones a los problemas, asimismo,
							me gusta ser responsable y respetuoso, siempre buscando tener el
							mejor ambiente laboral posible.
						</p>
					</div>
				</Col>
				<Col md={4}>
					<div className="bg-success text-dark p-3 mb-3 rounded">
						<h2>💭 Extra</h2>
						<p className="fw-bolder">
							Aún no tengo la experiencia suficiente en el área laboral y/o
							empresarial por lo mismo me esfuerzo cada día en ampliar mis
							conocimientos, espero que cuando llegue el momento de trabajar en
							alguna empresa poder crecer como persona junto con la empresa de
							forma en que las 2 partes ganemos valor.
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
