import React from "react";
import style from "./Home.module.css";
import NavBar from "../../components/Navbar/Navbar";

const Home = () =>{

   return(
        <div>
            <NavBar />
            <div className={style.container}>
                <div className={style.header}>
                    <h1>Ignacio Bruna</h1>
                    <p>Desarrollador Full Stack JR</p>
                </div>
                <div className={style.centerContent}>
                    <p>¡Hola! Soy Ignacio Bruna, un apasionado desarrollador Full Stack con experiencia en la creación de soluciones web. Mi enfoque principal se centra en el desarrollo del Back-end, y siempre estoy dispuesto a enfrentar nuevos desafíos y oportunidades de aprendizaje.</p>
                </div>
            </div>

        </div>
    )
};

export default Home;