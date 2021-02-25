import React, { useEffect} from 'react';
import './App.css';
import './style/body.css';
import PortList from './Pages/Portafolio/PArchive/PortList';
import AppRouter  from './routes/AppRouter';
import Diplomas from './Pages/Reconocimiento/diplomas/Diplomas';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga';
function App (){

 


  useEffect(() => {
  
    ReactGa.initialize('G-7NMDQ2SEWX');

    ReactGa.pageview(AppRouter);
  
  }, [])

  return (
    <Router>
    
     <div className="App">
     <Switch>
        <Route path="/" exact component={AppRouter}></Route>
        <Route path="/portlist" component={PortList}></Route>
        <Route path="/diplomas" component={Diplomas}></Route>
      </Switch>
     </div>
    </Router>
  );
 
 
}

export default App;
