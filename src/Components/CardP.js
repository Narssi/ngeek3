import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import '../style/CardStyle.css';

export const CardProject = ({
    id,
    tittle,
    picture,

}) => {
    return(
        <motion.div whileHover={{scale: 1.04}} >
            <div className=" card-img" style={{backgroundImage:`url(${picture})`}}>
            <Link className="InfoP" to={`/project/${ id }`}> <h1>{tittle}</h1></Link>
            </div>            
        </motion.div>
    )
}