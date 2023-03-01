import React from "react";
import { NavLink } from "react-router-dom";
import '../cssComponents/Navbar.css'
function Navbar(){
    return(
        <>
            <div className="navbar">
                <h1 className="logo">E-Commerce</h1>
                <ul className="navLinks">
                    <li><NavLink to='/'>Products</NavLink></li>
                    <li><NavLink to='/add'>Add Products</NavLink></li>
                    <li><NavLink to='/update'>Update Products</NavLink></li>
                    <li><NavLink to='/logout'>Logout</NavLink></li>
                    <li><NavLink to='/profile'>Profile</NavLink></li>
                    <li><NavLink to='/signup'>Sign Up</NavLink></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar