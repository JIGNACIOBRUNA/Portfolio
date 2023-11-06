import React from "react";
import arrayProjects from "../../components/ArrayProjects";
import style from "./Projects.module.css"


const Projects = () =>{
    return (
        <div>
            <h1>Proyectos</h1>
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