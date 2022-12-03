import '../App.css'
import { Iguane } from './Iguane';
import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export const AllIguanas = ({}) => {
     //recupération données
     let [iguanes, setIguanes] = useState( [ {id: 1, nom: 'Catherine', couleur : 'Verte', taille: 168 , poids : 7, refuge : 'Lyon'}, 
     {id:2, nom: 'Preston', couleur : 'Jaune', taille: 190 , poids : 13, refuge : 'Macon'},
     {id:3, nom: 'Rodriguez', couleur : 'Orange', taille: 120 , poids : 3, refuge : 'Lyon'},
     {id:4, nom: 'M.Peanuts', couleur : 'Rouge', taille: 172 , poids : 9, refuge : 'Paris'} 
     ])
    
    
    //affichage selon données
    let affichage;
    let titre;
    if (iguanes.length > 0) {
        titre = 'Les iguanes disponibles à l\'adoption';
        affichage =  
        <Row>
               
        {  iguanes.map((p)=> (
                <Col key={p.id}>
                        <Iguane  {...p} />
                </Col>
            )) } 
        </Row>    ;
      } else {
        titre = 'Aucun iguanes disponibles à l\'adoption pour le moment';
        affichage = 'add a picture';
      }  


    return ( 
      
    <Container>
        <br/>
        <h1 className='titrePage'>{titre}</h1>
       {affichage}
    </Container> 
    );
  }