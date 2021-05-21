
import React from 'react';
//import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import {MobileApp} from '../../../Data/data-proyectos';
import './Port-List.css';
import { motion } from "framer-motion";
import { Redirect, useParams } from 'react-router-dom';
import { getProjectById } from '../../../selectors/getProjectById';
//import { CardDetails } from '../../../Components/CardDetails';


const PortList = () => {

    

    const {projectid} = useParams();
    const project = getProjectById( projectid );


    if(!project){
        return <Redirect to="/" />
    }

    const {
        tittle,
        date,
        category,
        backg,
        Overview,
     
    } = project;
    
    return(
        
        <motion.div className='ListProcess'>
            <div className="back"  style={{backgroundImage:`linear-gradient(to bottom,rgba(255, 255, 255, 0.50),rgba(255, 255, 255, 1)),url(/${backg})`}}>
                <h1>{tittle}</h1>
                <p>{category}</p>
                <p>{date}</p>
            </div>




            <Row>
                <Col className="bodyinfo1">
                     <h1>{Overview}</h1>
                     </Col>
            </Row>
           

     
        </motion.div>
    );

};

export default PortList;