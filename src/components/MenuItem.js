import React from "react";

export const MenuItem = ({ item }) => {
    return (
        <div className="menu-item">
            <h3 className="menu-item-title">{item.name}</h3>
            {/* <button className="addToCartBtn">Add To Cart</button> */}
            <div className="menu-item-center">
                <p>{item.description}</p>
                <p>${item.price}</p>
            </div>
        </div>
    );
};
