import React from 'react';
import './Rewards.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { motion } from "framer-motion";
//import { Link } from 'react-router-dom';
import {RewardsData, princinpal, Microsoft, Developer} from '../../Data/data-rewards';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const Rewards = () => (
    <div className='Reconocimientos'>
        <motion.div initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
          
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
                <div className="flex-diplo">
                {RewardsData.map((diplom, key) =>{
                    return(
                        <div key={key} className="flex-cards" style={{backgroundImage:`linear-gradient(to bottom,rgba(40, 40, 43,0.9),rgba(40, 40, 43, 1)),url(${diplom.picture})`}}> 
                        </div>    
                    );
                })}
                </div>
            </Tab>
            <Tab eventKey="Microsoft" title="Microsoft" >
                <div className="flex-diplo">
                    {Microsoft.map((diplom, key) =>{
                        return(
                            <div key={key} className="flex-cards" style={{backgroundImage:`linear-gradient(to bottom,rgba(40, 40, 43,0.9),rgba(40, 40, 43, 1)),url(${diplom.picture})`}}> 
                            </div>    
                        );
                    })}
                </div>
            </Tab>
            <Tab eventKey="Developer" title="Developer" >
            <div className="flex-diplo">
                    {Developer.map((diplom, key) =>{
                        return(
                            <div key={key} className="flex-cards" style={{backgroundImage:`linear-gradient(to bottom,rgba(40, 40, 43,0.9),rgba(40, 40, 43, 1)),url(${diplom.picture})`}}> 
                            </div>    
                        );
                    })}
                </div>
            </Tab>
            </Tabs>
        </div> 
      
      </motion.div>
    </div>
);

export default Rewards;
