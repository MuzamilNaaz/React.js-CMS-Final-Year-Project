import classes from "./Button.module.css"
import {useNavigate} from 'react-router-dom'



const Button = ({ text, link }) => {
    const navigate = useNavigate()
    const handelClick = ()=>{
      navigate(`${link}`)
  } 
    return (
      <div onClick={handelClick} className={classes.btnAct}>
        <div className={classes.icon}>
             {text}
        </div>
      </div>
    );
  };
  export default Button