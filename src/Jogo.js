import forcaZero from './assets/forca0.png';
import './styles/Jogo.css';
import palavras from './palavras';


export default function Jogo(props) {
    return (
        <div className='jogo'>
            <img className='forca' src={forcaZero}></img>
            <div className='direita'>
                <Start setp={props.setpal} setb={props.setBotoes}/>
                <Palavra ocult={props.ocult}/>
            </div>
        </div>
    )
}

function Start({ setp, setb }) {
    const radom = (max, min) => { 
        let valor = Math.random() * (max - min) + min
        return Math.floor(valor)
    }

    //console.log(radom(options.length,0))

    function apertou() {
        setb(false);
        setp(palavras[radom(palavras.length -1, 0)]);
        //setOcult(palavra.split(''));
        console.log("Botão inicial acionado");
    }
    return (
        <button className="start" onClick={apertou}>Escolher palavra</button>
    )
}


function Palavra({ ocult }) {
    return (
        <div className='palavra'>
            <h1>{ocult}</h1>
        </div>
    )
}
