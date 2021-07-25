import React from 'react'
import './Hero.css'
import newIdea from '../assets/dizzy-new-idea.png'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-wrapper">
                <div className="hero-left">
                    <div>
                        <h1>Write it down.</h1>
                        <p>Utilize notekeeper to keep your thoughts from floating away.</p>
                        <Link to="/register" className="register" > Register </Link>
                    </div>
                </div>
                <div className="hero-right">
                    <img src={newIdea} alt="hero" className="hero-img" />
                </div>
            </div>
        </div>
    )
}

export default Hero
