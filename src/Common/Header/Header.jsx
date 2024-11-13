import react from "react";
import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div className="header">
            <div className="header-left">
                <a><Link to="/">PauloAnt</Link></a>
            </div>
            <div className="header-right">
                <a href="#section2">Sobre</a>
                <a href="#section3">Serviços</a>
                <a href="#section3">Projetos</a>
            </div>
        </div>
    )
}