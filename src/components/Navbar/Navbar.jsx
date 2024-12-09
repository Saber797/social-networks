import React from 'react';
import s from'./Navbar.module.css';
import { NavLink } from 'react-router-dom';
export const Navbar = () => {
    return <nav className= {s.navdar}>
        <div className={s.item}>
            <NavLink to ="/Profile" className={s.active}>profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ="/Dialogs" className={s.active}>message</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ="/News" className={s.active}>news</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ="/Music" className={s.active}>music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ="/Freinds" className={s.active}>Freinds</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ="/Users" className={s.active}>Users</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to ="/Settings" className={s.active}>settings</NavLink>
        </div>
    </nav>
}