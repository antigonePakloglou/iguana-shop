import '../App.css';
import './styles/Iguane.css';
import {Link} from "react-router-dom";
import { FaEye } from 'react-icons/fa';
import {importImages, concatImgName} from './fonctions';
import { useEffect, useState } from 'react';
import axios from 'axios';


export const Iguane = ({id,nom,refugeId} : IguaneProps) => { 
  //recupération des images
  const images = importImages(require.context('../../src/images/iguanes', false, /\.(png|jpe?g|svg)$/));
  let img = concatImgName(id);

  //recupération données
  let [ville, setVille] = useState([])
  let [page, setPage] = useState(1)

  //appel api  
  useEffect(() => {
    axios.get(`http://localhost:3000/api/refuge/${refugeId}`).then(resp => {
      setVille(resp.data);
    });
  }, [page]); 


    return (
  <>
        <div className="card textDescIguane" style={{width:200}}>
          <img src={images[img]}  alt="plat" style={{width:200, height : 150}}/>
          <span className='textNomIguane'>{nom}</span>
          <span className='textRefuge'>Refuge de <span className='textVille'>{ville['nom']}</span></span>
          <hr/>
          <Link to={`/iguane/${id}`} style={{color : '#302E2E' }}><button type="submit" className='boutonEye'><FaEye /></button></Link>
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
  refugeId: number;

  
}
