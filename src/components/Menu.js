import classes from './Menu.module.scss';

function Menu(){

    function scrollDownHandler(evt){
        let hash = evt.target.hash.replace("#", "");
        const el = document.getElementById(hash);
        evt.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div>
            <ul className={classes.menu}>
                <li><a href="#section-home" onClick={scrollDownHandler}>Accueil</a></li>
                <li><a href="#section-about" onClick={scrollDownHandler}>À propos</a></li>
                <li><a href="#section-skills" onClick={scrollDownHandler}>Mes compétences</a></li>
                <li><a href="#section-work" onClick={scrollDownHandler}>Mes projets</a></li>
            </ul>
        </div>

    );
}

export default Menu;