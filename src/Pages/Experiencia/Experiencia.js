import React from 'react';
import './Experiencia.css';
import Carousel from 'react-bootstrap/Carousel';
import { experienceData, carruselData } from "../../Data/data-ngk";
import {  motion } from "framer-motion";

const Experiencia = () => {
    return (
        <div className="Experiencia">
            <div className="tittle">
                <h1>Trabajos</h1>
                <h2>Experiencia Profesional</h2>
            </div>
            <div className="carrusel">
                <Carousel>
                    {carruselData.map((carrusel, key)=>{
                        return(
                            <Carousel.Item key={key} interval={2000}>
                                <ul className="flex-EX">
                                    <li className="back-info">
                                        <h1>{carrusel.name}</h1>
                                        <h2>{carrusel.Position}</h2>
                                        <p>{carrusel.Fecha}</p>
                                    </li>
                                    <li className="back-img"><img src={`./assets/carrusel/${carrusel.id}.svg`} className="rounded"  alt="img"/></li>
                                </ul>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
            <ul className="flex-EX">
                {experienceData.map((experience, key) =>{
                    return(
                    <motion.li  whileHover={{ scale: 0.9 }} key={key} className="flex-Cards">
                        <motion.img animate={{ rotate: 30}}
                        transition={{ ease: "linear", duration: 2, repeat: Infinity, repeatType: "reverse" }}
                         src={`./assets/experience/${experience.id}.svg`} className="rounded"  alt="img"/>
                        <p>{experience.text}</p>
                    </motion.li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Experiencia;
