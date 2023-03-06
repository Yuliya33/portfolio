import classes from './Header.module.scss';

function Header(){
    return (
        <div className={classes.header}>
          <div className={classes.title}>
            <h1>Bonjour,</h1> 
            <h1>Mon nom est Yuliya Polyakova.</h1>
            <h1>Je suis web développeuse.</h1>
            <h1>Je suis ravi de partager avec vous mon portfolio!</h1>
          </div>          
        </div>

    );
}

export default Header;