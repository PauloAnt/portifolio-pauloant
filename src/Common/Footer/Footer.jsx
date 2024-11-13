import react from 'react';
import "./Footer.css";

export default function Footer(){
    const linkedinLink = () => {
        window.open('https://www.linkedin.com/in/paulo-antbf/');
    }

    const githubLink = () => {
        window.open('https://github.com/PauloAnt');
    }

    const emailLink = () => {
        window.location.href = 'mailto:pauloantbf@gmail.com'
    }
    return(
        <footer>
            <div className='f-contato'>
                <p>Contato</p>
                <i class="fa-brands fa-linkedin" onClick={linkedinLink}></i> 
                <i class="fa-brands fa-square-github" onClick={githubLink}></i>
                <i class="fa-solid fa-envelope" onClick={emailLink}></i>
            </div>
            <div>
                <p>© 2024 Paulo Antônio. Todos os direitos reservados.</p>
            </div>
            <div className='f-link-rapido'>
                <p>Seções</p>
                <a href="#section2">Sobre</a>
                <a href="#section3">Serviços</a>
                <a href="#section3">Projetos</a>
            </div>
        </footer>
    )
}