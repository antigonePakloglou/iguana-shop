import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/navbar'
import './App.css';
import Catherine from './catherine.jpg';

function App() {
  return (
    <div className="App">
      <Header/>
      <br/>
      <div className="test textDescIguane">
      <img src={Catherine} alt="plat" style={{width:300}}/>
      <span className='textNomIguane'>Catherine</span>
      <br/>
    Refuge de <span className='colorVille'>Lyon</span>
      </div>
      
    </div>
  );
}

export default App;
