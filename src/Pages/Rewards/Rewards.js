import React from 'react';
import './Rewards.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";
//import { Link } from 'react-router-dom';
import {RewardsData} from '../../Data/data-rewards';


const Rewards = () => (
    <div className='Reconocimientos'>
        <motion.div className='Reconocimiento' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
      <Row>
        {RewardsData.map((diplom, key) =>{
            return(
                <Col className="setting col-8 col-md-4" key={key} style={{backgroundImage:`url(${diplom.picture})`}}>
                    <div className="Info" >
                       
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
