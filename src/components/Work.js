import classes from './Work.module.scss';
import Container from './Container';
import Projet from './Projet';

function Work(){

    const DATA = [
        {
            id: 1,
            title: "Projet de Stage",
            description: "Mon stage consistait à créer un site web pour une compagnie logistique, la plus grande partie du travail a été consacré à côté du front-end alors je me suis concentrée sur le désign, j’ai développé une palette de couleurs de base, choisie des polices de caractère(fontes), construit un plan quels les langages programmations je vais utiliser pour réaliser le site web, j'ai choisi",
            skills: "PHP, Javascript, HTML, CSS.",
            imgSrc: "/images/works/stage.jpg",
            imgAlt: "image stage",
            linkSiteWeb: "http://monportfolio.ca/yuliya-polyakova.ca/tlc-1/"
        },
        {
            id: 2,
            title: "Projet JavaScript",
            description: "Le projet est exécuté en utilisant",
            skills: "PHP(Back-end) et Javascript(OOP)",
            imgSrc: "/images/works/Javascript.jpg",
            imgAlt: "image Javascript projet",
            linkSiteWeb: "http://monportfolio.ca/yuliya-polyakova.ca/projJavascript/",
            linkGitHub: "https://github.com/Yuliya33/projJavascript"
        },
        {
            id:3,
            title: "Projet HTML/CSS",
            description: "Le projet est exécuté en utilisant du propre",
            skills: "html, css, javascript(carousel).",
            imgSrc: "/images/works/HTML.jpg",
            imgAlt: "image HTML/CSS projet",
            linkSiteWeb: "http://monportfolio.ca/yuliya-polyakova.ca/projHTML/index.html",
            linkGitHub: "https://github.com/Yuliya33/projHTML"
        },
        {
            id: 4,
            title: "Projet PHP",
            description: "Lors de la création du projet, ces technologies ont été utilisées comme propre",
            skills: "PHP avec le modele MVC, propre CSS, mySQL.",
            imgSrc: "/images/works/PHP.jpg",
            imgAlt: "image PHP projet",
            linkSiteWeb: "http://monportfolio.ca/yuliya-polyakova.ca/proj1/",
            linkGitHub: "https://github.com/Yuliya33/proj1"
        },
    ];

    return(
        <div className={classes.work}>
            <Container>
               <h2>MES TRAVAUX</h2>
               {DATA.map((projet) => {
                    return <Projet 
                                id={projet.id} 
                                key={projet.id} 
                                title={projet.title} 
                                description={projet.description} 
                                skills={projet.skills} 
                                imgSrc={projet.imgSrc} 
                                imgAlt={projet.imgAlt} 
                                linkSiteWeb={projet.linkSiteWeb}
                                linkGitHub={projet.linkGitHub}
                            />
               })} 
            </Container>
      </div>
    );
}

export default Work;