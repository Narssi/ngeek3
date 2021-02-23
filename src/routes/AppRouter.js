import React, {Component} from 'react';
import Reconocimientos from '../Pages/Reconocimiento/Reconocimientos';
import Portafolio from '../Pages/Portafolio/Portafolio';
//import Habilidades from '../Pages/Habilidades/Habilidades';
import Contacto from '../Pages/Contacto/Contacto';
import Footer from '../Components/Footer/Footer';
import NBmenu from '../Components/NavBar/Navbar';
import Home from '../Pages/Home/Home';
import Experiencia from '../Pages/Experiencia/Experiencia';

class AppRouter extends Component{
 
 render(){
    return (
        <div>
         <NBmenu/>
        <Home/>
        <Portafolio/>
        <Reconocimientos/>
        <Experiencia/>
  
        <Contacto/>
        <Footer/>
        </div>
       
      );
 };

}


export default AppRouter;
