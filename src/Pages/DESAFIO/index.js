import './index.scss';
import React, { useState } from 'react';

export default function Desafio(){
    const [estudantes, setEstudantes] = useState(0);
    const [capCafe, setCapCafe] = useState(0);
    const [quanto, setQuanto] = useState(0);
    const [resposta, setResposta] = useState();

    console.log(capCafe);
    console.log(estudantes);
    console.log(resposta);

    function calcularCafe(){
        let est = estudantes;
        let cap = capCafe;
        let qtd = quanto;

        let calculo = est * qtd;
        let vlcap = cap;

        if(calculo > 1000){
            calculo = calculo / 1000;
            for(let i = 0; calculo > cap ; i++){
                cap = cap + vlcap;
            }
            setResposta(cap);
        }
        if(calculo < 1000 && calculo >= 100){
            calculo = calculo / 100;
            for(let i = 0; calculo > cap ; i++){
                cap = cap + vlcap;
            }
            setResposta(cap);
        }
    }

    return(
        <main className='cont-main-desafio'>
            <h1 className='titulo-estudantes'>
                INFORME OS ESTUDANTES:
            </h1>
            <input className='qtd-estudantes' type='number' value={estudantes} onChange={e => setEstudantes(Number(e.target.value))}/>
            <h1 className='titulo-estudantes'>
                INFORME QUANTO CABE DE CAFÉ NA GARRAFA:
            </h1>
            <input className='qtd-estudantes' type='number' value={capCafe} onChange={e => setCapCafe(Number(e.target.value))}/>
            <h1 className='titulo-estudantes'>
                INFORME QUANTO CADA UM BEBE:
            </h1>
            <input type='number' value={quanto} onChange={e => setQuanto(Number(e.target.value))}/>
            <button className='botao-calcular' onClick={calcularCafe}>
                Calcular
            </button>
            <p>    
                {resposta}
            </p>
        </main>
    )
}