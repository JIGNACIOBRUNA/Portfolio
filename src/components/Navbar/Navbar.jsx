import React from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./NavBar.module.css";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";

const NavBar = () =>{

    const location = useLocation();
    return(
        <nav className={style.navbar}>
            <div className={style.button}>
                <Link to="/">Home</Link>
                <Link to="/projects">Project</Link>
                <Link to="/about">About me</Link>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/jose-ignacio-bruna-b6a437213/">
                    <img src={linkedin} alt="Linkedin" className={style.link}/>
                </a>
                <a href="https://github.com/JIGNACIOBRUNA">
                    <img src={github} alt="Github" className={style.link}/>
                </a>
            </div>
        </nav>
    )
};

export default NavBar; 