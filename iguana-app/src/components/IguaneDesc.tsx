import '../App.css';
import './styles/IguaneDesc.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import axios from 'axios';
import {importImages, concatImgName} from './fonctions';

export const DescIguane = () => {

    //recupération données
    let [iguane, setIguane] = useState([])
    let [page, setPage] = useState(1)
    const { id } = useParams();
   
    //recupération des images
    const images = importImages(require.context('../../src/images/iguanes', false, /\.(png|jpe?g|svg)$/));
    let img = concatImgName(id);

    //appel api 
    useEffect(() => {
        //info de l'iguane
        axios.get(`http://localhost:3000/api/iguane/${id}`).then(resp => {
            setIguane(resp.data);
        });
       }, [page]); 


    return (
        
            <Container className='back clearfix'>
                
                { <img src={images[img]} alt="plat" className='imageStyle' /> }
                  
                <Row>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'>Nom</Col>
                        <Col className='textColonnes margesColonnes'>{iguane['nom']}</Col>
                    </Col>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'>Couleur</Col>
                        <Col className='textColonnes margesColonnes'>{iguane['couleur']}</Col>
                    </Col>
                </Row>
                <Row>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'>Taille</Col>
                        <Col className='textColonnes margesColonnes'>{iguane['taille']} cm</Col>
                    </Col>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'>Poids</Col>
                        <Col className='textColonnes margesColonnes'>{iguane['poids']} kg</Col>
                    </Col>
                </Row>
                <Row className='imageStyle'>
                    <Link to={`/adopter/iguane/${id}`} style={{color : '#302E2E' }}><button type="submit" className='boutonAdopter'>DEMANDE <br/>D'ADOPTION</button></Link>   
                    <Link to={`/nosIguanes`} style={{color : '#302E2E', marginBottom : '10px', marginTop : '10px' }}><button type="submit" className='boutonAdopter'>Consulter nos <br/>autres iguanes</button></Link>  
                </Row>
            </Container>
            
       
      
    );
  }
  