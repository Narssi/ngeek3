import React from 'react';
import './Habilidades.css';
import {SkillData} from '../../Data/data-ngk';

const Habilidades = () => {
    return (
        <div className="Habilidades">
               <ul className="flex-container10">
                {SkillData.map((skill, key) =>{
                    return(       
                    <li key={key} className="lex-item9">
                        <img src={`./assets/experience/${skill.id}.svg`} className="rounded"  alt="img"/>
                        <p>{skill.Tittle}</p>
                    </li>
                    
                    );
                })}
            </ul>   
        </div>
    );
};  

export default Habilidades;