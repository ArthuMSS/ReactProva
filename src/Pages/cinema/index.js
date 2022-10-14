import './index.scss'
import React, { useState } from 'react';

export default function LibraSignos() {
    const [inteiras, setInteiras] = useState(0);
    const [meias, setMeias] = useState(0);
    const [diasem, setDiaSem] = useState('"Segunda feira"');
    const [nacio, setNacio] = useState();
    const [resposta, setResposta] = useState();

    function totalCinema(){
        const int = inteiras * 28.5;
        const mei = meias * 14.25;
        const nac = nacio.toLowerCase();
        const day = diasem.toLowerCase();
        
        if(nac === "brasileiro"){
            mei = meias * 5;
            int = inteiras * 5;
            setResposta(mei + int);
        }
        else if(day === "quarta feira"){
          int = inteiras * 14.25;  
          setResposta(mei + int);
        }

        setResposta(mei + int);
    }
    return(
        <main className='cont-main-orcamento'>
            <section className='cont-card-cinema'>
                <h1 className='txt-ganhos'>
                    ENTRADAS MEIAS:
                </h1>
                <input className='input-ingresso' type='number' value={inteiras} onChange={e => setInteiras(e.target.value)}/>
                <h1 className='txt-ganhos'>
                    ENTRADAS INTEIRAS:
                </h1>
                <input className='input-ingresso' type='number' value={meias} onChange={e => setMeias(e.target.value)} />
                <h1 className='txt-ganhos'>
                    DIA DA SEMANA:
                </h1>
                <input className='input-diasem' type='text' value={diasem} onChange={e => setDiaSem(e.target.value)} />
                <h1 className='txt-ganhos'>
                    NACIONALIDADE:
                </h1>
                <input className='input-diasem' type='text' value={nacio} onChange={e => setNacio(e.target.value)} />
                <button className='calc-ingressos' onClick={totalCinema}>
                    Verificar
                </button>
                <h1 className='resultado'>
                    {resposta}
                </h1>
            </section>
        </main>
    )
}