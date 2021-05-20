
import React from 'react';
//import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import {MobileApp} from '../../../Data/data-proyectos';
import './Port-List.css';
import { motion } from "framer-motion";
import { Redirect, useParams } from 'react-router-dom';
import { getProjectById } from '../../../selectors/getProjectById';



const PortList = () => {

    

    const {projectid} = useParams();
    const project = getProjectById( projectid );


    if(!project){
        return <Redirect to="/" />
    }

    const {
       
       
        picture,
        Overview,
        Understanding,
        Research,
        Design,
        Flow,
        Prototype,
    } = project;
    return(
        
        <motion.div className='ListProcess'>
            <div className="back bodyinfo1"  style={{backgroundImage:`url(${picture})`}}>
              
                
            </div>
            
        
            <Row>
                <Col className="bodyinfo1">
                     <h1>{Overview}</h1>
                     </Col>
                
            </Row>
            <Row>
                <Col className="bodyinfo"> <h1>{Understanding}</h1></Col>
            </Row>
            <Row>
                <Col className="bodyinfo1"> <h1>{Research}</h1></Col>
            </Row>
            <Row>
                <Col className="bodyinfo"> <h1>{Design}</h1></Col>
            </Row>
            <Row>
                <Col className="bodyinfo1"> <h1>{Flow}</h1></Col>
            </Row>
            <Row>
                <Col className="bodyinfo"> <h1>{Prototype}</h1></Col>
            </Row>
           

     
        </motion.div>
    );

};

export default PortList;