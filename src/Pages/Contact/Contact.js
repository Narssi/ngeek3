import React from 'react';
import './Contact.css';
import { ContactData } from "../../Data/data-ngk";
import {  motion } from "framer-motion";
//import { git } from "../../Assets/git.svg"
import { Link } from 'react-router-dom';

const Contacto = () => {
    return(
        <div className='Contacto'>

            <div>
                <h1>Contact</h1>
            </div>

            <div className="icons">
            {ContactData.map((icons, key) =>{
                        return(

                            <Link  to={{ pathname: "https://www.linkedin.com/in/ngeekreyes/" }} target="_blank" key={key} className="icons">
                                <motion.img whileHover={{ scale: 0.8 }}  src={`./assets/Contact/${icons.id}.svg`} className="rounded float-left"  alt="img"/>
                            </Link>
                        );
                    })}
            </div>

        </div>
    );
}
export default Contacto;
