import classes from './Bouton.module.scss';
import ArrowRightIcon from './icons/arrow-right-icon';

export default function Bouton(props){
    return(
          <div className={classes.bouton}>
           <a href={props.link}>{props.children} <span className={classes.icon}><ArrowRightIcon/></span></a>
          </div>    
    );
}
