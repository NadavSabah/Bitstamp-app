import React from 'react'
import './NavBar.css'
import {BrwserRouter as Route ,NavLink} from 'react-router-dom'
import icon from '../../img/bitcoin.png'


const NavBar = props =>{
    return(
        // <header className="nav-container">
        <header className="main-header">
            <div className="icon-wrapper">
                <NavLink to="/"><img className='icon-img' src={icon} title='bitStamp'   /></NavLink>
            </div>
            <nav className="main-nav">

            <ul className="main-nav__items">
                <li className="main-nav__item"><NavLink  to="/" >Home </NavLink></li>
                <li className="main-nav__item"><NavLink  to="/RestApi">RestApi</NavLink></li>
            </ul>
            </nav>


        {/* <NavLink className="nav-link" to="/">Home </NavLink>
        <NavLink className="nav-link" to="/RestApi">RestApi</NavLink> */}
        </header>
    )
}
export default NavBar