import React, { useEffect, useState } from 'react'
import MobileView from './mobileView'
import DesktopView from './desktopView'
const Header = () : JSX.Element=>  {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const setResponsiveness = () => {
      window.innerWidth < 800
        ? setMobileView(true)
        : setMobileView(false);
    }

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  return <>{mobileView ? <MobileView />: <DesktopView/>}</>;
}

export default Header;