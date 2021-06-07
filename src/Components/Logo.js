import React from 'react';
import { Logos } from "../Data/data-ngk";

import Typical from 'react-typical';
import '../style/Logo.css';

const Logo = () => {

    return (
    <div className='Logo'>

        {Logos.map((Home, key) => {
            return(

                <div key={key} className="Home">

                  <img src={Home.log} className="logo"  alt="lk"></img>
                  <h3 className="word w1">{Home.text1}</h3>
                  <h3 className="word w2">{Home.text2}</h3>
                  <h3 className="word w3">{Home.text3}</h3>
                  <h3 className="word w4">{Home.text4}</h3>
                  <h3 className="word w5">{Home.text5}</h3>

                   <div className="de">
                   <h2>{Home.SubTittle}</h2>
                   <h3>{Home.text}</h3>
                    <Typical steps={[Home.ngeek, 1000, Home.signature, 3000]} loop={Infinity} wrapper="p"></Typical>
                   </div>
                   
                </div>

            );
        })}
    </div>
    );
};

export default Logo;
