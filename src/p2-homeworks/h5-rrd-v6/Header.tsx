import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import './HW5.css'

function Header() {
    const navLinkStyleHandler = (isActive: boolean) => isActive ? "activeLink" : "defaultLink"
    return (
        <div className={"headerContainer"}>
            <NavLink className={({isActive}) => navLinkStyleHandler(isActive)}
                     to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
            <NavLink className={({isActive}) => navLinkStyleHandler(isActive)}
                     to={PATH.JUNIOR}>junior</NavLink>
            <NavLink className={({isActive}) => navLinkStyleHandler(isActive)}
                     to={PATH.JUNIOR_PLUS}>junior_plus</NavLink>
            <div className={"menuStyle"}>Menu</div>
        </div>
    )
}

export default Header
