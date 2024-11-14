import React, { useEffect, useState } from "react";
import "./Section4.css";
import api from "../../axiosConfig.jsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Section4() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await api.get("/api/project");
                setProjects(response.data.data);
            } catch (err) {
                alert("Ocorreu um erro, tente novamente.");
                console.log(err.message);
            }
        };
        fetchProjects();
    }, []);

    async function openRepositoryLink(link) {
        window.open(link, "_blank");
    }

    return (
        <div className="section4" id="section4">
            <div className="s4-title">
                <h1>Projetos</h1>
            </div>
            <div className="s4-projects">
                <Swiper
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation
                >
                    {projects.map((e) => (
                        <SwiperSlide key={e.id}>
                            <div className="s4-container-project">
                                <h1>{e.name}</h1>
                                <img src={e.image} width={450} alt={`Imagem de ${e.name}`} />
                                <p>{e.description}</p>
                                <button onClick={() => openRepositoryLink(e.link)}>Ver repositório</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
