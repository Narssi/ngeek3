import React from 'react';
import './Portfolio.css';
import { motion } from "framer-motion";
import Logo from '../../Components/Logo';
import {MobileApp} from '../../Data/data-proyectos';
import {CardProject} from '../../Components/CardP';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Portafolio = () => {



    return (
    <motion.div className='portafolio' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
        <Logo/> 
            <div>
                <Row>
                    {MobileApp.map((project, key) =>(
                        <Col key={key}>
                            <CardProject
                                key={project.id}
                                {...project}
                            />
                        </Col> 
                    ))
                    }
                </Row>
               
            </div>
    </motion.div>
    
    );
};

export default Portafolio;
