import React from 'react'
import { Link } from "react-router-dom";
import HeroImg from '../images/hero.jpg'
import '../styles/Hero.css'

export default function Hero() {
    return (
        <div className="hero" style={{ backgroundImage: `url(${HeroImg})` }}>
            <div className="shadow_back">
                <h1>Ponte mmdo HDTPM</h1>
                <Link to="/register" >Registrate HDTPM</Link>
            </div>
        </div>
    )
}
