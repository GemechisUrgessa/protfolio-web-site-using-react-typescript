import { Link, animateScroll as scroll } from "react-scroll";
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  return (
        <>
    <footer className="footer" >
      <div className="container-footer">
        <p>Lets get in touch</p>
        <div>
        <Button color="inherit"  className="social-icons"><a className ="social-link"href="https://www.linkedin.com/in/leul-bayesa-504784232"> <LinkedInIcon /></a></Button>
         <Button color="inherit" className="social-icons"><a className ="social-link" href="http://www.twitter.com/Rare_prince21"> <TwitterIcon /> </a></Button>
        <Button color="inherit" className="social-icons"><a className ="social-link" href="https://facebook.com/gemechisurgessa"><FacebookIcon /> </a></Button>
        <Button color="inherit" className="social-icons"><a className ="social-link" href="https://leulprince21@gmail.com"><EmailIcon /> </a></Button>
        </div>
        <p>Thank you for visiting</p>
      </div>
      <div className="footer-link">
        {["Home", "About", "Services", "Contact"].map(page => (
          <Button key={page} className="btn-footer" color="inherit"><Link className="nav-link-bottom"
                activeClass="active"
                to={page.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-48}
                duration={200}
              >
                {page}
              </Link> </Button>
        ))}
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>&copy; 2022; All rights reserved.</p>
        <p>DESIGN- Rare_Prince</p>
      </div>
     </footer>
     </>
  )
}