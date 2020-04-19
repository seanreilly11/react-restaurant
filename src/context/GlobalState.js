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
    times: [
        {
            text: "Breakfast",
            id: "brek",
        },
        {
            text: "Lunch",
            id: "lunch",
        },
        {
            text: "Dinner",
            id: "din",
        },
    ],
};

// creat context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider
            value={{ locations: state.locations, team: state.team }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
