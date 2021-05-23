import React from 'react';
import { Logos } from "../Data/data-ngk";
import {  motion } from "framer-motion";
import Typical from 'react-typical';

const Logo = () => {

    return (
    <div className='App-header'>

        {Logos.map((Home, key) => {
            return(

                <motion.div key={key} className="Home"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}>

                  <img src={Home.log} className="float-center logo"  alt="lk"></img>
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
                   
                </motion.div>

            );
        })}
    </div>
    );
};

export default Logo;
