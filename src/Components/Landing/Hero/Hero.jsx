import React from "react";
import "./Hero.css";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate("/newmenu")
    }
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
                    <button className="herobtn" onClick={handleNavigate}>Explore Now</button>

                </div>
            </div>
        </section>
    );
};

export default Hero;
