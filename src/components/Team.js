import React from "react";

export const Team = ({ team }) => {
    const images = require.context("../assets/", true);
    let img = images("./" + team.image);
    return (
        <div className="team-card">
            <div className="team__image">
                <img src={img} alt="" />
            </div>
            <div className="team">
                <h1 className="team__name">{team.name}</h1>
            </div>
            <div className="position">
                <h3 className="team__position">{team.position}</h3>
            </div>
        </div>
    );
};
