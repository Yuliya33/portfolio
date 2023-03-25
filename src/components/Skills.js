import classes from './Skills.module.scss';
import Container from './Container';

function Skills(){

    return(
        <div className={classes.skills} id="section-skills" >
            <Container>
                <h2 data-aos="fade-up">COMPÉTENCES ET OUTILS</h2>
                <h3 data-aos="fade-up" data-aos-delay="100">Ma boîte à outils et les choses que je peux faire</h3>
                <p data-aos="fade-up" data-aos-delay="150">Les compétences, outils et technologies que j'utilise pour donner vie à vos produits :</p>
                <div className={classes.skillsIcons} data-aos="fade-up" data-aos-delay="200">
                        <div>
                            <i className="devicon-html5-plain"></i>
                            <p>HTML5</p>
                        </div>
                        <div>
                            <i className="devicon-css3-plain"></i>
                            <p>CSS3</p>
                        </div>
                        <div>
                            <i className="devicon-javascript-plain"></i>
                            <p>JavaScript</p>
                        </div>
                        <div>
                            <i className="devicon-jquery-plain"></i>
                            <p>jQuery</p>
                        </div>
                        <div>
                            <i className="devicon-react-original"></i>
                            <p>React</p>
                        </div>
                        <div>
                            <i className="devicon-github-original"></i>
                            <p>Github</p>
                        </div>
                        <div>
                            <i className="devicon-sass-original"></i>
                            <p>SASS</p>
                        </div>
                        <div>
                            <i className="devicon-visualstudio-plain"></i>
                            <p>VS Code</p>
                        </div>
                        <div>
                            <i className="devicon-php-plain"></i>
                            <p>PHP</p>
                        </div>
                        <div>
                            <i className="devicon-slack-plain"></i>
                            <p>Slack</p>
                        </div>
                        <div>
                            <i className="devicon-wordpress-plain"></i>
                            <p>WordPress</p>
                        </div>
                        <div>
                            <i className="devicon-figma-plain"></i>
                            <p>Figma</p>
                        </div>
                        <div>
                            <i className="devicon-photoshop-plain"></i>
                            <p>Photoshop</p>
                        </div>
                        <div>
                            <img src="/images/icon-tablet-phone-and-browser.svg" alt="icon of tablet, phone and browser window."/>
                            <p>Responsive Websites</p>
                        </div>
                </div>
                <h4 data-aos="fade-up" data-aos-delay="150">Travaille actuellement sur :</h4>
                <p data-aos="fade-up" data-aos-delay="200">Améliorer mes compétences et ma compréhension de JavaScript et de React.</p>
            </Container>
      </div>
    );
}

export default Skills;