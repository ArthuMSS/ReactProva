import './index.scss'
import React, { useState } from 'react';

export default function SorveteriaCalcular() {
    const [gramas, setGramas] = useState();
    const [resp, setResp] = useState();

    function calcularGrama(){
        const gra = gramas;
        if(gra === 0){
            setGramas('Peso Inválido')
        } 
        else if(gra >= 1000){
            const vl = 3 / 100;
            const calc = vl * gra;
            const resp = calc.toFixed(2)
            setResp(resp);
        }
        else{
        const vl = 3.5 / 100;
        const calc = vl * gra;
        const resp = calc.toFixed(2)
        setResp(resp);
        }
    }

    return(

        <main className='cont-main-sorv'>
            <section className='cont-infos-sorv'>
                <h1 className='titulo-sorveteria'>
                    SORVETERIA
                </h1>
                <div className='cont-gramas'>
                    <h1 className='titulo-gramas'>
                        GRAMAS:
                    </h1>
                    <input className='input-gramas' type='number' value={gramas} onChange={e => setGramas(e.target.value)}/>
                </div>
                <button onClick={calcularGrama}>
                    CALCULAR
                </button>
                <h1>
                    {resp}
                </h1>

            </section>
        </main>
    )
}
