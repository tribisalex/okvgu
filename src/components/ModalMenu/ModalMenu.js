import React from 'react';
import s from "../NavBar/NavBar.module.css";
import {NavLink} from "react-router-dom";


const ModalMenu = () => {
  return (
    <li className={`${s.item} ${s.active}`}>
      <NavLink to={`/${path}`} activeClassName={s.activeLink}>{name}</NavLink>
    </li>
  )
}

export default ModalMenu;