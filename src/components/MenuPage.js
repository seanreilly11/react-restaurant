import React, { useContext } from "react";
import { Navbar } from "./Navbar";
import { GlobalContext } from "../context/GlobalState";
import { MenuTime } from "./MenuTime";

export const MenuPage = () => {
    const { times } = useContext(GlobalContext);

    return (
        <>
            <Navbar />
            {times.map((time, i) => (
                <MenuTime key={i} time={time} />
            ))}
        </>
    );
};
