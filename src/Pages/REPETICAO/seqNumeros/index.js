import './index.scss';
import React, { useEffect, useState } from 'react';

import seqNumeros from '../../../services/seqNumeros';

export default function SequenciaNum(){
    const [inicio, setInicio] = useState()
    const [fim, setFim] = useState();
    const [resposta, setResposta] = useState([]);

    function resp(){
        const ini = inicio;
        const fm = fim;
        const resp = seqNumeros(ini, fm);
        setResposta(resp);
    }

    useEffect(() => {
        resp();
    }, [])

    return(
        <main className='cont-main-seq'>
            <section className='cont-card-seq'>
                <h1 className='inicio'>
                    INICIO:
                </h1>
                <input className='input-inicio' type='number' value={inicio} onChange={e => setInicio(Number(e.target.value))}/>
                
                <h1 className='fim'>
                    FIM:
                </h1>
                <input className='input-fim' type='number'value={fim} onChange={e => setFim(Number(e.target.value))}/>
                <button onClick={resp} >
                    CALCULAR
                </button>
                <div className='cont-resposta'>
                    {resposta.map(item =>
                        <div className='resposta-itens'>
                            <p className='text-resp'>
                                {item},
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    )
}