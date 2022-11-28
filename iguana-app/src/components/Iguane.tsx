import '../App.css';
import './styles/Iguane.css';
import Catherine from '../images/catherine.jpg';
import {Link} from "react-router-dom";
import { FaEye } from 'react-icons/fa';



export const Iguane = ({id,nom,refuge} : IguaneProps) => { 
    return (
  <>
        <div className="testeu textDescIguane" style={{width:200}}>
        <img src={Catherine} alt="plat" style={{width:180}}/>
        <span className='textNomIguane'>{nom}</span>
        <span>{id}</span>
        <br/>
      Refuge de <span className='textVille'>{refuge}</span>
   
      <hr/>
      <Link to={`/iguane/catherine`} style={{color : '#302E2E' }}><button type="submit" className='boutonEye'><FaEye /></button></Link>
        </div>
  </>
);
}

export interface IguaneProps {
  id: number;
  nom: string;
  couleur : string;
  taille: number;
  poids : number;
  refuge : string;
  
}
