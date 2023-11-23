import React from "react";
import NavBar from "../../components/Navbar/Navbar";
import style from "./About.module.css";
import image from "../../images/yo.jpeg";
import javascript from "../../images/js.png";
import html from "../../images/html.png";
import css from "../../images/css.png";
import github from "../../images/github2.png";
import piton from "../../images/piton.png";
import imgreact from "../../images/react.png";
import nodejs from "../../images/nodejs.png";
import postgresql from "../../images/postgresql.png";
import sequelize from "../../images/sequelize.png";
import reduxx from "../../images/redux.png";
import expresss from "../../images/express.png"
import typescript from "../../images/typescript.png";
import mongodbb from "../../images/mongodb.png";
import reactnative from "../../images/reactnative.png";
import aws from "../../images/aws.png";

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
                        <li><img src={javascript} alt={javascript} /></li>
                        <li><img src={imgreact} alt={imgreact}/></li>
                        <li><img src={reduxx} alt={reduxx}/></li>
                        <li><img src={nodejs} alt={nodejs}/></li>
                        <li>< img src={sequelize} alt={sequelize}/></li>
                        <li><img src={expresss} alt={expresss}/></li>
                        <li><img src={postgresql} alt={postgresql}/></li>
                        <li><img src={html} alt={html}/></li>
                        <li><img src={css} alt={css}/></li>
                        <li><img src={github} alt={github}/></li>
                    </ul>
                </div>
            </div>
            <div>
                <h1 className={style.subtitle}>Tecnologias en aprendizaje </h1>
                <div className={style.column}>
                    <ul>
                        <li><img src={piton} alt={piton}/></li>
                        <li>< img src={typescript} alt={typescript}/></li>
                        <li>< img src={reactnative} alt={reactnative} className={style.reactN}/></li>
                        <li><img src={mongodbb} alt={mongodbb}/></li>
                        <li><img src={aws} alt={aws} /></li>
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