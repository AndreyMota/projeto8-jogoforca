import forcaZero from './assets/forca0.png';
import './styles/Jogo.css';
import palavras from './palavras';


export default function Jogo(props) {
    return (
        <div className='jogo'>
            <img className='forca' src={forcaZero}></img>
            <div className='direita'>
                <Start setpal={props.setpal} setBotoes={props.setBotoes} setOcult={props.setOcult}/>
                <Palavra ocult={props.ocult}/>
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
