import '../App.css'
import './styles/AllIguanas.css';
import { Iguane, IguaneProps } from './Iguane';
import {useState, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';


export const Admin = ({}) => {

  //recupération données
  let [iguanes, setIguanes] = useState([])
  let [page, setPage] = useState(1)
 
  //appel api  
  useEffect(() => {
      axios.get(`http://localhost:3000/api/iguane`).then(resp => {
      setIguanes(resp.data);
      });
      }, [page]); 

  //affichage selon données
  let affichage;
  let titre;
   
  if (iguanes.length > 0) {
    titre = 'Les demandes d\'adoption';
    affichage =  
    <Row>  
      {  iguanes.map((p  : IguaneProps)=> (
        <Col key={p.id}>
          <Iguane  {...p} />
        </Col>
        )) 
      } 
    </Row>;
  } else {
      titre = 'Aucun iguanes disponibles à l\'adoption pour le moment';
      affichage = '';
    }  

    return ( 
      
      <Container>
       
      </Container> 
    );
  }