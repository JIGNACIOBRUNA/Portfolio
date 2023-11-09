// import Maintenance from "../images/Enmantencion.png";
import Dogs from "../images/Dogs.jpeg";
import Food from "../images/Food.jpeg";
import BonAppetit from "../images/bon appetit.jpeg";

const arrayProjects = [
    // { 
    //     title: "Rick and Morty",
    //     resume: "Es mi primera aplicacion creada en el proceso de mi formacion",
    //     image: Maintenance
    // },
    {
        title: "PI Dogs",
        resume: "Esta aplicación fue desarrollada como parte de mi evaluación individual en mi formacion como desarrollador, permite a los usuarios crear nuevas razas de perros, realizar búsquedas por nombre y aplicar diversos filtros.",
        technologies: "JavaScript, Redux, React, Node.js, Express, Sequelize, PostgreSQL, HTML y CSS.",
        image: Dogs,
        githubUrl: "https://github.com/JIGNACIOBRUNA/PI-DOGS "
    },
    {
        title: "Food",
        resume: "Esta aplicación se creó con el propósito de consolidar y aplicar los conocimientos adquiridos a través de la aplicación Dogs",
        technologies: "JavaScript, Redux, React, Node.js, Express, Sequelize, PostgreSQL, HTML y CSS.",
        image: Food,
        githubUrl: "https://github.com/JIGNACIOBRUNA/PI-FOOD "
    },
    {
        title: "Bon Appetit",
        resume: "Una completa solución para la administracion y venta gastronómica que abarca desde e-commerce hasta paneles de control con una amplia gama de funciones, junto con diversas vistas diseñadas para satisfacer las necesidades específicas de los diferentes roles de usuarios",
        technologies: "HTML, CSS, JavaScript, React, Styled-Components, Redux, Firebase, Cloudinary, Axios, Express, Nodejs, Sequelize y PostgreSQL",
        image: BonAppetit,
        githubUrl: "https://github.com/JIGNACIOBRUNA/BonAppetit",
        deploy: "https://bonappetite.vercel.app/customer/"

    }
]

export default arrayProjects;