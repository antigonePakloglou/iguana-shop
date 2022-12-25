import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './styles/Accueil.css';
import { AllIguanas } from './AllIguanas';
import { DescIguane } from './IguaneDesc';
import { FormAdopt } from './FormAdoption';
import { Infos } from './Infos';
import {Link} from "react-router-dom";


export const Header = ({}) => { 
    return (
    <Router>
      <Navbar className='colorNav'>
        <Container>
          <Navbar.Brand href="/nosIguanes" className='textFamily colorTextNav'>Iguana SPA</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/infoAvantAdoption" className='colorTextNav'>Avant d'adpoter</Nav.Link>
            <Nav.Link href="/descIguane" className='colorTextNav'>Connexion</Nav.Link>
          
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/*' element={ <Presentation/>}></Route>
      <Route path='/nosIguanes' element={ <AllIguanas/>}></Route>
      <Route path='/iguane/:id' element={< DescIguane />}></Route> 
      <Route path='/infoAvantAdoption' element={< Infos />}></Route>
      <Route path='/adopter/iguane/:id' element={< FormAdopt />}></Route>
      
      </Routes>
    </Router>
    );
}


export const Presentation = ({}) => {
  return (
   <AllIguanas/>
  );
}



