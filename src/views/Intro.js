import React from "react";
import { Row, Container, ProgressBar } from "react-bootstrap";

export default function Intro() {
	return (
		<Container className="mt-4 w-100" id="intro-scroll">
			<Row >
				<div className="text-center mb-4">
					<img
						style={{ width: "250px" }}
						src="https://media.discordapp.net/attachments/857123267835068426/857517451645288448/circle-cropped.png?width=320&height=320"
						alt="logo"
					/>
					<h1 className="my-4 border-bottom border-2 border-white w-50 mx-auto text-white">
						Pablo Espinoza
					</h1>
					<p className="text-white lead">Software Development</p>
				</div>
				<div className="text-white bg-dark p-4 shadow w-50">
					<h1 className="text-center text-info border-bottom border-light w-50 mx-auto">
						Habilidades
					</h1>
					<p className="text-center fw-bold mt-4">
						Una pequeña introduccion de las tecnologias que manejo y cuanto se
						sobre ellas, es un estimativo segun los proyectos que he ido creando
						a lo largo de mi carrera como desarrollador. Poseo un nivel de
						ingles intermedio, puedo leerlo, escribirlo y comunicarme. Llevo
						varios meses estudiando sobre react y en el camino he aprendido
						sobre; Redux, Hooks, States, entre otras. En javascript tengo un nivel
						mas avanzado ya que en todo mi camino he hecho mi enfoque en el. Con
						Node.Js he podido crear API's, server's con EXPRESS y asimismo
						MongoDB, que en el he creado varios clousters en la nube para guardar
						los datos de mis proyectos y por ultimo podria decir que tambien
						tengo experiencia con la base de datos MYSQL.
					</p>
					<a className="btn btn-warning mt-3 text-dark" href="/">
						- Saber mas -
					</a>
				</div>

				<div className=" p-3 rounded shadow w-50 d-flex flex-column justify-content-around ">
					<h4 className="text-white text-center">Grafico de habilidades</h4>
					<label className="text-white">Ingles</label>
					<ProgressBar variant="success" now={40} />
					<label className="text-white">React JS</label>
					<ProgressBar variant="info" now={70} />
					<label className="text-white">Javascript</label>
					<ProgressBar variant="warning" now={50} />
					<label className="text-white">Node JS</label>
					<ProgressBar variant="danger" now={62} />
					<label className="text-white">MongoDB</label>
					<ProgressBar variant="muted" now={40} />
				</div>
			</Row>
		</Container>
	);
}
