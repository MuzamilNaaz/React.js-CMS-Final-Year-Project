import React from 'react'
import classes from "./Crousel.module.css"
const Intro = ({heading}) => {
    return (
        <div className={classes.intro}>
        
        <h1>{heading ? `${heading}` : "We Protect The Environment"}</h1>
        <p>A Non Profit Organization fighting for climate change </p>
        </div>
    )
}

export default Intro
