import React from "react";
import {NavLink} from 'react-router-dom';
import s from './CollegeMenu.module.css';

const CollegeMenu = () => {
  return <nav className={s.collegeMenu}>
    <ul>
      <li className={s.item}>
        <NavLink to="/college/about_college" activeClassName={s.activeLink}>Главная</NavLink>
      </li>
      <li className={`${s.item} ${s.active}`}>
        <NavLink to="/college/administration" activeClassName={s.activeLink}>Администрация</NavLink>
      </li>
      <li className={`${s.item} ${s.active}`}>
        <NavLink to="/college/structure" activeClassName={s.activeLink}>Структура</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/college/commissions" activeClassName={s.activeLink}>Цикловые комиссии</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/college/mtb" activeClassName={s.activeLink}>Материально-техническая база</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/college/bulletin_board" activeClassName={s.activeLink}>Доска объявлений</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/college/achievements" activeClassName={s.activeLink}>Наши достижения</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/college/qms" activeClassName={s.activeLink}>Система менеджмента качества</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/college/trade_union_organization" activeClassName={s.activeLink}>Первичная профсоюзная организация</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/college/photo_gallery" activeClassName={s.activeLink}>Фотогалерея</NavLink>
      </li>
      <li className={s.item}>
        <NavLink to="/college/news" activeClassName={s.activeLink}>Новости</NavLink>
      </li>
    </ul>
  </nav>
}
export default CollegeMenu;