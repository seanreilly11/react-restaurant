import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Home = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="banner-wrapper">
                <div className="banner-text">
                    <h1>Kitchen Food Restaurant</h1>
                    <p>Order online or eat in store</p>
                    <Link to="menu">
                        <button className="orderButtonLarge">ORDER NOW</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
