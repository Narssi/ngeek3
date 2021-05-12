import React from 'react';
import './App.css';
import './style/body.css';
//import PortList from './Pages/Portafolio/PArchive/PortList';
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
        <Route path="/about" component={About}></Route>
        <Route path="/rewards" component={Rewards}></Route>
      </Switch>
     </div>
    </Router>
  );
 
 
}

export default App;
