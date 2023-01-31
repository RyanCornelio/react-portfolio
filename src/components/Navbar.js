import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import Logo from '../Images/logo5.png'
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const hide = () => setShowNavbar(false);
  const show = () => setShowNavbar(true);

  return (
    <nav className="navbar">
      <div className="logo"><a href="/" ><img src={Logo} alt="My name"></img></a></div>
        <div className="menu-icon" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>
          <MenuIcon />
        </div>
        <div className={`nav-elements ${showNavbar && 'active'}`}>

          <ul>
            <li><NavLink to="/" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Home</NavLink></li>
            <li><NavLink to="/About" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>About</NavLink></li>
            <li><NavLink to="/Skills" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Skills</NavLink></li>
            <li><NavLink to="/Work" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Work</NavLink></li>
            <li><NavLink to="/Contact" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Contact</NavLink></li>
            <li><NavLink to="/Gallery" onClick={handleShowNavbar} onBlur={hide} onFocus={show}>Gallery</NavLink></li>
          </ul>

        </div>
    </nav>
  )
}

export default Navbar