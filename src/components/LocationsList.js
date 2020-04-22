import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Locations } from "./Locations";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const LocationsList = () => {
    const { locations } = useContext(GlobalContext);
    return (
        <>
            <Navbar />
            <div className="location-grid-container grid-container">
                {locations.map((location, i) => (
                    <Locations key={i} location={location} />
                ))}
            </div>
            <Footer />
        </>
    );
};
