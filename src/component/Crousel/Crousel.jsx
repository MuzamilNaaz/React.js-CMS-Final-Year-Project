import React  from 'react'
import classes from "./Crousel.module.css"
import img1 from "../../Images/Crousel/img1.jpg"
import Intro from "./Intro";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings ={
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    overflow:false,
    className: "slider",
}


const Crousel = () => {
    return (
       <Slider  {...settings}>
       <div>
        <Intro  heading={'Welcome to Environmental Protection Organization'}/>
         <img className={classes.imgs} src={img1} alt="epo=intro" />
       </div>
       <div>
       <Intro/>
         <img className={classes.imgs} src={img1} alt="epo=intro" />
       </div>
       <div>
       <Intro/>
         <img className={classes.imgs} src={img1} alt="epo=intro" />
       </div>
       </Slider>
    )
}

export default Crousel;
