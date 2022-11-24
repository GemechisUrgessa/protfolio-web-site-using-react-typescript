import { Fade } from 'react-awesome-reveal';
import abt_1 from '../../assets/img/back_ab.gif';
export default function About() {

  return (
    <Fade triggerOnce cascade duration={3000} delay={300}>
    <section className="about page" id="about">
      <div className="container-head">
      <h1 >{`About Us`.toUpperCase()}</h1>
      <div className="underline-about"></div>
      </div>
      <div className="about-container">
        <Fade cascade duration={3000} delay={300}>
          <img src={abt_1} className="about-img"  />
      </Fade>
      <Fade cascade duration={3000} delay={300}>
      <div className="about-info">
        <h2>HOW, WHY and WHAT??</h2>
        <p className="about-description">Sona company is a company which is dedicated to provide quality services to its customers. Our company has been operational for some years and is still doing good services.</p>
        </div></Fade></div>
    </section></Fade>
  )
}

