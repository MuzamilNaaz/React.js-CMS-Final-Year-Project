

import React from 'react';
import Image from '../../Images/HeaderLogo/logo.jpg'
import classes from './Header.module.css';
import {Link} from 'react-router-dom'
import Button from "../Button/Button"
const Header = () => {
    return (

        <div className={classes.header}>
            <div className={classes.logo}>
                <img src={Image} alt="img" />
            </div>

            <ul className={classes.menu}>
                <li><Link  to="/">Home</Link ></li>
                <li><Link  to="/About">About</Link ></li>
                <li><Link  to="/Gallery">Gallery</Link ></li>
                <li><Link  to="#">Blog</Link ></li>
                <li><Link  to="#">Contact</Link ></li>
                <Button text={'Donate'} link={'/donate'}/>
            </ul>
               

 </div>
    )
}
export default Header