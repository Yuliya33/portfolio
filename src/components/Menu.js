import classes from './Menu.module.scss';

function Menu(){
    return (
        <div>
            <ul className={classes.menu}>
                <li><a href="#section">Accueil</a></li>
                <li><a href="#section">À propos</a></li>
                <li><a href="#section">Mes compétences</a></li>
                <li><a href="#section">Mes projets</a></li>
            </ul>
        </div>

    );
}

export default Menu;