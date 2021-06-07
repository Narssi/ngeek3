import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import '../style/CardStyle.css';
import next from '../Assets/next.svg';
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
            </div>

            <div className="clics">
                <Link to={`/project/${ id }`}>
                    <div className="fount-text">
                    <p>View more <img src={next} className="next" alt="next"/></p>
                 
                    </div>
                  
                </Link> 
            </div>    
            <div className="figures">
            </div>     
        </motion.div>
    )
}