import React from 'react';
import {motion} from 'framer-motion';
import { Link } from 'react-router-dom';
import '../style/CardDetails.css';




export const CardDetails =({

    id,
    text,
    picture,

}) => {
    return(
        <motion.div whileHover={{scale: 1.04}} >
             <div className="ba"  style={{backgroundImage:`url(${picture})`}}>
              
             <Link className="InfoP" to={`/project/${ id }`}> <h1>{text}</h1></Link>
              </div>
    </motion.div>
    )
}

