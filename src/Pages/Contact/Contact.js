import React from 'react';
import './Contact.css';
import { ContactData } from "../../Data/data-ngk";
import {  motion } from "framer-motion";
//import { git } from "../../Assets/git.svg"
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../Components/Logo';

const Contacto = () => {
    return(
        <motion.div className='Contacto' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
            <h1>Contact</h1>
            <Row className="Bodycontact">
                <Col sm>
                <Logo/>
                    <div className="tittlecontact">
                        <h2>Available for questions, collaborations, projects</h2>
                        <p>-- Based in México</p>
                    </div>
                    <div className="icons">
                        {ContactData.map((icons, key) =>{
                                    return(

                                        <Link  to={{ pathname: "https://www.linkedin.com/in/ngeekreyes/" }} target="_blank" key={key} className="icons">
                                            <motion.img whileHover={{ scale: 0.8 }}  src={`./assets/Contact/${icons.id}.svg`} className="rounded float-left"  alt="img"/>
                                        </Link>
                                    );
                                })}
                        </div>
                </Col>
                <Col>
                   
                    <motion.div className="resume" whileHover={{scale: 1.04}}>
                    <h4>Resume</h4>
                    </motion.div>
                </Col>
            </Row>
           

        </motion.div>
    );
}
export default Contacto;
