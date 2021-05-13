import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Portfolio.css';
//import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Logo from '../../Components/Logo';
import {AxityMobile} from '../../Data/data-proyectos';

const Portafolio = () => {

    return (
    <motion.div className='portafolio' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
        <div className="portf">
            <Logo/> 
            <div className='bodyprojects'>
            <Row>
                {AxityMobile.map((axm, key) =>{
                    return(
                        <Col key={key} >
                            <motion.div whileHover={{scale: 1.04}} className="card-img" sm style={{backgroundImage:`url(${axm.picture})`}}></motion.div>
                            <div className="InfoP" >
                                
                            </div>
                            
                        </Col>
                    );
                })} 
            </Row>
            </div>

        </div>   


    </motion.div>
        

);
};

export default Portafolio;
