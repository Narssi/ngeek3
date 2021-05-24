
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
        tittle, Tittle1, Tittle2, Tittle4, Tittle6, Tittle8,
        Duration,
        Role,
        category,
        Responsabilities,Subttitle9,
        backg,
        Details,imgw,imglow,ImagehiGH,
        SubTittle2,Subtittle4,TittleEarly,textE,Participants,Location,Length,imgpersonas,
     
    } = project;
    
    return(  
        <motion.div>
            <div className="header"  style={{backgroundImage:`linear-gradient(to bottom,rgba(255, 255, 255, 0.50),rgba(255, 255, 255, 1)),url(/${backg})`}}>
                <h1>{tittle}</h1>           
            </div>
            <div className="conten">
                <div className="txtinfo">
                    <Row>
                        <Col className="kk">
                        <h4>Role : </h4><p>{Role}</p>
                        </Col>
                        <Col className="kk">
                        <h4>Category : </h4><p>{category}</p>
                        </Col>
                        <Col className="kk">
                        <h4>Duration : </h4><p>{Duration}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="derR"><h4>Responsabilities</h4><p>{Responsabilities}</p></Col>
                    </Row>
                </div>
               
               

               <div className='ListProcess'>
                <div className='ListProcesssmall'>
                    <Row>
                            <Col className="titl"> <h3>{Tittle1}</h3></Col>
                        </Row>
                        <Row>
                            <Col className="info">
                                <div className="fist-module">
                                    <div className="sr"><h1>Problem</h1><p>{Details}</p></div>
                                </div>
                            </Col>
                            <Col className="info">
                                <div className="fist-module">
                                    <div className="sr"><h1>Solution/Goal</h1><p>{SubTittle2}</p></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                    <Col className="titl"> <h3>{Tittle2}</h3></Col>
                    </Row>
                    <Row>
                        <Col className="info">
                            <div className="fist-module1">
                                <div className="sr"><h1>Summary</h1><p>{Subtittle4}</p></div>
                            </div>
                        </Col>
                        <Col className="info">
                            <div className="fist-module1">
                                <div className="sr">
                                    <h1>{TittleEarly}</h1>
                                    <p>{textE}</p>
                                    <p>{Participants}</p>
                                    <p>{Location}</p>
                                    <p>{Length}</p>
                                    </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="titl"> <h3>{Tittle4}</h3></Col>
                    </Row>
                    <Row>
                    <Col>
                            <div>
                                <div className="demoss"  style={{backgroundImage:`url(/${imgpersonas})`}} ></div>
                            </div>
                        </Col>
                    </Row>
                </div>


                <div className="ListProcesmedium">
                    <Row>
                        <Col className="info">
                        <h3>{Tittle6}</h3>
                            <div >
                            <div className="demoss1"  style={{backgroundImage:`url(/${imgw})`}} ></div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col className="titl"> <h3>{Tittle8}</h3></Col>
                </Row>
                <Row>
                    <Col className="info">
                        <div>
                        <div className="demoss1"  style={{backgroundImage:`url(/${imglow})`}} ></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="titl"> <h3>{Subttitle9}</h3></Col>
                </Row>
                
                </div>

                <div className="ListProcess">
                
                <Row>
                    <Col className="info">
                        <div>
                        <div className="demoss1"  style={{backgroundImage:`url(/${ImagehiGH})`}} ></div>
                        </div>
                    </Col>
                </Row>
                </div>
               </div>
            </div>
        </motion.div>
    );

};

export default PortList;