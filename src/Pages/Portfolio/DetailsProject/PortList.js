
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

    const {id} = useParams();
    const project = getProjectById( id );

    if(!project){
        return <Redirect to="/" />
    }

    const {
        text,
        Overview,
        Understanding,
        Research,
        Design,
        Flow,
        Prototype,



       
       
    } = project;
    return(
        <motion.div className='ListProcess' initial={{opacity:0, y: 0}} animate={{opacity:1, y: 0 }}>

            <Row>
                <Col className="bodyinfo"> <h1>{text}</h1></Col>
            </Row>
            <Row>
                <Col className="bodyinfo">
                     <h1>{Overview}</h1>
                     </Col>
                
            </Row>
            <Row>
                <Col className="bodyinfo"> <h1>{Understanding}</h1></Col>
            </Row>
            <Row>
                <Col className="bodyinfo"> <h1>{Research}</h1></Col>
            </Row>
            <Row>
                <Col className="bodyinfo"> <h1>{Design}</h1></Col>
            </Row>
            <Row>
                <Col className="bodyinfo"> <h1>{Flow}</h1></Col>
            </Row>
            <Row>
                <Col className="bodyinfo"> <h1>{Prototype}</h1></Col>
            </Row>

     
        </motion.div>
    );

};

export default PortList;