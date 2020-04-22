import React, { useContext, useState } from "react";
import { Navbar } from "./Navbar";
import { GlobalContext } from "../context/GlobalState";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

export const MenuPage = () => {
    const { times, food } = useContext(GlobalContext);
    const [clickedMenuList, setClickedMenuList] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [meal, setMeal] = useState("");

    const handleMeal = (id) => {
        setClickedMenuList(food.filter((food) => food.meal.includes(id)));
        setShowMenu(true);
        setMeal(id);
    };

    return (
        <>
            <Navbar />
            {times.map((time, i) => (
                <div
                    className="section-grow"
                    onClick={handleMeal.bind(this, time.toLowerCase())}
                    key={i}
                >
                    <section
                        className={time.toLowerCase() + " section"}
                        id={time.toLowerCase()}
                    >
                        <h1 className="section__heading">{time}</h1>
                    </section>
                </div>
            ))}
            {showMenu ? <Menu meal={meal} menu={clickedMenuList} /> : ""}
            <Footer />
        </>
    );
};
