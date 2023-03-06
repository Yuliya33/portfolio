import Bouton from './Bouton';
import classes from './Projet.module.scss';

function Projet(props){

    function isOdd(number){
        if (number % 2 === 0){
            return true;
        }else{
            return false;
        }
    }

    return(
        <div className={classes.projet}>  
               <div className={classes.projetContent}>
                    <h3>{props.title}</h3>
                    <p>{ props.description } <span>{props.skills}</span></p>
                    <Bouton link={props.linkSiteWeb}>Voir le Site Web</Bouton>
                    { props.linkGitHub ?  <Bouton link={props.linkGitHub}>Voir GitHub</Bouton> : ""}
                </div>   
                <div className={classes.projetImage + " " + (isOdd(props.id) ? "" : classes.projetImageLeft)}>
                    <img src={props.imgSrc} alt={props.imgAlt}/> 
                </div>   
      </div>
    );
}

export default Projet;