import React, { useContext, useState, useRef } from "react";
import { Navbar } from "./Navbar";
import { GlobalContext } from "../context/GlobalState";
import { Menu } from "./Menu";
import { Footer } from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCoffee,
    faHotdog,
    faHamburger,
} from "@fortawesome/free-solid-svg-icons";

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
            {showMenu ? (
                <>
                    <div class="hidden-nav">
                        <div
                            class="hidden-nav-list"
                            onClick={() => handleMeal("breakfast")}
                        >
                            <FontAwesomeIcon icon={faCoffee} />
                            <p class="hidden-nav-title">Breakfast</p>
                        </div>
                        <div
                            class="hidden-nav-list"
                            onClick={() => handleMeal("lunch")}
                        >
                            <FontAwesomeIcon icon={faHotdog} />
                            <p class="hidden-nav-title">Lunch</p>
                        </div>
                        <div
                            class="hidden-nav-list"
                            onClick={() => handleMeal("dinner")}
                        >
                            <FontAwesomeIcon icon={faHamburger} />
                            <p class="hidden-nav-title">Dinner</p>
                        </div>
                    </div>{" "}
                    <Menu meal={meal} menu={clickedMenuList} />
                </>
            ) : (
                ""
            )}
            <Footer />
        </>
    );
};
