import React, { useContext, useState, useRef } from "react";
import { Navbar } from "./Navbar";
import { GlobalContext } from "../context/GlobalState";
import { Menu } from "./Menu";
import { Footer } from "./Footer";

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export const MenuPage = () => {
    const { times, food } = useContext(GlobalContext);
    const [clickedMenuList, setClickedMenuList] = useState([]);
    const [showMenu, setShowMenu] = useState(false);
    const [meal, setMeal] = useState("");

    const myRef = useRef();

    const handleMeal = (id) => {
        setClickedMenuList(food.filter((food) => food.meal.includes(id)));
        setShowMenu(true);
        setMeal(id);
        scrollToRef(myRef);
        console.log(myRef);
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
            <div ref={myRef}></div>
            {showMenu ? <Menu meal={meal} menu={clickedMenuList} /> : ""}
            <Footer />
        </>
    );
};
