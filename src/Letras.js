import './styles/Letras.css'

export default function Letras({ palavra, ocult, setOcult, setBotoes, botoesOff, erros, setErros, classeP, setClasseP}) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split('');
    //console.log(`erros primeiro: ${erros}`);
    function acabou(venceu) {
        setBotoes(true);
        if (venceu) {
            const nova = classeP + ' ganhou';
            setClasseP(nova);
        }
        if (!venceu) {
            const nova = classeP + ' perdeu';
            setClasseP(nova);
        }
    }
    
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
            let uia = '';
            lst.forEach((x) => uia+=x);
            /* console.log(`lst: ${uia}`);
            console.log(`pal: ${palavra}`); */
            if (uia === palavra) {
                acabou(true);
            }
            setOcult(lst);
        }

        else {
            console.log(`erros segundo: ${erros}`);
            const novo = erros+1;
            setErros(novo);
            if (novo > 5) {
                let uia = [];
                let lst = palavra.split('');
                uia = [...lst];
                setOcult(uia);
                acabou(false);
            }
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
    
