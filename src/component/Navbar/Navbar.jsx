import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import MainLogo from './img/alecrim-logo.png';

import { MenuItems } from './MenuItems';

import Dropdown from './Dropdown';
import './styles.scss';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownSelected, setDropdownSelected] = useState([]);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    // console.log(MenuItems);
  }

  const onMouseEnter = (index) => {
    const selectedDropdown = MenuItems.filter(x => x.id === (index + 1))[0];
    setDropdownSelected([]);
    setDropdownSelected(selectedDropdown);
    if(window.innerWidth < 960){
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  }

  const onMouseLeave = () => {
    setDropdownSelected([]);
    if(window.innerWidth < 960){
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  }
  // console.log(dropdownSelected)
  return (
    <div className='navbar-container'>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img className='navbar-logo' src={MainLogo} alt="logo" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faXmark : faBars} />
        </div>

        <ul className={`nav-menu ${click && 'active'}`}>
          {
            MenuItems.map((item, index) => (
              <li key={index} className='nav-item' onMouseEnter={() => onMouseEnter(index)} >
                <Link to={item.path} className={item.cName} onClick={closeMobileMenu}>{item.title}</Link>
              </li>
            ))
          }
          {
            dropdown && dropdownSelected.submenu && <Dropdown dropdown={dropdownSelected} setDropdown={setDropdown} />
          }
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;