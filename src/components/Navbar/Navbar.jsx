import React from "react";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import linkedin from "../../images/linkedin.png";
import github from "../../images/github.png";
import curriculum from "../../images/curriculum.png"; 


const openCV = () => {
    window.open("https://raw.githubusercontent.com/JIGNACIOBRUNA/Portfolio/main/src/components/assets/cvdeveloper.pdf", '_blank');
  };

const NavBar = () => {

    return (
        <nav className={style.navbar}>
            <div className={style.button}>
                <Link to="/">Home</Link>
                <Link to="/projects">Project</Link>
                <Link to="/about">About</Link>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/jose-ignacio-bruna-b6a437213/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="Linkedin" className={style.link} />
                </a>
                <a href="https://github.com/JIGNACIOBRUNA" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Github" className={style.link} />
                </a>
                <button className={style.custom} onClick={openCV}>
                    <img src={curriculum} alt="Curriculum" className={style.link} /> 
                </button>
            </div>
        </nav>
    )
};

export default NavBar; 