import React from 'react';
import '../style/Footer.css';
import { Data } from "../Data/data-ngk";

const Footer = () => {
    return (
    <div className='Footer'>

        

        {Data.map((Footer, key) =>{
            return(
                <div key={key}>
                    <div  className='corp'>
                        <h1>{Footer.web}</h1>
                        <h2>{Footer.Register} {new Date().getFullYear()}</h2>
                        <p>{Footer.version}</p>
                    </div>
                </div>
            );
        })}

    </div>
    );
};

export default Footer;

