
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

    console.log(project)

    if(!project){
        return <Redirect to="/" />
    }

    const {
       
    
        picture2,
        Overview,
        Understanding,
        Research,
        Design,
        Flow,
        Prototype,
    } = project;
    return(
        
        <motion.div className='ListProcess'>
            <div className="back bodyinfo1"  style={{backgroundImage:`linear-gradient(to bottom,rgba(255, 255, 255, 0.38),rgba(255, 255, 255, 0.993)),url(${picture2})`}}>
                
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