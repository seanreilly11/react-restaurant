import React from "react";

export const Locations = ({ location }) => {
    return (
        <div className="location-card">
            <div className="location" id={location.id}>
                <h1 className="location__name">{location.name}</h1>
            </div>
            <div className="branch-info">
                <div className="address">
                    <h3 className="location__info">Address</h3>
                    <p>{location.address}</p>
                </div>
                <div className="phone">
                    <h3 className="location__info">Phone Number</h3>
                    <p>{location.phone}</p>
                </div>
            </div>
            <div className="hours">
                <h3 className="location__info">Opening Hours</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Sun-Thurs:</td>
                            <td>{location.openWeek}</td>
                        </tr>
                        <tr>
                            <td>Fri-Sat:</td>
                            <td>{location.openWeekend}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};
