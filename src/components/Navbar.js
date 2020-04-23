import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleChange = () => {
        setShowNav(!showNav);
    };

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
                {!showNav ? (
                    <FontAwesomeIcon
                        className="nav-bars"
                        icon={faBars}
                        onClick={handleChange}
                    />
                ) : (
                    ""
                )}

                <ul className={`nav-list ${showNav ? "expanded" : ""}`}>
                    {showNav ? (
                        <FontAwesomeIcon
                            className="nav-bars nav-bars-close"
                            icon={faTimes}
                            onClick={handleChange}
                        />
                    ) : (
                        ""
                    )}
                    <li className="nav-list-item" onClick={handleChange}>
                        <NavLink to="menu">MENU</NavLink>
                    </li>
                    <li className="nav-list-item" onClick={handleChange}>
                        <NavLink to="locations">LOCATIONS</NavLink>
                    </li>

                    <li className="nav-list-item" onClick={handleChange}>
                        <NavLink to="team">The Team</NavLink>
                    </li>
                    <li className="nav-list-item" onClick={handleChange}>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <Link className="order-button-link" to="menu">
                <button className="order-button">ORDER NOW</button>
            </Link>
        </header>
    );
};
