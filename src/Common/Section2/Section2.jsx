import react from "react";
import fotoPerfil from "../../images/foto-perfil.jpg";
import "./Section2.css"

export default function Section2(){
    const linkedinLink = () => {
        window.open('https://www.linkedin.com/in/paulo-antbf/');
    }

    const githubLink = () => {
        window.open('https://github.com/PauloAnt');
    }

    const emailLink = () => {
        window.location.href = 'mailto:pauloantbf@gmail.com'
    }
    return (
        <div className="section2" id="section2">
            <div className="s2-info">
                <h1>Sobre mim</h1>
                <img src={fotoPerfil} alt="foto-perfil" width={300}/>
                <div className="s2-social-media">
                    <i class="fa-brands fa-linkedin" onClick={linkedinLink}></i> 
                    <i class="fa-brands fa-square-github" onClick={githubLink}></i>
                    <i class="fa-solid fa-envelope" onClick={emailLink}></i>
                </div>
                
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Sou formado em Técnico em Informática e atualmente cursando Sistemas para Internet. Sou desenvolvedor web com experiência em NodeJS, SpringBoot e React, tenho foco na criação de APIs e páginas de sites. 
                    Tenho paixão por transformar ideias em soluções digitais eficientes e inovadoras, sempre em busca de aprender novas tecnologias. </p>
            </div>
            
        </div>
    )
}