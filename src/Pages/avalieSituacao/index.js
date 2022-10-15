import './index.scss'
import React, { useState } from 'react';

export default function AvalieSituacao() { 
    const[gastos, setGastos] = useState(0);
    const[ganhos, setGanhos] = useState(0);
    const[resp, setResp] = useState ('');

    function sitatt() {

        const calc = gastos / ganhos * 100;

       
        if (calc < 30) {
           setResp("Parabéns, está gerenciando bem seus gastos!");
        }
        else if (calc < 50) {
            setResp("Muito bem, seus gastos não ultrapassam metade dos ganhos!");
        }
        else if (calc < 80) {
            setResp("Atenção, melhor conter os gastos!");
        }
        else if (calc <= 100) {
            setResp("Cuidado, seu orçamento pode ficar comprometido!");
        }
        else {
            setResp("Orçamento comprometido! Hora de rever seus gastos");
        }
    
        return calc;
    }


    return(

        <main>

            <section className='sct-1'>

              <div className='dd-1'> 
                
                    <h2> Bem Vindos á Avaliacao Situacao</h2>

                    <p> INFORME SEUS GANHOS:</p>
                    <input type="number" value={ganhos} onChange={e => setGanhos(e.target.value)} />

                    <p> INFORME SEUS GASTOS:</p>
                    <input type="number" value={gastos} onChange={e => setGastos(e.target.value)} />

                    <button className='btt-1' onClick={sitatt} >VERIFICAR SITUACAO</button>

                    <h3 className='yt-1'> Situacao: {resp} </h3>

              </div>  
                
            </section>

        </main>
    )
}