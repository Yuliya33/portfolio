import { useRef, useState, useEffect } from 'react';
import classes from './Menu.module.scss';

function Menu(){
    
    const navMobile = useRef(null);  
    const [buttonClicked, setButtonClicked] = useState(false);

    function buttonClickHandler(){    
        setButtonClicked(!buttonClicked);  
    }
  
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1075);
    
    useEffect(() => {   
        window.addEventListener("resize", () => {      
            const mobile = window.innerWidth < 1075;      
            if (mobile !== isMobile) setIsMobile(mobile);    
        }, false);  
    }, [isMobile]);
    
    
    
    function scrollDownHandler(evt){
        let hash = evt.target.hash.replace("#", "");
        const el = document.getElementById(hash);
        evt.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <>
        <header>
            <nav ref={navMobile} className={`${buttonClicked ? classes.open : ''} ${isMobile ? classes.mobile : ''}`}>
                <ul className={classes.menu}>
                    <li><a href="#section-home" onClick={scrollDownHandler}>Accueil</a></li>
                    <li><a href="#section-about" onClick={scrollDownHandler}>À propos</a></li>
                    <li><a href="#section-skills" onClick={scrollDownHandler}>Mes compétences</a></li>
                    <li><a href="#section-work" onClick={scrollDownHandler}>Mes projets</a></li>
                </ul>
            </nav>
            <div className={`${classes.btnMobile} ${ buttonClicked ? classes.open : ''}`} onClick={buttonClickHandler}><i></i></div>
        </header>
        </>

    );
}

export default Menu;