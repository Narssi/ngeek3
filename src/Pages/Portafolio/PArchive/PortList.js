
import React from 'react';
//import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {AxityMobile, AxityWebP, AxityWebT, OmnibusMexico} from '../../../Data/data-proyectos';
import './Port-List.css';
import { motion } from "framer-motion";
const PortList = () => {

    return(
        <motion.div className='PortafolioList' initial={{opacity:0}} animate={{opacity:1}}>

        <div className='headerp'>
       
        <h1>Portafolio</h1>
        </div>
        <div className='body-portafiolio'>

        <div className='npx'>
        <Row>
          {AxityMobile.map((axm, key) =>{
              return(
                  <Col sm className="setting2" key={key} style={{backgroundImage:`url(${axm.picture})`}}>
                      <div className="InfoP" >
                          <img src={`./assets/portafolio/${axm.id}.svg`} className="rounded"  alt="img"/>
                          <h1>{axm.text}</h1>
                          <h2>{axm.text2}</h2>
                          <h2>{axm.text3}</h2>
                          <div className="button-L" style={{backgroundColor:'black'}}>{axm.button}</div>
                      </div>
                     
                  </Col>
              );
          })} 
        </Row>
        
        </div>
        <div className='npx'>
        <Row>
          {AxityWebP.map((axm, key) =>{
              return(
                  <Col sm className="setting2" key={key} style={{backgroundImage:`url(${axm.picture})`}}>
                      <div className="InfoP s" >
                          <h1>{axm.text}</h1>
                          <h2>{axm.text2}</h2>
                          <div className="button-L" style={{backgroundColor:'black'}}>{axm.button}</div>
                      </div>
                     
                  </Col>
              );
          })} 
        </Row>
        </div>
        
        <div className='npx'>
        <Row>
          {AxityWebT.map((axm, key) =>{
              return(
                  <Col sm className="setting2" key={key} style={{backgroundImage:`url(${axm.picture})`}}>
                      <div className="InfoP" >
                          <h1>{axm.text}</h1>
                          <h2>{axm.text2}</h2>
                          <div className="button-L" style={{backgroundColor:'black'}}>{axm.button}</div>
                      </div>
                      
                  </Col>
              );
          })} 
        </Row>

        </div>
        <div className='npx'>
              
      
        <Row>
          {OmnibusMexico.map((axm, key) =>{
              return(
                  <Col sm className="setting2" key={key} style={{backgroundImage:`url(${axm.picture})`}}>
                      <div className="InfoP" >
                          <h1>{axm.text}</h1>
                          <h2>{axm.text2}</h2>
                          <div className="button-L" style={{backgroundColor:'black'}}>{axm.button}</div>
                      </div>
                 
                  </Col>
              );
          })} 
        </Row>
        </div>
      
        
        <div>
            <h1>PRÓXIMAMENTE MÁS</h1>
        </div>
      
     
        </div>
       
       
      </motion.div>
    );

};

export default PortList;