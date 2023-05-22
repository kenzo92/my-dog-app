import React from "react"
import backgroundImage from "../assets/images/pexels-dogs.jpg"
import { Link } from "react-router-dom"

export default function About() {
    return (
        <div className="about-page-container">
            <img src={backgroundImage} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Don’t settle for the less quality pets for your home.</h1>
                <p>Connecting dog lovers worldwide, our app aims to provide a comprehensive platform that celebrates the joy of dogs.
                     We strive to foster community, share knowledge, and promote responsible pet ownership, offering a range of resources,
                     information, and engaging experiences to enhance the lives of dogs and their owners</p>
                <p>Our team is full of DogLife enthusiasts who know firsthand the magic of getting you the right Dogs.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your pet is ready.</h2>
                <Link className="link-button" to="/dogs">Explore our Dogs</Link>
            </div>
        </div>
    );
}