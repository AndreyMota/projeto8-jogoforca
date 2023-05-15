import './styles/Letras.css'

export default function Letras({ palavra, ocult, setOcult, setBotoes, botoesOff, erros, setErros}) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split('');
    console.log(`erros primeiro: ${erros}`);
    
    function botaumLetra(event, l, y) {
        event.target.disabled = true;
        if (palavra.includes(l)) {
            let lst = [...ocult];
            let pos = 0;
            let c = palavra.indexOf(l, pos);
                if (c != -1) {
                    lst[c] = l;
                    pos = c +1;
                }

            while (!(c === -1)) {
                c = palavra.indexOf(l, pos);
                if (c != -1) {
                    lst[c] = l;
                    pos = c+1;
                }
            }
            
            setOcult(lst);
        }

        else {
            console.log(`erros segundo: ${erros}`);
            setErros(erros=erros+1);
            console.log(`erros terceiro: ${erros}`);
            //alert("Não tem essa letra");
        }
    }
        
    
    console.log(botoesOff);
    return (
        <div className="letras">
            {alfabeto.map((x) => <button disabled={botoesOff} onClick={(event) => botaumLetra(event, x, this)}>{x}</button>)}
        </div>
    )
}  
    
