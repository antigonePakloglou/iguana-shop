import '../App.css';
import './styles/IguaneDesc.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Catherine from '../images/catherine.jpg';
import {Link} from "react-router-dom";

export const DescIguane = ({}) => {
    return (
           
       
            <Container className='back clearfix'>
                
                  <img src={Catherine} alt="plat" className='imageStyle' />
                <Row>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'>Nom</Col>
                        <Col className='textColonnes margesColonnes'>Catherine</Col>
                    </Col>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'>Couleur</Col>
                        <Col className='textColonnes margesColonnes'>Verte</Col>
                    </Col>
                </Row>
                <Row>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'>Taille</Col>
                        <Col className='textColonnes margesColonnes'>100cm</Col>
                    </Col>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'>Poids</Col>
                        <Col className='textColonnes margesColonnes'>2 kg</Col>
                    </Col>
                </Row>
                <Row>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'>Refuge</Col>
                        <Col className='textColonnes margesColonnes'>Lyon</Col>
                    </Col>
                    <Col className=''>
                        <Col className='textTitresColonnes margesTitleCol'></Col>
                        <Col className='textColonnes margesColonnes'>  <Link to={`/adopter/catherine`} style={{color : '#302E2E' }}><button type="submit" className='boutonAdopter'>DEMANDE <br/>D'ADOPTION</button></Link>  </Col>
                    </Col>
                </Row>
            </Container>
            
       
      
    );
  }
  