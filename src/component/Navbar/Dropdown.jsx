import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { Link } from 'react-router-dom';

function Dropdown({ dropdown, setDropdown }) {
  const [click, setClick] = useState(false);
  const [img, setImg] = useState(dropdown.img);

  const handleClick = () => setClick(!click);

  useEffect(() => {
    setImg(dropdown.img)
  }, [dropdown])
  
  return (
    <div className='dropdown-nav-menu' onMouseLeave={() => setDropdown(false)}>
      <ul
        onClick={handleClick}
        className={`dropdown-menu ${click && 'clicked'}`}
      >
        <h1 className='dropdown-title'>{dropdown.title}</h1>
        <div>
          {dropdown.submenu && dropdown.submenu.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                  onMouseOver={() => setImg(item.img)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </div>
          <img className='dropdown-img' src={img && require(`./img/${img}`)} alt="" />
      </ul>
    </div>
  );
}

Dropdown.propTypes = {
  img: PropTypes.string,
  dropdown: PropTypes.object,
  setDropdown: PropTypes.func,
}

export default Dropdown;