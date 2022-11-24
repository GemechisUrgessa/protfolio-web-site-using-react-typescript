import Button from '@mui/material/Button';
import back_1 from '../../assets/img/networking.jpg';
import back_2 from '../../assets/img/coding.png';
import back_3 from '../../assets/img/server.jpg';

import { Link, animateScroll as scroll } from "react-scroll";
import { Fade } from 'react-awesome-reveal';
import { useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
  const [photoId, setPhotoId] = useState(1);
  const [background, setBackground] = useState(back_1);

  useEffect(() => {
    const interval = setInterval(() => {
      change();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [photoId,background]);

  const changeSlider = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
    const target = event.target as HTMLButtonElement;
    const className = target.getAttribute('class');
    if (className!.includes('slider__one')){
      returnPhotoURL(1);
    }
    if (className!.includes('slider__two')) {

      returnPhotoURL(2);

    }
    if (className!.includes('slider__three')) {

      returnPhotoURL(3);
    }

  }
  const change = () => {
    if (photoId === 3) {
      setPhotoId(1);
      return;
    }

    setPhotoId((prev) => prev + 1);
    returnPhotoURL(photoId);
  };

  const returnPhotoURL = (value: null | number) => {
    const elem = document.querySelectorAll(".slider-active");
    if (elem){
      elem.forEach((ele) => {
        // console.log(ele);
        ele.classList.remove("slider-active");
      });}
      if( value === 1) {
        const elem = document.querySelector(".slider__one");
        elem!.classList.toggle("slider-active");
      }
      if( value ===2) {
        const elem = document.querySelector(".slider__two");
        elem!.classList.toggle("slider-active");
      }
      if( value ===3) {
        const elem = document.querySelector(".slider__three");
        elem!.classList.toggle("slider-active");
      }
    if( value !== null) {
      switch (value) {
      case 1:
        setBackground(back_1)
        return ;
      case 2:
        setBackground(back_2)
        return ;
      case 3:
        setBackground(back_3)
        return ;
      default:
        return null;
    }
    }

    else{
      return null;
    }
  };
  
  return (
    

    <section style={{ backgroundImage: `url(${background})`, backgroundRepeat: `no-repeat`,backgroundSize: `cover`, backgroundPosition: `center`,}} className="home page" id="home">
      <Fade cascade duration={3000} delay={300}><div className="home__intro">
        <h1 className="home__title">Sona Computer Engineering</h1>
        <p className="home__description">IT Support Provider and Network Engineer</p>
        <div className="home__divider"></div>
        <Button style={{marginTop: 10}} variant="contained" className="home__button"><Link className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-48}
                duration={200}
              >
                About Us
              </Link> < ArrowForwardIcon className="home__arrow" /> </Button>
      </div>
      <div className="home-slider-selector">
        <Button variant='contained' className="slider slider__one" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {changeSlider(e)} }></Button>
        <Button variant='contained' className="slider slider__two" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {changeSlider(e)}} ></Button>
        <Button variant='contained' className="slider slider__three" onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {changeSlider(e)}} ></Button>
      </div>
      </Fade>
    </section>
  )
}