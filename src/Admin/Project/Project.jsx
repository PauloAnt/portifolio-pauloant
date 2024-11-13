import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Project.css";
import api from "../../axiosConfig.jsx";
import CreateProject from "../CreateProject/CreateProject.jsx";

export default function Projetos() {
    const [projects, setProjects] = useState([]);
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get("/api/project", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProjects(response.data.data);
            } catch (err) {
                alert("Ocorreu um erro, tente novamente.");
                console.log(err.message);
            }
        };
        fetchProjects();
    }, [token]);

    async function openRepositoryLink(link) {
        window.open(link, "_blank");
    }

    async function deleteProject(id) {
        try {
            await api.delete(`/api/project/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            setProjects(projects.filter(project => project.id !== id));
            navigate("/project");
        } catch (err) {
            alert("Ocorreu um erro ao deletar o projeto, tente novamente.");
            console.log(err.message);
        }
    }

    return (
        <div>
            <div className='admin-upper-text'>
                <Link to="/">Voltar</Link>
                <h1>Painel Admin</h1>
            </div>
            
            <CreateProject />
            <div className='admin-projects'>
                {projects.map((e) => (
                    <div className="admin-container-project" key={e.id}>
                        <h1>{e.name}</h1>
                        <p>{e.created}</p>
                        <img src={e.image} width={450} alt={`Imagem de ${e.name}`} />
                        <p>{e.description}</p>
                        <button onClick={() => openRepositoryLink(e.link)}>Ver repositório</button>
                        <button className='admin-btn-del' onClick={() => deleteProject(e.id)}>Deletar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
