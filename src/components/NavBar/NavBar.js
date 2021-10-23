import React, {useEffect, useRef, useState} from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import classNames from 'classnames/bind';

const cx = classNames.bind(s);

const NavBar = ({menuItems, openModal, isOpen}) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    }
  }, [isActive]);


  const onClick = (e) => {
    e.preventDefault();
    openModal(Number(e.target.id));
    setIsActive(!isActive);
  }

  return (
    <div className={s.menu_container}>
      <ul className={s.menu_trigger}>
        {
          menuItems
          .map((menuItem) =>
            <li onClick={onClick} className={s.span}>
              <NavLink to={`/${menuItem.path}`}>{menuItem.name}</NavLink>
              <ul ref={dropdownRef} className={`${s.menu} ${isActive ? `${s.active}` : `${s.inactive}`}`}>
              {/*<ul ref={dropdownRef} className={cx('menu', {'active': isOpen})}>*/}
                {
                  menuItem.children.map((item) =>
                    <li>
                      <NavLink to={`/${menuItem.path}/${item.path}`}>{item.name}</NavLink>
                    </li>
                  )
                }
              </ul>
            </li>)
        }
      </ul>
    </div>
  );
}

export default NavBar;