import React from "react";
// Components
import Header from "./components/Header";
import Divider from "./components/Divider";
import Footer from "./components/Footer";

// Views
import Intro from "./views/Intro";
import About from "./views/About";
import Contact from "./views/Contact";
import Proyect from "./views/Proyect";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Intro />
				<Divider text="Sobre Mi"/>
				<About />
				<Divider text="Proyectos"/>
				<Proyect />
				<Divider text="Contacto"/>
				<Contact />
				<Footer />
			</main>
		</>
	);
}

export default App;
