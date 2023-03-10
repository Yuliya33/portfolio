import classes from './Header.module.scss';

function Header(){
    return (
      <section>
        <div className={classes.header} id="section-home">
          <div className={classes.title}>
            <h1>Bonjour,</h1> 
            <h1>Mon nom est Yuliya Polyakova.</h1>
            <h1>Je suis web développeuse.</h1>
            <h1>Je suis ravi de partager avec vous mon portfolio!</h1>
          </div>          
        </div>
      </section>

    );
}

export default Header;