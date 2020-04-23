import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Full Name" />
                        </div>
                        <div className="column">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Email Address" />
                        </div>
                    </div>

                    <label htmlFor="purpose">Purpose</label>
                    <select name="purpose" id="purpose">
                        <option value="none">Please Select Purpose</option>
                        <option value="func">Functions/Catering</option>
                        <option value="loc">Locations</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="location">Location</label>
                    <select name="location" id="location">
                        <option value="none">Please Select Location</option>
                        <option value="welly">Wellington</option>
                        <option value="upper">Upper Hutt</option>
                        <option value="akl">Auckland</option>
                        <option value="chch">Christchurch</option>
                    </select>

                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Please enter your message"
                    ></textarea>

                    <button className="submitBtn">Submit</button>
                </div>
            </div>
            <Footer />
        </>
    );
};
