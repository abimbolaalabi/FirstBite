import React from "react";
import "./Hero.css";
import { CiLocationOn } from "react-icons/ci";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="">
                    Delicious breakfast
                    delivered fresh to your 
                    doorstep every <br />
                    morning
                </h1>

                <div className="hero-input">
                    <div className="hero-input-child">
                        <CiLocationOn className="location" />
                        <input
                            type="text"
                            placeholder="Enter delivery address (e.g.Mile 2)"
                        />
                    </div>
                    <button>Use Current Location</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
