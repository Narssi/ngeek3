import React from 'react';
import './Contacto.css';
//import {ContactData} from '../../Data/data-contact';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FooterImg } from "../../Data/data-footer";

const Contacto = () => {
    return(
        <div className='Contacto'>
            <ul className="flex-container9">
                <li>
                    <h1>Contacto</h1>
                </li>
                <div className="icons">
                <Row >
                    {FooterImg.map((Footer, key) =>{
                        return(
                            <Col key={key} className="icons">
                                <img src={`./assets/footer/${Footer.id}.svg`} className="rounded float-left"  alt="img"/>
                            </Col>
                        );
                    })}
                </Row>    
                </div>
            </ul>   
        </div>
    );
}
export default Contacto;