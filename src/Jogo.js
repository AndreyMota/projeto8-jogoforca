import './styles/Jogo.css';
import forcaZero from './assets/forca0.png';
import forcaUm from './assets/forca1.png';
import forcaDois from './assets/forca2.png';
import forcaTres from './assets/forca3.png';
import forcaQuatro from './assets/forca4.png';
import forcaCinco from './assets/forca5.png';
import forcaSeis from './assets/forca6.png';
import palavras from './palavras';
//import { useState } from 'react';


export default function Jogo({setpal, palavra, ocult, setOcult, setBotoes, erros, setErros, setClasseP, classeP}) {
    const forcas = [forcaZero, forcaUm, forcaDois, forcaTres, forcaQuatro, forcaCinco, forcaSeis];
      
    return (
        <div className='jogo'>
            <img data-test="game-image" className='forca' src={forcas[erros]}></img>
            <div className='direita'>
                <Start setpal={setpal} setBotoes={setBotoes} setOcult={setOcult} setErros={setErros} setClasseP={setClasseP}/>
                <Palavra ocult={ocult} classeP={classeP}/>
            </div>
        </div>
    )
}

function Start({ setpal, setBotoes, setOcult, setErros, setClasseP }) {
    const radom = (max, min) => { 
        let valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }

    //console.log(radom(options.length,0))

    function apertou() {
        setErros(0)
        setClasseP('palavra ')
        const pau = palavras[radom(palavras.length -1, 0)]
        const lst = pau.split('');
        const lst2 = []
        lst.forEach(() => {lst2.push('_')});
        console.log(`perto do pau: ${lst2}`)
        console.log(`pau: ${pau}`);
        setBotoes(false);
        setpal(pau);
        setOcult([...lst2]);
        console.log("Botão inicial acionado");
    }
    return (
        <button data-test="choose-word" className="start" onClick={apertou}>Escolher palavra</button>
    )
}


function Palavra({ ocult, classeP }) {
    return (
        <div data-test="word" className={classeP}>
            {ocult.map(x => <div>{x}</div>)}
            {/* <h1>{ocult.map(x => <p>{x}</p>)}</h1> */}
        </div>
    )
}
