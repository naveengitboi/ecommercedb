import React from "react";
import { NavLink } from "react-router-dom";
import '../cssComponents/Footer.css'
const Footer = ()=> {
    return(
        <>
            <div className="footer">
                <div className="footerDetails">
                    <h1 className="logo">E-Commerce</h1>
                    <p>Buy Things here</p>
                </div>
                <div className="footerLinks">
                    <p>Useful Links</p>
                    <ul>
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to='/add'>add Products</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer