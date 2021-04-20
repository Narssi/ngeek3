import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portafolio.css';
//import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const Portafolio = () => {

    return (
    <motion.div className='portafolio' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
            <Row >
                <Col><motion.div whileHover={{scale: 1.04}} className="card-img"></motion.div></Col>
                <Col><motion.div whileHover={{scale: 1.04}} className="card-img2"></motion.div></Col>
            </Row>
          
    </motion.div>

);
};

export default Portafolio;
