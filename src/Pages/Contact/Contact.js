import React from 'react';
import './Contact.css';
import { ContactData } from "../../Data/data-ngk";
import {  motion } from "framer-motion";

const Contacto = () => {
    return(
        <div className='Contacto'>

            <div>
                <h1>Contacto</h1>
            </div>

            <div className="icons">
            {ContactData.map((icons, key) =>{
                        return(

                            <li key={key} className="icons">
                                <motion.img whileHover={{ scale: 0.8 }}  src={`./assets/Contact/${icons.id}.svg`} className="rounded float-left"  alt="img"/>

                            </li>
                        );
                    })}
            </div>

        </div>
    );
}
export default Contacto;
