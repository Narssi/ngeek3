import React from 'react';
import './Rewards.css'
import { motion } from "framer-motion";
//import { Link } from 'react-router-dom';
import {RewardsData, princinpal, Microsoft, Developer} from '../../Data/data-rewards';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Logo from '../../Components/Logo';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const Rewards = () => (
    <div className='Reconocimientos'>
        <motion.div initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }} className="Adwards">
        <Logo/>
        <div className='back1'>
        </div>
          {princinpal.map((diplom, key)=> {
              return(
            <div key={key} className="popu">
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
        <Tabs defaultActiveKey="Design" transition={false} id="demo">
            <Tab eventKey="Design" title="Design">
                <div className="rwbody">
                <Row>
                {RewardsData.map((diplom, key) =>{
                    return(
                        <Col key={key}  md={12} lg={4}>
                            <Card>
                                <Card.Img variant="top" className="backsc" style={{backgroundImage:`linear-gradient(to bottom,rgba(255, 255, 255,0),rgba(255, 255, 255, 0)),url(${diplom.picture})`}}/>
                                <Card.Body>
                                <Card.Title>{diplom.text}</Card.Title>
                                <Card.Text>
                                    {diplom.text2}
                                </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                                </Card.Footer>
                            </Card>
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
                                <Card>
                                    <Card.Img variant="top" className="backsc" style={{backgroundImage:`linear-gradient(to bottom,rgba(255, 255, 255,0),rgba(255, 255, 255, 0)),url(${diplom.picture})`}}/>
                                    <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This card has even longer content than the first to
                                        show that equal height action.
                                    </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                    </Card.Footer>
                                </Card>
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
                                        <Card>
                                            <Card.Img variant="top" className="backsc" style={{backgroundImage:`linear-gradient(to bottom,rgba(255, 255, 255,0),rgba(255, 255, 255, 0)),url(${diplom.picture})`}}/>
                                            <Card.Body>
                                            <Card.Title>Card title</Card.Title>
                                            <Card.Text>
                                                This is a wider card with supporting text below as a natural lead-in to
                                                additional content. This card has even longer content than the first to
                                                show that equal height action.
                                            </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>
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
