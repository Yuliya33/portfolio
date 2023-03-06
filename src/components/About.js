import classes from './About.module.scss';
import Container from './Container';

function About(){
    return(
        <div className={classes.about}>
          <Container>
          <div className={classes.title}>
            <h1>Qui je suis?</h1> 
          </div>    
          <div className={classes.content}>
            <div className={classes.imgProfile}>
                <img src="/images/photo.jpg" alt=" photo Yuliya Polyakova"/>
            </div>
            <div className={classes.text}>
                <h4>Une développeuse front-end motivée par la curiosité avec des capacités de conception</h4>
                <p>Je suis une personne dynamique et motivée, qui apprécie le travail en équipe et est capable de s'adapter rapidement à de nouvelles situations et très passionnée par la belle partie de Front End. 
                   Je suis très heureux lorsque je crée, apprends, explore et réfléchis à la façon d'améliorer les choses.</p> 
                   <p>J'ai obtenu ma <span>AEC</span> dans domaine <span>Conception et programmation de sites Web.</span> Pendant ma formation, j'ai essayé beaucoup de technologies différentes. 
                   Je suis prêt à apprendre des nouvelles technologies.</p>
                   <p>Mon portfolio est un aperçu de mes compétences, de mes projets et de mes réalisations. 
                   Il reflète mon parcours professionnel en tant que développeur front-end et mon amour pour la création de sites Web.
                 </p>
            </div>
          </div>
          </Container>
        </div>
    );
}

export default About;