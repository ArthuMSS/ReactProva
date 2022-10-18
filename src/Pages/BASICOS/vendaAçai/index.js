import './index.scss';
import { useEffect, useState } from 'react';


export default function VendaAcai(){
    const [pequeno, setPequeno] = useState();
    const [medio, setMedio] = useState();
    const [grande, setGrande] = useState();
    const [desconto, setDesconto] = useState();
    const [resultado, setResultado] = useState();

    function CalcularAcai(){    
        const acaiPeq = 13.5 * pequeno;
        const acaiGra = 15 * grande;
        const acaimed = 17.5 * medio;
        const calc = acaiPeq + acaimed + acaiGra;
        const desc = (desconto * calc) / 100;
        const resultado = calc - desc; 
        setResultado(resultado);
    }

    useEffect(() => {
        CalcularAcai();
    }, [])

    return(
        <main className='cont-main-vendaacai'>
            <section className='cont-inserir-acais'>
                <div className='tamanho-pequeno'>
                    <h1 className='acai-pequeno'>
                        PEQUENOS:
                    </h1>
                    <input className='qtd-pequeno' type='text' values={pequeno} onChange={e => setPequeno(e.target.value)}/>
                </div>
                <div className='tamanho-medio'>
                    <h1 className='acai-medio'>
                        MEDIOS:
                    </h1>
                    <input className='qtd-medio' type='text' values={medio} onChange={e => setMedio(e.target.value)}/>
                </div>
                <div className='tamanho-grande'>
                    <h1 className='acai-grande'>
                        GRANDES:
                    </h1>
                    <input className='qtd-grande' type='text' values={grande} onChange={e => setGrande(e.target.value)}/>
                </div>
                <div className='tamanho-desc'>
                    <h1 className='acai-desc'>
                        DESCONTO:
                    </h1>
                    <input className='qtd-desc' type='text' values={desconto} onChange={e => setDesconto(e.target.value)}/>
                </div>
                <button className='botao-calcular-acai'>
                    <h1 className='calc-acai' onClick={CalcularAcai}>
                            CALCULAR
                    </h1>
                </button>
                <h1>
                    {resultado}
                </h1>
            </section>
        </main>
    ) 
}