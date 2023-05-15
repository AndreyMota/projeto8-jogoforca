import './styles/Chute.css';

export default function Chute({ botoesOff, setBotoes, valorC, setValorC, palavra, classeP, setClasseP, ocult, setOcult, setErros }) {
    function handleChange(event) {
        setValorC(event.target.value);
        console.log(event.target.value);
    }

    function acabou(venceu) {
        let lst = [...palavra.split('')];
        let uia = '';
        lst.forEach((x) => uia+=x);
        /* console.log(`lst: ${uia}`);
        console.log(`pal: ${palavra}`); */
        setOcult(lst);
        setBotoes(true);
        if (venceu) {
            const nova = classeP + ' ganhou';
            setClasseP(nova);
        }
        if (!venceu) {
            setErros(6);
            const nova = classeP + ' perdeu';
            setClasseP(nova);
        }
    }

    function verifica() {
        if (valorC.toLowerCase() === palavra) {
            acabou(true);
        } else {
            acabou(false);
        }

    }

    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" value={valorC} onChange={(event) => handleChange(event)} disabled={botoesOff} placeholder="Chute"></input>
            <button data-test="guess-button" disabled={botoesOff} onClick={verifica}>Chutar</button>
        </div>
    )
}