import '../App.css';
import './styles/FormAdoption.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Catherine from '../images/catherine.jpg';

export const FormAdopt = ({}) => {
  return (
   

    <Form className='test'>
         <h1 className='titrePage'>Formulaire d'adoption</h1>
         
{/* Rappel detail iguane */}
<div>
    <img src={Catherine} alt="plat" style={{width:70}}/>
    <br/>
    <span className='textIguane'>Catherine</span>
</div>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control type="email" placeholder="jean.dupont@hotmail.fr" />
        <Form.Text className="text-muted">
          Vous recevrez un email après traitement de votre demande
        </Form.Text>
      </Form.Group>

      
      <Button variant="primary" type="submit">
        Soumettre votre demande
      </Button>
    </Form>
  );
}

