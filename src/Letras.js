import './styles/Letras.css'

export default function Letras({ palavra, ocult, setOcult, setBotoes, botoesOff}) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split('');
    function botaumLetra(l) {
        
    }
    console.log(botoesOff);
    return (
        <div className="letras">
            {alfabeto.map((x) => <button disabled={botoesOff} onClick={() => botaumLetra(x)}>{x}</button>)}
        </div>
    )
    
}

