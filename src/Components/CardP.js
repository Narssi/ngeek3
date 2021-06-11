import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import '../style/CardStyle.css';
import arrow from '../Assets/arrow.svg';
export const CardProject = ({
    id,
    tittle,
    picture,
    position,

}) => {
    return(
        <motion.div whileHover={{scale: 1.00}} className="card-img" style={{backgroundImage:`url(${picture})`}}>
            <div className="fount-tittle">
                <h1>{tittle}</h1>
                <p>{position}</p>
                <Link to={`/project/${ id }`}>
                    <div className="fount-text">
                    <img src={arrow} className="next" alt="next"/>
                    </div>               
                </Link> 
                <div className="figures">
                </div>    
            </div>
             
        </motion.div>
    )
}