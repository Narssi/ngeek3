import React from 'react';
import './App.css';

import PortList from './Pages/Portfolio/DetailsProject/PortList';
import MicrosoftList from './Pages/Portfolio/MicrosoftStudent/MicrosoftList';
import CompanyList from './Pages/Portfolio/CompanyList/CompanyList';
import TestList from './Pages/Portfolio/TestList/TestList';
import PrototypeList from './Pages/Portfolio/Prototypes/Prototypes'
//import AppRouter  from './routes/AppRouter';

import NBmenu from './Components/Navbar';
import About from './Pages/About/About';
import Portafolio from './Pages/Portfolio/Portfolio';
import Rewards from  './Pages/Rewards/Rewards';
import Contact from  './Pages/Contact/Contact';
import Footer from  './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollRestoration from 'react-scroll-restoration'

function App (){

  return (
    <Router>
    <ScrollRestoration />
     <div className="App">
     <NBmenu/>
     <Switch>
        <Route path="/" exact component={Portafolio}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/rewards" component={Rewards}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/google/:projectid" component={PortList}></Route>
        <Route exact path="/company/:projectid" component={CompanyList}></Route>
        <Route exact path="/testproject/:projectid" component={TestList}></Route>
        <Route exact path="/prototype/:projectid" component={PrototypeList}></Route>
        <Route exact path="/microsoft/:projectid" component={MicrosoftList}></Route>
      </Switch>
      <Footer/>
     </div>
    </Router>
  );
 
 
}

export default App;
