import '../App.css';
import './styles/FormAdoption.css';
import './styles/IguaneDesc.css';
import {importImages, concatImgName} from './fonctions';
import {useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Container, Row, Col, Card} from 'react-bootstrap';
import axios from 'axios';
export const FormAdopt = ({}) => {

  //recupération données
  let [iguane, setIguane] = useState([])
  const { id } = useParams();

  //appel api 
  useEffect(() => {
    //info de l'iguane
    axios.get(`http://localhost:3000/api/iguane/${id}`).then(resp => {
      setIguane(resp.data);
    });
   }, []); 

  //recupération des images
  const images = importImages(require.context('../../src/images/iguanes', false, /\.(png|jpe?g|svg)$/));
  let img = concatImgName(id);

  return (
   
    <form >
      <br/>
      <h1 className='titrePage'>Formulaire d'adoption de <span style={{textDecoration : 'underline'}}>{iguane['nom']}  { <img src={images[img]} alt="plat" className='image' /> }</span> </h1>
     
      <Container className='backForm'>
        <Row> 
          <Col>
            <div className="input-group">
                <label className='textLabel'>Email</label><br/>
                <input className="textInput"  type="text" name="Email" />
            </div>
            <Row>    
              <Col>
                <div className="input-group">
                  <label className='textLabel'>Numéro de télephone</label><br/>
                  <input className="textInput"  type="number" name="Numero" />
                </div>
              </Col> 
            </Row>
            <Row>    
              <Col>
                <div className="input-group">
                  <label>
                    <span className='textLabel'>Numéro de déclaration de détention</span><br/>
                      (Obligatoire pour adopter)</label><br/>
                    <input className="textInput"  type="number" name="Numero" />
                </div>
              </Col> 
            </Row>
          </Col>
          <Col>
            <p className=''>Veuillez renseigner vos coordonées. <br/>Vous serez contacté dans un delais maximum de 3 jours.</p>
            <hr/>
            <Row>    
              <Col> 
                <button type="submit" className='boutonAdopter'>ENVOYER LA DEMANDE <br/>D'ADOPTION</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    </form>
  );
}

