import React from "react";
import { MenuItem } from "./MenuItem";

export const Menu = ({ meal, menu }) => {
    return (
        <div className="menu-container" id="menu">
            <h1 className="menu-heading">{meal}</h1>
            {/* <div className="menu-wrapper"> */}
            {menu.map((item, i) => (
                <MenuItem key={i} item={item} />
            ))}
            {/* </div> */}
        </div>
    );
};
