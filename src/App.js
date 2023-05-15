import { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras';

import './styles/App.css';

function App() {
  const [palavra, setPalavra] = useState('');
  const [ocult, setOcult] = useState([]);
  const [botoesOff, setBotoes] = useState(true);
  const [erros, setErros] = useState(0);
  const [classeP, setClasseP] = useState('palavra')
  
  return (
    <div className="App"> 
      <Jogo 
      setpal={setPalavra} 
      palavra={palavra} 
      ocult={ocult} 
      setOcult={setOcult}
      setBotoes={setBotoes}
      erros={erros}
      setErros={setErros}
      classeP={classeP}
      setClasseP={setClasseP}
      />
      <div className='letters'>
        <Letras 
        palavra={palavra} 
        ocult={ocult} 
        setOcult={setOcult} 
        setBotoes={setBotoes}
        botoesOff={botoesOff}
        erros={erros}
        setErros={setErros}
        classeP={classeP}
        setClasseP={setClasseP}
        />
      </div>  
    </div>
  );
}

export default App;
