import React from 'react';
import './Contact.css';
import { Contacticons } from "../../Data/data-ngk";
import {  motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../Components/Logo';

const Contacto = () => {
    return(
        <motion.div className='Contacto' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
            <Logo/>
            <div>
            <Row className="Bodycontact">
                <Col sm className='aligt'>
                
                    <div className="tittlecontact">
                        <h2>Available for questions, collaborations, projects</h2>
                        <p>-- Based in México</p>
                    </div>
                    <div className="icons">
                        {Contacticons.map((icons, key) =>{
                            return(
                                <Link  to={{ pathname: `${icons.url}` }} target="_blank" key={key} className="icon-list">
                                    <motion.img whileHover={{ scale: 0.8 }}  src={`./assets/Contact/${icons.id}.svg`}  alt="img"/>
                                </Link>
                            );
                        })}
                        </div>
                </Col>
                <Col sm>
                   
                    <motion.div className="resume" whileHover={{scale: 1.04}}>
                    <h4>Resume</h4>
                    </motion.div>
                </Col>
            </Row>
            </div>
        </motion.div>
    );
}
export default Contacto;
