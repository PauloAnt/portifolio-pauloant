import React, { useState } from "react";
import "./Login.css";
import api from "../../axiosConfig.jsx";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function login(event){
        event.preventDefault(); 

        const data = {
            email: email,
            password: password
        };

        try {
            const response = await api.post("/api/login", data);

            localStorage.setItem("token", response.data.token);

            navigate("/project");
        } 
        catch (err) {
            alert("Ocorreu um erro ao logar, tente novamente.");
            console.error(err.message);
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={login} className="login-form">
                <h1>Login</h1>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}  
                    type="text"
                    placeholder="Digite seu email"
                />
                <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}  
                    type="password"
                    placeholder="Digite sua senha"
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
