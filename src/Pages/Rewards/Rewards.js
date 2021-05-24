import React from 'react';
import './Rewards.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";
//import { Link } from 'react-router-dom';
import {RewardsData, princinpal, Microsoft} from '../../Data/data-rewards';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Rewards = () => (
    <div className='Reconocimientos'>
        <motion.div className='' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
          
          {princinpal.map((diplom, key)=> {
              return(
                <div key={key}>
                <div className="Popular">
                    <img  src={`./assets/rewards/${diplom.id}.jpg`}  alt="img"/>   
                </div>
                <div className="Info">
                    <h1>Google - Certificate</h1>
                    <h2>UX Design</h2>
                    <p>2021</p>
                    
                </div>
            </div>
              );
          })}

        <div>
        <Tabs defaultActiveKey="home" transition={false} id="demo">
            <Tab eventKey="home" title="Home">
                <Row>
                {RewardsData.map((diplom, key) =>{
                    return(
                        <Col key={key} className="setting col-8 col-md-4" style={{backgroundImage:`linear-gradient(to bottom,rgba(40, 40, 43,0.9),rgba(40, 40, 43, 1)),url(${diplom.picture})`}}> 
                        </Col>
                        
                    );
                })}
                </Row>
            </Tab>
            <Tab eventKey="Microsoft" title="Microsoft" >
                <Row>
                {Microsoft.map((diplom, key) =>{
                    return(
                        <Col key={key} className="setting col-8 col-md-4" style={{backgroundImage:`linear-gradient(to bottom,rgba(40, 40, 43,0.9),rgba(40, 40, 43, 1)),url(${diplom.picture})`}}> 
                        </Col>
                        
                    );
                })}
                </Row>

            </Tab>
            <Tab eventKey="Developer" title="Developer" disabled>
            <Row>
                {RewardsData.map((diplom, key) =>{
                    return(
                        <Col key={key} className="setting col-8 col-md-4" style={{backgroundImage:`linear-gradient(to bottom,rgba(40, 40, 43,0.9),rgba(40, 40, 43, 1)),url(${diplom.picture})`}}> 
                        </Col>
                        
                    );
                })}
                </Row>
            </Tab>
            </Tabs>
        </div> 
      
      </motion.div>
    </div>
);

export default Rewards;
