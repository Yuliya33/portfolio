import classes from './SectionBottom.module.scss';

function SectionBottom(props){
    return (
        <div className={classes.sectionbottom + " " + classes[props.clipath]}>
           
        </div>

    );
}

export default SectionBottom;