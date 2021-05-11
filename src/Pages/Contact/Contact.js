import React from 'react';
import './Contacto.css';
import { ContactData } from "../../Data/data-ngk";
import {  motion } from "framer-motion";

const Contacto = () => {
    return(
        <div className='Contacto'>
            <ul className="flex-container9">
                <li>
                    <motion.h1 whileHover={{ scale: 0.8 }}>Contacto</motion.h1>
                </li>
                <div className="icons">
                < >
                    {ContactData.map((icons, key) =>{
                        return(

                            <li key={key} className="icons">
                                <motion.img whileHover={{ scale: 0.8 }}  src={`./assets/contacto/${icons.id}.svg`} className="rounded float-left"  alt="img"/>

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
