import react from 'react';
import './Section3.css';
import serviceApi from "../../images/api.png";
import serviceSite from "../../images/globe.png";
import serviceIntegration from "../../images/integration.png";
import serviceScript from "../../images/script.png";

export default function Section3(){
    return(
        <section id="section3" className="section3">
            <h2>Serviços</h2>
            <p className='margin-bottom-15px'>Ofereço soluções tecnológicas para atender às suas necessidades, seja para desenvolvimento web, APIs robustas, integração de sistemas ou automação de processos.</p>
        
            <div className="services-grid">
                <div className="service-item">
                    <h3>Criação de APIs</h3>
                    <img className='service-icon' src={serviceApi} width={150}/>
                    <p>Desenvolvo APIs RESTful, seguras e escaláveis, para facilitar a comunicação entre sistemas e integrar suas aplicações de forma eficiente.</p>
                </div>

                <div className="service-item">
                    <h3>Desenvolvimento de Sites</h3>
                    <img className='service-icon' src={serviceSite} width={150}/>
                    <p>Criação de sites modernos e responsivos, focados na experiência do usuário, utilizando as melhores práticas de front-end e back-end.</p>
                </div>

                <div className="service-item">
                    <h3>Integração de Sistemas</h3>
                    <img className='service-icon' src={serviceIntegration} width={150}/>
                    <p>Conecto seus sistemas e serviços de maneira fluida, automatizando fluxos de trabalho e garantindo o bom funcionamento dos dados.</p>
                </div>

                <div className="service-item">
                    <h3>Scripts de Automação</h3>
                    <img className='service-icon' src={serviceScript} width={150}/>
                    <p>Desenvolvimento de scripts para automatizar tarefas repetitivas, otimizando o tempo e aumentando a produtividade do seu negócio.</p>
                </div>
            </div>
        </section>

    )
}