import { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras';
import './styles/App.css';

function App() {
  const [palavra, setPalavra] = useState('');
  const [ocult, setOcult] = useState([]);
  const [botoesOff, setBotoes] = useState(true);
  return (
    <div className="App">
      <Jogo 
      setpal={setPalavra} 
      palavra={palavra} 
      ocult={ocult} 
      setOcult={setOcult}
      setBotoes={setBotoes}
      />
      <div className='letters'>
        <Letras 
        palavra={palavra} 
        ocult={ocult} 
        setOcult={setOcult} 
        botoesOff={botoesOff}
        />
      </div>  
    </div>
  );
}

export default App;
