import './index.scss'
import React, { useState } from 'react';

export default function LibraSignos() {
    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [resposta, setResposta] = useState();
    
    function sitOrcamento(){
       const gan = ganhos;
       const gas = gastos;
       
       const conta1 = (gas * 100) / gan;

       if(conta1 > 100){
        setResposta('Orçamento comprometido! Hora de rever seus gastos !!')
       }
       else if(conta1 >= 81 && conta1 <= 100){
        setResposta('Cuidado seu orçamento pode ficar comprometido !!')
       }
       else if(conta1 >= 51 && conta1 <= 80){
        setResposta('Atenção Melhor conter os gastos !!')
       }
       else if (conta1 >= 21 && conta1 <= 50){
        setResposta('Muito bem, seus gastos não ultrapassam metade dos seus Ganhos :)')
       }
       else if (conta1 >= 0 && conta1 <= 20){
        setResposta('Parabens esta gerenciando bem seu orçamento !')
       }
       else{
        setResposta('Não consegui compreender suas informações :(')
       }
    }
    return(
        <main className='cont-main-orcamento'>
            <section className='cont-card-orcamento'>
                <h1 className='txt-ganhos'>
                    INFORME SEU GANHO:
                </h1>
                <input className='input-ganhos' type='number' values={ganhos} onChange={e => setGanhos(e.target.value)}/>
                <h1 className='txt-ganhos'>
                    IFORME SEUS GASTOS:
                </h1>
                <input className='input-ganhos' type='number' values={gastos} onChange={e => setGastos(e.target.value)}/>
                <button className='calc-orcamento' onClick={sitOrcamento}>
                    Verificar
                </button>
                <h1 className='resultado'>
                    {resposta}
                </h1>
            </section>
        </main>
    )
}