import React from 'react';
import './Contacto.css';
import { ContactData } from "../../Data/data-ngk";

const Contacto = () => {
    return(
        <div className='Contacto'>
            <ul className="flex-container9">
                <li>
                    <h1>Contacto</h1>
                </li>
                <div className="icons">
                < >
                    {ContactData.map((icons, key) =>{
                        return(
                            <li key={key} className="icons">
                                <img src={`./assets/contacto/${icons.id}.svg`} className="rounded float-left"  alt="img"/>
                            </li>
                        );
                    })}
                </>    
                </div>
            </ul>   
        </div>
    );
}
export default Contacto;