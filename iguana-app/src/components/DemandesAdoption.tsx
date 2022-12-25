import '../App.css';
import './styles/DemandesAdoption.css';
import {importImages, concatImgName} from './fonctions';
import { useState } from 'react';



export const DemandeAdoption = ({id,email,telephone, numero_declaration, iguaneId} : DemandeProps) => { 

  

  
    return (
  <>
        <div className="card textDescIguane" style={{width:400, textAlign: 'left'}}>
         
          <h4 className='textTitreDemande'>Email :  <span className='textDemande'>{email}</span></h4>
         
          <h4 className='textTitreDemande'>Télephone :  <span className='textDemande'>0{telephone}</span></h4>
         
          <h4 className='textTitreDemande'>Numéro de déclaration :  <span className='textDemande'>{numero_declaration}</span></h4>
         
          <h4 className='textTitreDemande'>Iguane id :  <span className='textDemande'>{iguaneId}</span></h4>
         
          <hr/>
         
        </div>
  </>
);
}

export interface DemandeProps {
  id: number;
  email: string;
  telephone : number;
  numero_declaration: number;
  iguaneId : number;
 

  
}
