import React from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <header>
            <Link to="/">
                <img
                    src={logo}
                    alt="Logo"
                    title="Kitchen Food Restaurant - Home"
                />
            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink to="menu">MENU</NavLink>
                    </li>
                    <li>
                        <NavLink to="locations">LOCATIONS</NavLink>
                    </li>

                    <li>
                        <NavLink to="team">The Team</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <Link to="menu">
                <button className="orderButton">ORDER NOW</button>
            </Link>
        </header>
    );
};
