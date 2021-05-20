import React from 'react';
import './Rewards.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion";
//import { Link } from 'react-router-dom';
import {RewardsData} from '../../Data/data-rewards';


const Rewards = () => (
    <div className='Reconocimientos'>
        <motion.div className='Reconocimiento' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
      <Row>
        {RewardsData.map((diplom, key) =>{
            return(
                <Col className="setting col-8 col-md-4" key={key}>
                    <div className="Info" >
                       
                    </div>
                    <div className="st"></div>

                    <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>


                </Col>
            );
        })}
      </Row>
      </motion.div>
    </div>
);

export default Rewards;
