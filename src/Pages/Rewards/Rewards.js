import React from 'react';
import './Rewards.css'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import {RewardsData, princinpal, Microsoft, Developer,GoogleUX,linkbtn} from '../../Data/data-rewards';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Logo from '../../Components/Logo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Rewards = () => (
    <div className='Reconocimientos'>
        <motion.div initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }} className="Adwards">
        <Logo/>
        <div className='back1'>
        {princinpal.map((diplom, key)=> {
              return(
                <div key={key} className="popu">  
                   
                    <div className="Popular">
                        <img  src={`./assets/rewards/${diplom.id}.png`}  alt="img"/>   
                        <div className="Info">
                            <h1>Google - Certificate</h1>
                            <h2>UX Design</h2>
                            <p>2021</p>
                        </div>
                        <div>
                            {linkbtn.map((buttons, key) =>{
                                return(
                                    <Link  to={{ pathname: `${buttons.url}` }} target="_blank" key={key} >
                                        <button className="btnlink">View Certificate</button>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
              );
          })}
        </div>
        <div>
            <Tabs defaultActiveKey="GoogleUX" transition={false} id="demo">
            <Tab eventKey="GoogleUX" title="Google UX">
                    <div className="rwbody">
                    <Row>
                    {GoogleUX.map((diplom, key) =>{
                        return(
                            <Col  key={key}  md={12} lg={4}>
                                <div  className="card-02">

                                    <div className="imgstyle" style={{backgroundImage:`linear-gradient(to bottom,rgba(0, 0, 0,0),rgba(255, 255, 255, 0)),url(${diplom.picture})`}}>   
                                    </div>
                                    
                                    <div className="info-dip">
                                        <h1>{diplom.text}</h1>
                                        <p>
                                            {diplom.text2}
                                        </p>
                                        
                                    </div>
                                    <div className="txt-title">
                                            <small>{diplom.date}</small>
                                        </div>
                        
                                </div>
                            </Col>
                    
                        );
                    })}
                        </Row>
                    </div>
                </Tab>
                <Tab eventKey="Design" title="Design">
                    <div className="rwbody">
                    <Row>
                    {RewardsData.map((diplom, key) =>{
                        return(
                            <Col  key={key}  md={12} lg={4}>
                                <div  className="card-02">

                                    <div className="imgstyle" style={{backgroundImage:`linear-gradient(to bottom,rgba(0, 0, 0,0),rgba(255, 255, 255, 0)),url(${diplom.picture})`}}>   
                                    </div>
                                    
                                    <div className="info-dip">
                                        <h1>{diplom.text}</h1>
                                        <p>
                                            {diplom.text2}
                                        </p>
                                        
                                    </div>
                                    <div className="txt-title">
                                            <small>{diplom.date}</small>
                                        </div>
                        
                                </div>
                            </Col>
                    
                        );
                    })}
                        </Row>
                    </div>
                </Tab>
                    <Tab eventKey="Microsoft" title="Microsoft" >
                        <div className="rwbody">
                            <Row>
                            {Microsoft.map((diplom, key) =>{
                                return(
                                <Col key={key}  md={12} lg={4}>
                                    <div  className="card-02">

                                    <div className="imgstyle" style={{backgroundImage:`linear-gradient(to bottom,rgba(0, 0, 0,0),rgba(255, 255, 255, 0)),url(${diplom.picture})`}}>   
                                    </div>

                                    <div className="info-dip">
                                        <h1>{diplom.text}</h1>
                                        <p>
                                            {diplom.text2}
                                        </p>
                                        <div className="txt-title">
                                            <small>{diplom.date}</small>
                                        </div>
                                    </div>

                                    </div>
                                </Col>    
                                );
                            })}
                            </Row>
                        </div>
                    </Tab>
                    <Tab eventKey="Events" title="Events" >
                        <div className="rwbody">
                            <Row>
                                {Developer.map((diplom, key) =>{
                                    return(
                                        <Col key={key}  md={12} lg={4}>
                                        <div  className="card-02">

                                            <div className="imgstyle" style={{backgroundImage:`linear-gradient(to bottom,rgba(0, 0, 0,0),rgba(255, 255, 255, 0)),url(${diplom.picture})`}}>   
                                            </div>

                                            <div className="info-dip">
                                                <h1>{diplom.text}</h1>
                                                <p>
                                                    {diplom.text2}
                                                </p>
                                                <div className="txt-title">
                                                    <small>{diplom.date}</small>
                                                </div>
                                            </div>

                                            </div>
                                        </Col>        
                                    );
                                })}
                            </Row>
                        </div>
                    </Tab>
            </Tabs>
            </div> 
        
        </motion.div>
        </div>
);

export default Rewards;
