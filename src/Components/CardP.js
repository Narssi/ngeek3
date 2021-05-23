import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import '../style/CardStyle.css';

export const CardProject = ({
    id,
    tittle,
    picture,
    position,

}) => {
    return(
        <motion.div whileHover={{scale: 1.04}} >
            <div className=" card-img" style={{backgroundImage:`url(${picture})`}}>
                <Link className="InfoP" to={`/project/${ id }`}>
                     <div className="fount-tittle">
                        <p>{tittle}</p>
                     </div>
                     <div className="fount-text">
                     <p>{position}</p>
                     </div>
                 </Link>
            </div>            
        </motion.div>
    )
}