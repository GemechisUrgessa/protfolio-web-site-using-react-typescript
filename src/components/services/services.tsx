import { Fade } from 'react-awesome-reveal';
import net from '../../assets/img/net.gif';
import web_dev from '../../assets/img/web_dev.gif';
import consul from '../../assets/img/cons.gif';
import brand from '../../assets/img/branding.gif';
import maint from '../../assets/img/main.gif';
import web_des from '../../assets/img/web_des.gif';
import Card from './card';

export default function Services() {

  return (
    <Fade triggerOnce cascade duration={3000} delay={200}>
    <section className="services page" id="services">
      <div className="container-head">
      <h1 >{`Services We provide`.toUpperCase()}</h1>
      <div className="underline-service"></div>
      </div>
      <div className="cards">
        <div className="cards-start">
          <Card img={net} title="01.Networking" text="We provide Excellent computer networking service." />
          <Card img={consul} title="02.Consultancy" text="Our company has been providing consultancy services for mare than 4 years." />
        </div>
        <div className="cards-start">
          <Card img={web_dev} title="03.Web development" text="We have very talented and skilled web developers, whom had worked on lots of different projects." />
          <Card img={web_des} title="04.Web design" text="Our team of designers are quite exceptional in providing web design services" />
        </div>
        <div className="cards-start last">
          <Card img={maint} title="05.Maintenance" text="We have excellent maintenance services"/>
          <Card img={brand} title="06.Branding and Logo design" text="Our designer team is also excellent in branding and logo design" />
        </div>
      
      </div>
    </section></Fade>
  )
}