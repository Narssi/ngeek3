import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import './CardStyle.css';

export const CardProject = ({
    id,
    text,
    picture,

}) => {
    return(
        <motion.div whileHover={{scale: 1.04}} >
            <div className=" card-img" style={{backgroundImage:`url(${picture})`}}>
            <Link className="InfoP" to={`/project/${ id }`}> <h1>{text}</h1></Link>
            </div>            
        </motion.div>
    )
}