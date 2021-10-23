import React from "react";
import s from "./NavBarLink.module.css";
import gerb_rb from "../assets/gerb-rb-mini.png";
import gerb_kol from "../assets/emblema-min.png";

const NavBarLink = () => {
  return (
    <div className={s.navbl}>
      <img className={s.gerb_rb} src={gerb_rb}/>
      <img className={s.gerb_kol} src={gerb_kol}/>
      <div className={s.shapka}>
        <div className={s.shapka1}>Министерство образования Республики Беларусь</div>
        <div className={s.shapka2}>Оршанский колледж ВГУ имени П.М. Машерова</div>
      </div>
    </div>
  )
};

export default NavBarLink;