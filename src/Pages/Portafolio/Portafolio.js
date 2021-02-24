import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portafolio.css';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";


const Portafolio = () => {

    return (
    <motion.div className='portafolio' initial={{opacity:0}} animate={{opacity:1}}>
            <Row >
                <Col><motion.div whileHover={{scale: 1.04}} className="card-img"></motion.div></Col>
                <Col>
                    <motion.div whileHover={{scale: 1.04}} className="txtcol">
                            <h1>Ultimo Diseño</h1>
                            <h2>ACOMER CLUB</h2>
                    </motion.div>
                </Col>
            </Row>
            <Row >
                <Col>
                    <motion.div  whileHover={{scale: 1.04}} className="txtcol2">
                            <h1>Design & Developer</h1>
                            <h2>PORTAFOLIO</h2>
                            <Link className="ruta" to="/portlist"><button>VER +</button></Link>
                    </motion.div>
                </Col>
                <Col><motion.div whileHover={{scale: 1.04}} className="card-img2"></motion.div></Col>
            </Row>
    </motion.div>

);
};

export default Portafolio;
