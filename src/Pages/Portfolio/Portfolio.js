import React from 'react';
import './Portfolio.css';
import { motion } from "framer-motion";
import {GoogleUX, MicrosoftStudent,TestJobs,Prototypes,CompanyProject} from '../../Data/data-proyectos';
import {CardProject} from '../../Components/CardP';
import {CardMS} from '../../Components/CardMS';
import {CardCom} from '../../Components/CardCom';
import { CardTest } from '../../Components/CardTest';
import {CardProto} from '../../Components/CardProto';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from '../../Components/Logo';
const Portafolio = () => {



    return (
    <motion.div className='portafolioB' initial={{opacity:0, y: 40}} animate={{opacity:1, y: 0 }}>
            <Logo/>
            <div className='backs'>
            </div>
            <div className='portfolio'>
                <div className="BoxTittle">
                    <h1>UX Design Google</h1>
                    <h2>Projects</h2>
                </div>
                <Row >
                    {GoogleUX.map((google, key) =>(
                        <Col  md={12} lg={6} key={key}>
                            <CardProject
                                key={google.id}
                                {...google}
                            />
                        </Col> 
                    ))
                    }
                </Row>
               
            </div>
            <div className='portfolio'>
                <div className="BoxTittle">
                    <h1>Company Projects</h1>
                    <h2>Projects</h2>
                </div>
                <Row >
                    {CompanyProject.map((company, key) =>(
                        <Col  md={12} lg={6} key={key}>
                            <CardCom
                                key={company.id}
                                {...company}
                            />
                        </Col> 
                    ))
                    }
                </Row>
               
            </div>
            <div className='portfolio'>
                <div className="BoxTittle">
                    <h1>TestJobs</h1>
                    <h2>Projects</h2>
                </div>
                <Row >
                    {TestJobs.map((testproject, key) =>(
                        <Col  md={12} lg={6} key={key}>
                            <CardTest
                                key={testproject.id}
                                {...testproject}
                            />
                        </Col> 
                    ))
                    }
                </Row>
               
            </div>
            <div className='portfolio'>
                <div className="BoxTittle">
                    <h1>Prototypes</h1>
                    <h2>Projects</h2>
                </div>
                <Row >
                    {Prototypes.map((prototype, key) =>(
                        <Col  md={12} lg={6} key={key}>
                            <CardProto
                                key={prototype.id}
                                {...prototype}
                            />
                        </Col> 
                    ))
                    }
                </Row>
            </div>
            <div className='portfolio'>
                <div className="BoxTittle">
                    <h1>Microsoft Student Partners</h1>
                    <h2>Projects</h2>
                </div>
                <Row >
                    {MicrosoftStudent.map((microsoft, key) =>(
                        <Col  md={12} lg={6} key={key}>
                            <CardMS
                                key={microsoft.id}
                                {...microsoft}
                            />
                        </Col> 
                    ))
                    }
                </Row>
               
            </div>
    </motion.div>
    
    );
};

export default Portafolio;
