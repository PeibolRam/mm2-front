import React from 'react'
import Logo from '../images/logo.png'
import { Link } from "react-router-dom";

import '../styles/Navbar.css'

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                <img src={Logo} alt="Logo"/>
            </Link>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Registrate</Link>
                </li>
            </ul>
        </nav>
    )
}
