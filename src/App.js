import { useState } from 'react';
import Jogo from './Jogo';
import Letras from './Letras';
import Chute from './Chute';

import './styles/App.css';

function App() {
  const [palavra, setPalavra] = useState('');
  const [ocult, setOcult] = useState([]);
  const [botoesOff, setBotoes] = useState(true);
  const [erros, setErros] = useState(0);
  const [classeP, setClasseP] = useState('palavra')
  const [valorC, setValorC] = useState('');
  
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
      <div>
        <Chute
        botoesOff={botoesOff} 
        setBotoes={setBotoes}
        valorC={valorC}
        setValorC={setValorC}
        palavra={palavra}
        classeP={classeP}
        setClasseP={setClasseP}
        ocult={ocult}
        setOcult={setOcult}
        setErros={setErros}/>
      </div>
    </div>
  );
}

export default App;
