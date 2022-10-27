import '../App.css';
import './styles/Iguane.css';
import Catherine from '../images/catherine.jpg';
import {Link} from "react-router-dom";
import { FaEye } from 'react-icons/fa';



export const Iguane = ({}) => { 
    return (
  <>
     <br/>
     <h1 className='titrePage'>Les iguanes disponibles à l'adoption</h1>
        <div className="testeu textDescIguane" style={{width:200}}>
        <img src={Catherine} alt="plat" style={{width:180}}/>
        <span className='textNomIguane'>Catherine</span>
        <br/>
      Refuge de <span className='textVille'>Lyon</span>
   
      <hr/>
      <Link to={`/iguane/catherine`} style={{color : '#302E2E' }}><button type="submit" className='boutonEye'><FaEye /></button></Link>
        </div>
  </>
);
}
