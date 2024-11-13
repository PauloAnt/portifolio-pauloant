import react from 'react';
import "./Section1.css";
import foguete from "../../images/foguete-computer.png"
import Header from "../Header/Header.jsx";

export default function Section1(){


    const downloadCurriculo = () => {
        window.open('https://drive.google.com/file/d/1wWUczk1qJIJ8NZU9ZBbLw1oRRNcG_Frr/view?usp=drive_link', '_blank');
    };

    const contatoLink = () => {
        window.location.href = 'mailto:pauloantbf@gmail.com'
    }

    


    return (
        <div className='home'>
            <Header/>
            <div className='section1'>
            
                <div className='s1-home-apresensation-text'>
                    <div className='s1-container-text'>
                        <h3>Olá 👋, eu sou</h3>
                        <h1>Paulo Antônio</h1>
                        <h3>Desenvolvedor Web 💻e Freelancer 💼</h3>
                        <button className='s1-btn-curriculo' onClick={downloadCurriculo}>Baixar Currículo <i class="fa-solid fa-download"></i></button>
                        <button className='s1-btn-contato' onClick={contatoLink}>Contato <i class="fa-solid fa-phone"></i></button> 
                    </div>
                    
                </div>
                <div className='s1-home-rocket'>
                    <img src={foguete} alt="foguete" width={330}/>
                </div>
            </div>
        </div>
        
    )
}