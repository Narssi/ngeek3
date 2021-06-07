import React from 'react';
import './Portfolio.css';
import { motion } from "framer-motion";
import {MobileApp} from '../../Data/data-proyectos';
import {CardProject} from '../../Components/CardP';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../Components/Logo';
const Portafolio = () => {



    return (
    <motion.div className='portafolioB' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
            <Logo/>
            <div className='backs'>
            </div>
            <div className='portfolio'>
                <Row >
                    {MobileApp.map((project, key) =>(
                        <Col  md={12} lg={6} key={key}>
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
