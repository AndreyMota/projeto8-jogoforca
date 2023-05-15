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


export default function Jogo({setpal, palavra, ocult, setOcult, setBotoes, erros}) {
    const forcas = [forcaZero, forcaUm, forcaDois, forcaTres, forcaQuatro, forcaCinco, forcaSeis];
      
    return (
        <div className='jogo'>
            <img className='forca' src={forcas[erros]}></img>
            <div className='direita'>
                <Start setpal={setpal} setBotoes={setBotoes} setOcult={setOcult}/>
                <Palavra ocult={ocult}/>
            </div>
        </div>
    )
}

function Start({ setpal, setBotoes, setOcult }) {
    const radom = (max, min) => { 
        let valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }

    //console.log(radom(options.length,0))

    function apertou() {
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
        <button className="start" onClick={apertou}>Escolher palavra</button>
    )
}


function Palavra({ ocult }) {
    return (
        <div className='palavra'>
            {ocult.map(x => <div>{x}</div>)}
            {/* <h1>{ocult.map(x => <p>{x}</p>)}</h1> */}
        </div>
    )
}
