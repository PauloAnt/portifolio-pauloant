import React, { useState } from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="header">
            <div className="header-left">
                <Link to="/">PauloAnt</Link>
            </div>
            <div className={`header-right ${menuOpen ? 'open' : ''}`}>
                <a href="#section2">Sobre</a>
                <a href="#section3">Serviços</a>
                <a href="#section3">Projetos</a>
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    );
}
