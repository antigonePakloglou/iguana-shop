import '../App.css';
import './styles/FormAdoption.css';
import './styles/IguaneDesc.css';
import {importImages, concatImgName} from './fonctions';
import {useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {useNavigate } from "react-router-dom";
import axios from 'axios';



export const FormAdopt = ({}) => {

  //recupération données
  let [iguane, setIguane] = useState([])
  const { id } = useParams();
  let [demandeAdoption, setDemandeAdoption] = useState({
    email: '',
    telephone: 0,
    numero_declaration: 0,
    iguaneId : id,
    isEligible : 0
  }
    )
  let navigate = useNavigate()

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

  //recupère les données du formulaire au clic du bouton
  function postRequest (){
    async function addDemandeAdoption() {
        await axios.post('http://localhost:3000/api/demandeAdoption', demandeAdoption);
        navigate('/');
    }
    addDemandeAdoption();  
  }

  return (
   
    <form id='formulaire' onSubmit={ e => {e.preventDefault(); postRequest() }}>
      <br/>
      <h1 className='titrePage'>Formulaire d'adoption de <span style={{textDecoration : 'underline'}}>{iguane['nom']}  { <img src={images[img]} alt="plat" className='image' /> }</span> </h1>
      <Container className='backForm'>
        <Row> 
          <Col>
            <div className="input-group">
                <label className='textLabel'>Email</label><br/>
                <input className="textInput" required type="email" name="Email" onChange={(e) => { demandeAdoption.email =e.target.value ;}}/>
            </div>
            <Row>    
              <Col>
                <div className="input-group">
                  <label className='textLabel'>Numéro de télephone</label><br/>
                      (0768992763)<br/>
                  <input className="textInput" required type="number" name="Numero" onChange={(e) => { demandeAdoption.telephone = parseInt(e.target.value) ;}}/>
                </div>
              </Col> 
            </Row>
            <Row>    
              <Col>
                <div className="input-group">
                  <label>
                    <span className='textLabel'>Numéro de déclaration de détention</span><br/>
                      (Obligatoire pour adopter)</label><br/>
                    <input className="textInput" required  type="number" name="Declaration" onChange={(e) => { demandeAdoption.numero_declaration = parseInt(e.target.value) ;}}/>
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

export interface AdoptionDemandeProps {
  email: string ;
  telephone : number;
  declarationNum: number;
  iguaneId : number;
}
