import React from "react";
import arrayProjects from "../../components/ArrayProjects";
import style from "./Projects.module.css"
import NavBar from "../../components/Navbar/Navbar";


const Projects = () =>{
    return (
        <div>
            <NavBar/>
            <h1>Proyectos</h1>
            <a href="/">Home</a>
            <div className={style.contenedor}>
                {arrayProjects.map((arrayProject, index) => (
                    <div key={index}>
                        <h2>{arrayProject.title}</h2>
                        <img className={style.image} src={arrayProject.image} alt= {arrayProject.title}/>
                        <p>{arrayProject.resume}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;