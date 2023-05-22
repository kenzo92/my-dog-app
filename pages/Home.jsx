import React from "react"
import { Link } from "react-router-dom"
import '../index.css'


export default function Home() {
    return (
                    <div className="home-container">
                        {/* <video autoPlay muted loop>
                            <source src="../assets/video/dogs.mp4" type="video/mp4"/>
                        </video> */}
                        <div className="home-container-content">
                            <h1>You got the pet plans, we got the pet links.</h1>
                            <p>Add adventure to your life by joining the #doglife movement. Buy the perfect pet to live a happy life.</p>
                            <Link to="/dogs">Find your Dog</Link>
                         </div>
                    </div>        
    )
};

