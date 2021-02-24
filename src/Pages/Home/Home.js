import React from 'react';
import '../../style/text.css';
import { Data } from "../../Data/data-ngk";
import {  AnimatePresence } from "framer-motion";

const Home = () => {
    return (
    <div className='App-header'>
        {Data.map((Home, key) => {
            return(
                <AnimatePresence initial={false} exitBeforeEnter>
                <div key={key} className="Home">
                    <h1>{Home.Tittle}</h1>
                    <h2>{Home.SubTittle}</h2>
                    <h3>{Home.text}</h3>
                    <p>{Home.ngeek}</p>
                </div>
                </AnimatePresence>
            );
        })}
    </div>
    );
};

export default Home;