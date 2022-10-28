import '../App.css';
import './styles/FormAdoption.css';
import './styles/IguaneDesc.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Catherine from '../images/catherine.jpg';
import {Container, Row, Col, Card} from 'react-bootstrap';
export const FormAdopt = ({}) => {
  return (
   
    <form >
      <br/>
      <h1 className='titrePage'>Formulaire d'adoption de <span style={{textDecoration : 'underline'}}>Catherine  <img src={Catherine} alt="plat" className='image' /></span> </h1>
     
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
                    <span className='textLabel'>Déclaration de détention</span><br/>
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

