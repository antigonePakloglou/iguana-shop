import '../App.css';
import './styles/DemandesAdoption.css';
import { FaCheckCircle } from 'react-icons/fa';
import {useNavigate } from "react-router-dom";
import axios from 'axios';



export const DemandeAdoption = ({id,email,telephone, numero_declaration, iguaneId, isEligible} : DemandeProps) => { 

  let navigate = useNavigate()
  //valide l'egilibilite de la demande
  function isEligibleCheckRequest (){
   let demandeAdoptionEligibe  = {
      email : email,
      telephone : telephone,
      numero_declaration : numero_declaration,
      iguaneId : iguaneId,
      isEligible : true
    }
      
    async function eligibleDemandeAdoption() {
        await axios.put(`http://localhost:3000/api/demandeAdoption/${id}`, demandeAdoptionEligibe);
        navigate('/adminGestionAdoptions');
    }
    eligibleDemandeAdoption();  
  }

  //affichage etat demandes adoptions
  let affichage, text, bouton;
  
  if(isEligible == true){
    affichage = <span className='textDemande' style={{color:'green'}}>VALIDÉE</span>;
    text =  <span style={{color: 'grey'}}>Valider la demande <br/></span>;
    bouton =  <button type="submit" style={{marginBottom : '5px'}} disabled  onClick={ e => {e.preventDefault(); isEligibleCheckRequest() }}><FaCheckCircle /></button>;
    
   
  } else {
    affichage =  <span className='textDemande' style={{color:'purple'}}>Attente</span>;
    text = <span>Valider la demande <br/></span>;
    bouton =  <button type="submit" className='boutonEye'  onClick={ e => {e.preventDefault(); isEligibleCheckRequest() }}><FaCheckCircle /></button>;
  }

  
    return (
  <>
        <div className="card textDescIguane" style={{width:400, textAlign: 'left'}}>
         
          <h4 className='textTitreDemande'>Email :  <span className='textDemande'>{email}</span></h4>
         
          <h4 className='textTitreDemande'>Télephone :  <span className='textDemande'>0{telephone}</span></h4>
         
          <h4 className='textTitreDemande'>Numéro de déclaration :  <span className='textDemande'>{numero_declaration}</span></h4>
         
          <h4 className='textTitreDemande'>Iguane id :  <span className='textDemande'>{iguaneId}</span></h4>
        
          <h4 className='textTitreDemande'>Etat de la demande : {affichage}</h4>
          <hr/>
          <span style={{textAlign: 'center'}}>
            {text}
          {bouton}
         </span>
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
  isEligible : boolean

}
