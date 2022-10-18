import './index.scss';
import React, { useState } from 'react';

import seqLinhas from '../../../services/seqLinhas';

export default function SeqLinha(){
    const [estrelas, setEstrelas] = useState();
    const [resposta, setResposta] = useState([]);

    function estrela(){
        const est = estrelas;
        const resp = seqLinhas(est);
        setResposta(resp);
    }
    return(
        <main className='cont-main-linha'>
            <section className='cont-card-linha'>
                <h1 className='estrelas-titulo'>
                    QUANTAS ESTRELAS?
                </h1>
                <input className='qtd-estrela' type='text' value={estrelas} onChange={e => setEstrelas(e.target.value)}/>
            <button className='botao-confirma'>
                CONFIRMAR
            </button>
            {resposta.map(item =>
                <p className='estrelas-texto'>
                    {item}
                </p>    
            )}
            </section>
        </main>
    )
}