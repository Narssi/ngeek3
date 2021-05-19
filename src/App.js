import React from 'react';
import './App.css';

import PortList from './Pages/Portfolio/DetailsProject/PortList';
//import AppRouter  from './routes/AppRouter';

import NBmenu from './Components/Navbar';
import About from './Pages/About/About';
import Portafolio from './Pages/Portfolio/Portfolio';
import Rewards from  './Pages/Rewards/Rewards';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App (){

  return (
    <Router>
     <div className="App">
     <NBmenu/>
     <Switch>
        <Route path="/" exact component={Portafolio}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/rewards" component={Rewards}></Route>
        <Route exact path="/project/:id" component={PortList}></Route>
      </Switch>
     </div>
    </Router>
  );
 
 
}

export default App;
