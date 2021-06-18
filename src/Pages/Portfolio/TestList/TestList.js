
import React from 'react';
//import { Link } from 'react-router-dom';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
//import {MobileApp} from '../../../Data/data-proyectos';
import '../DetailsProject/Port-List.css';
import { motion } from "framer-motion";
import { Redirect, useParams } from 'react-router-dom';
import { getProjectById4 } from '../../../selectors/getProjectById';
//import { CardDetails } from '../../../Components/CardDetails';

const TestList = () => {

    const {projectid} = useParams();
    const testproject = getProjectById4( projectid );
    if(!testproject){
        return <Redirect to="/" />
    }
    const {
        tittle,
        Overview,
        picture

    } = testproject;
    
    return(  
        <motion.div>
            <div className="head-port"  style={{backgroundImage:`linear-gradient(to bottom,rgba(244, 244, 242, 0.50),rgba(255, 255, 255, 1)),url(/${picture})`}}>
                <h1>{tittle}</h1>           
            </div>
            <div className="conten">
                <div className="txtinfo">
                    <h1>{Overview}</h1>
                </div>
            </div>
        </motion.div>
    );

};

export default TestList;