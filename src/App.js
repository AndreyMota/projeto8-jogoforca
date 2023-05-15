import { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras';

import './styles/App.css';

function App() {
  const [palavra, setPalavra] = useState('');
  const [ocult, setOcult] = useState([]);
  const [botoesOff, setBotoes] = useState(true);
  const [erros, setErros] = useState(0);
  
  return (
    <div className="App"> 
      <Jogo 
      setpal={setPalavra} 
      palavra={palavra} 
      ocult={ocult} 
      setOcult={setOcult}
      setBotoes={setBotoes}
      erros={erros}
      />
      <div className='letters'>
        <Letras 
        palavra={palavra} 
        ocult={ocult} 
        setOcult={setOcult} 
        botoesOff={botoesOff}
        erros={erros}
        setErros={setErros}
        />
      </div>  
    </div>
  );
}

export default App;
