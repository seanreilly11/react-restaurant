import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Team } from "./Team";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const TeamList = () => {
    const { team } = useContext(GlobalContext);
    return (
        <>
            <Navbar />
            <div className="team-grid-container grid-container">
                {team.map((team, i) => (
                    <Team key={i} team={team} />
                ))}
            </div>
            <Footer />
        </>
    );
};
