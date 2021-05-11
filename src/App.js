import React from 'react';
import './App.css';
import './style/body.css';
//import PortList from './Pages/Portafolio/PArchive/PortList';
import AppRouter  from './routes/AppRouter';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App (){

  return (
    <Router>
     <div className="App">
       
     <Switch>
       
        <Route path="/" exact component={AppRouter}></Route>
        
      </Switch>
     </div>
    </Router>
  );
 
 
}

export default App;
