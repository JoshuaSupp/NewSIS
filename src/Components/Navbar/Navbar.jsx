import { useEffect, useState } from "react";
import { getTopNav } from "../data/navbar";
import './Navbar.css'


const Navbar = () => {
    const [navItems, setNavItems] = useState([]);
    const [collapse, setCollapse] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("toggler__icon");
  
    useEffect(() => {
      setNavItems(getTopNav());
    }, []);
  
    const onToggle = () => {
      collapse === "nav__menu"
        ? setCollapse("nav__menu nav__collapse")
        : setCollapse("nav__menu");
  
      toggleIcon === "toggler__icon"
        ? setToggleIcon("toggler__icon toggle")
        : setToggleIcon("toggler__icon");
    };
  return (
    <div className="nav__wrapper">
    <div className="container2">
      <nav className="nav">
        <a href="#" className="nav__brand">
        <img src="https://meulabs.org/wp-content/uploads/2022/11/Logo.svg" alt="meu labs picture" style={{height: "80px",marginTop:"-1%",marginLeft:"75%"}} href="./Home"/>          
        </a>
        <ul className={collapse}>
          {navItems.map((item) => (
            <li key={item.id} className="nav__item">
              <a href={item.href} className="nav__link">
                {item.label}
              </a>
              
            </li>
          ))}
        </ul>
        <div className={toggleIcon} onClick={onToggle}>
          <div className="line__1"></div>
          <div className="line__2"></div>
          <div className="line__3"></div>
        </div>
      </nav>
    </div>
  </div>
  )
}

export default Navbar