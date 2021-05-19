
import React from 'react';
//import { Link } from 'react-router-dom';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
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
        picture,
       
    } = project;
    return(
        <motion.div className='ListProcess' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>

            <div className="" style={{backgroundImage:`url(${picture})`}}>
                <h1>{text}</h1>
                <h2>COMING SOON</h2>
                
            </div>
        
        </motion.div>
    );

};

export default PortList;