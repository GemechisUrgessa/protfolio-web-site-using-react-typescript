import { Link, animateScroll as scroll } from "react-scroll";
import Typography from '@mui/material/Typography';

export default function NavBar(){
  return (
  <header>
      <nav className="nav" id="navbar">
        <div className="nav-logo"><Typography
            variant="h6"
            noWrap
            component="div"
          ><Link className="logo"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-48}
                duration={200}
              >
                {`Sona`.toUpperCase()}
              </Link>
            
          </Typography></div>          
          <ul className="nav-items">
            <li className="nav-item"><Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-48}
                duration={200}
              >
                {`Home`.toUpperCase()}
              </Link></li>
            <li className="nav-item"><Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-48}
                duration={200}
              >
                {`About`.toUpperCase()}
              </Link></li>
            <li className="nav-item"><Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-48}
                duration={200}
              >
                {`Services`.toUpperCase()}
              </Link></li>
              <li className="nav-item"><Link className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={200}
              >
                {`Contact`.toUpperCase()}
              </Link></li>
          </ul>
      </nav>
    </header>)
}