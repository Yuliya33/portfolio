import classes from './Container.module.scss';

function Container(props){
    return(
      <div className={classes.container}>
        {props.children}
      </div>
    );
}

export default Container;