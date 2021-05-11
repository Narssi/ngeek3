import React, {Component} from 'react';
//import Reconocimientos from '../Pages/Reconocimiento/Reconocimientos';
//import Portafolio from '../Pages/Portafolio/Portafolio';
//import Habilidades from '../Pages/Habilidades/Habilidades';
//import Contacto from '../Pages/Contacto/Contacto';
//import Footer from '../Components/Footer';
import NBmenu from '../Components/Navbar';
import Home from '../Pages/Portfolio/Portfolio';
//import Experiencia from '../Pages/Experiencia/Experiencia';

class AppRouter extends Component{

 render(){
    return (
        <div>
        <NBmenu/>
        <Home/>
        </div>

      );
 };

}


export default AppRouter;
