import './index.scss'
import React, { useState } from 'react';


export default function VendaAçaí() {
  


    function calcular(qtdPeq, qtdMed, qtdGra, Desc){
        let a = qtdPeq === 13.5;
        let b = qtdMed === 15;
        let c = qtdGra === 17.5;
        let d = Desc * ( a + b + c) /100;

        return d;
    }
    


    return(
        <main>

            <section className='sc-1'>

                <h1> Bem vindo a Venda Açai !</h1>
                <h5>
                    ACAI PEQUENO
                </h5>
                <input className='inp-1' placeholder='Digite a quantidade'/>

                <h5>
                    ACAI MEDIO
                </h5>
                <input className='inp-2' placeholder='Digite a quantidade'/>

                <h5>
                    ACAI GRANDE
                </h5>
                <input className='inp-3' placeholder='Digite a quantidade'/>

                <h5>
                    DESCONTO
                </h5>
                <input className='inp-4' placeholder='Digite o desconto'/>

                <button className='bt-1' value={calcular} onClick={e.target.value}>Calcular</button>

            </section>

        </main>
    )
}
