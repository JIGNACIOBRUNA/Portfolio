import RYM from "../images/RYM.jpeg";
import Dogs from "../images/Dogs.jpeg";
import Food from "../images/Food.jpeg";
import BonAppetit from "../images/bon appetit.jpeg";

const arrayProjects = [
    { 
        title: "Rick and Morty",
        resume: "Es mi primera aplicacion creada en el proceso de mi formacion como desarrollador, tiene la funcionalidad de agregar cartas segun su Id, ver el detalle de estas, agregar a favoritos y aplicar filtros por nombre y especie",
        technologies: "JavaScript, HTML, CSS, React, NodeJs",
        image: RYM,
        githubUrl: "https://github.com/JIGNACIOBRUNA/rick-and-morty",
        deploy: "https://astonishing-yeot-1ff336.netlify.app/"
    },
    {
        title: "PI Dogs",
        resume: "Esta aplicación fue desarrollada como parte de mi evaluación individual en mi formacion como desarrollador, permite a los usuarios crear nuevas razas de perros, realizar búsquedas por nombre y aplicar diversos filtros.",
        technologies: "JavaScript, Redux, React, Node.js, Express, Sequelize, PostgreSQL, HTML y CSS.",
        image: Dogs,
        githubUrl: "https://github.com/JIGNACIOBRUNA/PI-DOGS ",
        deploy: "https://kaleidoscopic-zuccutto-cbd236.netlify.app/"
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