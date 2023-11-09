import React from "react";
import arrayProjects from "../../components/ArrayProjects";
import style from "./Projects.module.css"
import NavBar from "../../components/Navbar/Navbar";


const Projects = () =>{
    return (
        <div>
            <NavBar/>
            <h1 className={style.title}>Proyectos</h1>
            <div className={style.contenedor}>
                {arrayProjects.map((arrayProject, index) => (
                    <div key={index}>
                        <a href={arrayProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <img className={style.image} src={arrayProject.image} alt= {arrayProject.title}/>
                        </a>
                        <h2 className={style.text}>{arrayProject.title}</h2>
                        <p className={style.text}>{arrayProject.resume}</p>
                        <p className={style.technology}>{arrayProject.technologies}</p>
                        {arrayProject.deploy && (
                            <a href={arrayProject.deploy} target="_blank" rel="noopener noreferrer">
                                <h3 className={style.deploy}>Deploy</h3>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;