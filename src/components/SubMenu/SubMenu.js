import s from "../NavBar/NavBar.module.css";
import React from "react";
import {NavLink} from "react-router-dom";

const SubMenu = ({path, name}) => {
  return(
    <li>
      <NavLink to={`/${path}`} activeClassName={s.activeLink}>{name}</NavLink>
    </li>
  )
}

export default SubMenu;