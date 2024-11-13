import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../../axiosConfig.jsx";
import "./CreateProject.css";

export default function CreateProject() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    async function createProject(e) {
        e.preventDefault();

        console.log(token);
        if (!token){
            alert("Faça o login novamente.");
            navigate("/login");
        }

        setLoading(true);
        const data = {
            name,
            description,
            link
        };

        try {
            const formData = new FormData();
            formData.append('data', JSON.stringify(data));

            if (image) {
                formData.append('image', image);
            }

            await api.post("/api/project", formData, { 
                headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            navigate(0);
        } catch (err) {
            alert("Ocorreu um erro ao criar o projeto, tente novamente.");
            console.log(err.response?.data);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='admin-container-create-project'>
            <form onSubmit={createProject} className='admin-form-create-project'>
                <h2>Criar projeto</h2>
                <input 
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Insira o nome do projeto'
                />
                <input 
                    type='text'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Insira a descrição do projeto'
                />
                <input 
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder='Insira o link do repositório'
                />
                <input 
                    type='file'
                    onChange={handleFileChange}
                    placeholder='Coloque a imagem do projeto'
                />
                <button type='submit' disabled={loading}>
                    {loading ? 'Carregando...' : 'Criar'}
                </button>
            </form>
        </div>
    );
}
