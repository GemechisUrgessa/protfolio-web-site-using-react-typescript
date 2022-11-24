import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Link, animateScroll as scroll } from "react-scroll";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import Box from '@mui/material/Box';
const MobileView = ()  => {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  }
  const handleDrawerClose = () => {
    setOpen(false);
  }
 return (
      <Toolbar className="navbar__mob">
        
        <Typography
            variant="h6"
            noWrap
            component="div"
          ><Link className="logo"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={200}
              >
                {`Sona`.toUpperCase()}
              </Link>
            
          </Typography><IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
          }}
        >
          <MenuIcon onClick={handleDrawerOpen} />
        </IconButton>
        <Drawer 
          {...{
            anchor: "top",
            open: open,
            onClose: handleDrawerClose,
          }}
        >
          <Box className="drawer"
      sx={{ width: 'auto'}}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <List> */}
        {['Home', 'About', 'Services', 'Contact'].map((text, index) => (
          // <List.Item key={text} disablePadding>
            <ListItemButton>
              <div className="nav-item nav__mob"><Link className="nav-link"
                activeClass="active"
                to= {text.toLowerCase() as string}
                spy={true}
                smooth={true}
                offset={-48}
                duration={200}
              >
                {text.toUpperCase()}
              </Link>
             </div> 
             </ListItemButton>
        ))} 
    
      </Box>
          {/* "getDrawerChoices()" */}
         
        </Drawer>
{/* <div>"femmeCubatorLogo"</div> */}
</Toolbar>
    );
}

export default MobileView;