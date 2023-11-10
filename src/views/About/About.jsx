import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import style from "./About.module.css";
import image from "../../images/yo.jpeg";

const About = () => {
    return (
        <div>
            <NavBar />
            <h1 className={style.title}>About</h1>
            <div className={style.container}>
                <div className={style.text}>
                    <p>Soy un apasionado desarrollador Full Stack con una sólida formación en desarrollo tanto en el lado del front-end como en el back-end. Mi experiencia en ambos campos me permite crear soluciones web integrales y versátiles. Aunque disfruto trabajando en todos los aspectos del desarrollo, mi verdadera pasión reside en el back-end.</p>
                    <p>Además de mi formación en desarrollo, tengo antecedentes como Ingeniero en mecánica automotriz y asesoramiento técnico automotriz de postventa. Esta combinación única de habilidades me brinda una perspectiva única en mi enfoque hacia la programación. Si bien estos campos pueden parecer distintos, encuentro un terreno común en la resolución de problemas, la atención a los detalles y la pasión por la eficiencia, cualidades que aplico tanto en el desarrollo de software como en el mundo de la automoción.</p>
                    <p>Cuando no estoy frente a la computadora me gusta ir a la playa, hacer deporte y compartir con mi familia y amigos.</p>
                    <p>En este momento, me encuentro en busqueda opotunidades laborales, perfeccionando mis proyectos existentes, explorando nuevas ideas y aprendiendo constantemente nuevas tecnologías. Mi objetivo es seguir creciendo como desarrollador y enfrentar nuevos desafíos en el emocionante mundo de la tecnología.  </p>
                    <p>Si te interesa trabajar conmigo no dudes en contactarme.</p>
                </div>
                <div >
                    <img className={style.image} src={image} alt={image} />
                </div>
            </div>
            <div>
                <h1 className={style.subtitle}>Lenguajes y Frameworks</h1>
                <div className={style.column}>
                    <ul>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>NodeJs</li>
                        <li>Sequelize</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className={style.subtitle}>Tecnologias en aprendizaje </h1>
                <div className={style.column}>
                    <ul>
                        <li>Phyton</li>
                        <li>TypeScript</li>
                        <li>React Native</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className={style.otrotitle}>Contacto</h1>
                <div className={style.contacto}>
                <p>Si te interesa que trabajemos juntos me puedes contactar en:</p>
                <a href="https://www.linkedin.com/in/jose-ignacio-bruna-b6a437213/" target="_blank" rel="noopener noreferrer" className={style.linkedin}>
                    <h3>Linkedin</h3>
                </a>
                <p className={style.contacto}>O en mi correo:</p>
                <h3 className={style.correo}>brunacordova95@gmail.com</h3>
                </div>
            </div>
        </div>
    )
}

export default About;