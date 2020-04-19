import React from "react";

export const MenuTime = ({ time }) => {
    return (
        <div className="section-grow">
            <section
                className={time.text.toLowerCase() + " section"}
                id={time.id}
            >
                <h1 className="section__heading">{time.text}</h1>
            </section>
        </div>
    );
};
