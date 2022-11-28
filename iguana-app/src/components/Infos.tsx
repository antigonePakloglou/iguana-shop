import '../App.css';
import './styles/Infos.css';
import Accordion from 'react-bootstrap/Accordion';

export const Infos = ({}) => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Législation</Accordion.Header>
        <Accordion.Body>
        Iguana iguana est soumise à une simple déclaration de détention entre 1 et 3 spécimens détenus. Vous devez conserver toutes les copies justificatives (attestation de marquage, CIC, factures...). Au-delà de 3 individus, l’acquéreur doit envoyer préalablement en RAR à sa préfecture une demande comprenant : une autorisation préfectorale de détention d’animaux d’espèces non domestiques CERFA N°1244*01, un registre des entrées et sorties des animaux d’espèces non domestiques dans un élevage d’agrément (CERFA N°12448*01) avec également toutes les copies justificatives.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Maintenance</Accordion.Header>
        <Accordion.Body>
        - Un terrarium de 200x80x150 cm est un minimum pour un spécimen adulte.
      - Ce lézard arboricole a des moeurs diurnes et reste plus souvent dans les hauteurs.
      - Il a besoin d’un point chaud à 30/35°C que l’on fournira avec une lampe chauffante; un point froid aux alentours de 25°C et 20/22°C la nuit.
      - Il lui faudra impérativement des UVB pour synthétiser la vitamine D3 indispensable pour que son organisme assimile le calcium.
      - Proposez-lui des branchages solides supportant son poids pour grimper, un bac d’eau au point froid, des cachettes avec des feuillages. Vous pouvez mettre des écorces de pin ou coco en guise de substrat.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Alimentation</Accordion.Header>
        <Accordion.Body>
        - Ce lézard se nourrit quotidiennement de végétaux : Pissenlit, trèfles, plantain, légumes et fruits. Il est important de bien varier son alimentation afin d’éviter les carence alimentaire. Saupoudrez 2 à 3 fois par semaine les végétaux de calcium pur.
      - Vous pouvez également compléter son alimentation avec du Repashy pour végétarien : poudre que l’on délaie dans de l’eau pour former une compote.
      - Les juvéniles doivent impérativement être pulvérisés quotidiennement afin d’assurer l’hydratation, même si le terrarium a une forte hygrométrie.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>A noter</Accordion.Header>
        <Accordion.Body>
        - Les jeunes iguanes sont craintifs et se défendent en fouettant avec leur queue !
        - Il est important de bien sociabiliser l’iguane au contact de l’homme car une fois adulte, il sera plus facile de le manipuler pour le soigner, le sortir de son terrarium... L’iguane est intelligent et peut aisément être désensibilisé aux manipulations avec un peu de douceur et patience.
        - Il existe plusieurs mutations chez l’iguane : Albinos, rouge, bleu…
        - Le mâle possède une crête très développé.
        - Son espérance de vie est d’environ 10-15 ans !
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}


/* export const Infos = ({}) => { 
    return (
  <>
     <br/>
     <h1 className='titrePage'>Avant d'adopter un iguane</h1>
     <br/>
     <h3><span className='soustitrePage'>Législation</span></h3>
     <div className='margePara'>
     Iguana iguana est soumise à une simple déclaration de détention entre 1 et 3 spécimens détenus. Vous devez conserver toutes les copies justificatives (attestation de marquage, CIC, factures...). Au-delà de 3 individus, l’acquéreur doit envoyer préalablement en RAR à sa préfecture une demande comprenant : une autorisation préfectorale de détention d’animaux d’espèces non domestiques CERFA N°1244*01, un registre des entrées et sorties des animaux d’espèces non domestiques dans un élevage d’agrément (CERFA N°12448*01) avec également toutes les copies justificatives.
    </div> 
    <h3><span className='soustitrePage'>Maintenance</span></h3>
    <div className='margePara'>
      - Un terrarium de 200x80x150 cm est un minimum pour un spécimen adulte.
      - Ce lézard arboricole a des moeurs diurnes et reste plus souvent dans les hauteurs.
      - Il a besoin d’un point chaud à 30/35°C que l’on fournira avec une lampe chauffante; un point froid aux alentours de 25°C et 20/22°C la nuit.
      - Il lui faudra impérativement des UVB pour synthétiser la vitamine D3 indispensable pour que son organisme assimile le calcium.
      - Proposez-lui des branchages solides supportant son poids pour grimper, un bac d’eau au point froid, des cachettes avec des feuillages. Vous pouvez mettre des écorces de pin ou coco en guise de substrat.
    </div>

    <h3><span className='soustitrePage'>Alimentation</span></h3>  
    <div className='margePara'>
      - Ce lézard se nourrit quotidiennement de végétaux : Pissenlit, trèfles, plantain, légumes et fruits. Il est important de bien varier son alimentation afin d’éviter les carence alimentaire. Saupoudrez 2 à 3 fois par semaine les végétaux de calcium pur.
      - Vous pouvez également compléter son alimentation avec du Repashy pour végétarien : poudre que l’on délaie dans de l’eau pour former une compote.
      - Les juvéniles doivent impérativement être pulvérisés quotidiennement afin d’assurer l’hydratation, même si le terrarium a une forte hygrométrie.
    </div>

    <h3><span className='soustitrePage'>A noter</span></h3>
    <div className='margePara'>
      - Les jeunes iguanes sont craintifs et se défendent en fouettant avec leur queue !
      - Il est important de bien sociabiliser l’iguane au contact de l’homme car une fois adulte, il sera plus facile de le manipuler pour le soigner, le sortir de son terrarium... L’iguane est intelligent et peut aisément être désensibilisé aux manipulations avec un peu de douceur et patience.
      - Il existe plusieurs mutations chez l’iguane : Albinos, rouge, bleu…
      - Le mâle possède une crête très développé.
      - Son espérance de vie est d’environ 10-15 ans !
    </div>

  </>
); 
}
*/