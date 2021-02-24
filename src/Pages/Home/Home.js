import React from 'react';
import '../../style/text.css';
import { Data } from "../../Data/data-ngk";
import {  motion } from "framer-motion";

const Home = () => {
    return (
    <div className='App-header'>
    
        {Data.map((Home, key) => {
            return(
               
                <motion.div key={key} className="Home"  
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}>
                    <h1>{Home.Tittle}</h1>
                    <h2>{Home.SubTittle}</h2>
                    <h3>{Home.text}</h3>
                    <p>{Home.ngeek}</p>
                </motion.div>
               
            );
        })}
    </div>
    );
};

export default Home;