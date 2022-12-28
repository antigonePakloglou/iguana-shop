import '../App.css'
import './styles/AllIguanas.css';
import { DemandeAdoption, DemandeProps } from './DemandesAdoption';
import {useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';


export const AllDemandesAdoption = ({}) => {

  //recupération données
  let [demandesAdoption, setDemandesAdoption] = useState([])

 
  //appel api  
  useEffect(() => {
      axios.get(`http://localhost:3000/api/demandeAdoption`).then(resp => {
        setDemandesAdoption(resp.data);
      });
      }); 

  //affichage selon données
  let affichage;
  let titre;
   
  if (demandesAdoption.length > 0) {
    titre = 'Les demandes d\'adoption';
    affichage =  
    <Row>  
      {  demandesAdoption.map((p  : DemandeProps)=> (
        <Col key={p.id}>
          <DemandeAdoption  {...p} />
        </Col>
        )) 
      } 
    </Row>;
  } else {
      titre = 'Aucunes demande d\'adoption pour le moment';
      affichage = '';
    }  

    return ( 
       
      <Container>
        <br/>
        <h1 className='titrePage'>{titre}</h1>
        {affichage}
      </Container> 
    );
  }