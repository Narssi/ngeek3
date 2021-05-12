import React from 'react';
import './Rewards.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";
//import { Link } from 'react-router-dom';
import {DiplomasData} from '../../Data/data-ngk';


const Rewards = () => (
    <div className='Reconocimientos'>
        <motion.div className='Reconocimiento' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
      <Row>
        {DiplomasData.map((diplom, key) =>{
            return(
                <Col sm className="setting" key={key} style={{backgroundImage:`url(${diplom.picture})`}}>
                    <div className="Info" >
                        <h1>{diplom.text}</h1>
                       
                    </div>
                    <div className="st"></div>
                </Col>
            );
        })}
      </Row>
      </motion.div>
    </div>
);

export default Rewards;
