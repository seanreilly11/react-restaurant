import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    locations: [
        {
            name: "Wellington City",
            address: "138 Cuba St, Wellington",
            phone: "03 544 5847",
            openWeek: "11am-9pm",
            openWeekend: "11am-11pm",
            id: "welly",
        },
        {
            name: "Upper Hutt",
            address: "43 Main St, Upper Hutt",
            phone: "03 544 5847",
            openWeek: "11am-8.30pm",
            openWeekend: "11am-10pm",
            id: "upper",
        },
        {
            name: "Auckland",
            address: "117 Victoria St W, Auckland",
            phone: "03 544 5847",
            openWeek: "11am-9pm",
            openWeekend: "11am-11pm",
            id: "akl",
        },
        {
            name: "Christchurch",
            address: "296 Montreal St, Christchurch",
            phone: "03 544 5847",
            openWeek: "11am-9pm",
            openWeekend: "11am-11pm",
            id: "chch",
        },
    ],
    team: [
        {
            name: "Trevor Wright",
            position: "Restaurant Manager",
            image: "male1.jpg",
        },
        {
            name: "Gregor Johnson",
            position: "Executive Chef",
            image: "male3.jpg",
        },
        {
            name: "Jasmin Easton",
            position: "Host",
            image: "female2.jpg",
        },
        {
            name: "Kali Glenn",
            position: "Host",
            image: "female5.jpg",
        },
        {
            name: "Arron Chavez",
            position: "Server",
            image: "male4.jpg",
        },
        {
            name: "Milli Herbert",
            position: "Server",
            image: "female1.jpg",
        },
        {
            name: "Britney Mercer",
            position: "Server",
            image: "female3.jpg",
        },
        {
            name: "Cecelia Landry",
            position: "Bartender",
            image: "female4.jpg",
        },
        {
            name: "Sean Hess",
            position: "Bartender",
            image: "male2.jpg",
        },
    ],
    times: ["Breakfast", "Lunch", "Dinner"],
    food: [
        {
            name: "French Toast",
            description: "French Toast with blueberries",
            price: 7,
            meal: ["breakfast"],
        },
        {
            name: "Beans on Toast",
            description: "Beans on Toast with beans",
            price: 6,
            meal: ["breakfast"],
        },
        {
            name: "Eggs Benedict",
            description: "Eggs Benedict and Hollandaise Sauce",
            price: 9.5,
            meal: ["breakfast"],
        },
        {
            name: "Pancakes",
            description: "Stack of pancakes with maple syrup and banana",
            price: 8,
            meal: ["breakfast"],
        },
        {
            name: "Eggs",
            description: "Two eggs any style with any side",
            price: 9,
            meal: ["breakfast"],
        },
        {
            name: "5-Cheese Omelet",
            description: "Omelet made with 5 cheeses and any side",
            price: 10,
            meal: ["breakfast"],
        },
        {
            name: "Chips",
            description: "Crispy chips with a side of aioli",
            price: 4,
            meal: ["lunch", "dinner"],
        },
        {
            name: "Wedges",
            description: "Crispy wedges with a side of BBQ sauce",
            price: 4.5,
            meal: ["lunch", "dinner"],
        },
        {
            name: "Nachos",
            description: "Nachos with mince and beans and stuff",
            price: 8.5,
            meal: ["lunch"],
        },
        {
            name: "Sandwich",
            description: "Sandwich with your choice of 3 fillings",
            price: 7,
            meal: ["lunch"],
        },
        {
            name: "Stew",
            description: "Fresh stew made by Grandma",
            price: 8,
            meal: ["lunch"],
        },
        {
            name: "Tacos",
            description:
                "Fresh chicken or beef tacos with your choice of toppings",
            price: 6,
            meal: ["lunch", "dinner"],
        },
        {
            name: "Beef Burger",
            description:
                "Succulent beef pattie topped with fresh lettuce and bacon",
            price: 11,
            meal: ["dinner"],
        },
        {
            name: "Chicken Burger",
            description: "Juicy chicken breast with lettuce and camembert",
            price: 12,
            meal: ["dinner"],
        },
        {
            name: "Ribeye Steak",
            description: "Succulent ribeye steak with garlic butter",
            price: 24,
            meal: ["dinner"],
        },
        {
            name: "Salmon",
            description: "Fresh King Salmon fron Nelson",
            price: 21,
            meal: ["dinner"],
        },
    ],
    currentMenu: null,
};

// creat context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function addCurrentMenu(menu) {
        dispatch({
            type: "CURRENT_MENU",
            payload: menu,
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                locations: state.locations,
                team: state.team,
                food: state.food,
                currentMenu: state.currentMenu,
                addCurrentMenu,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
