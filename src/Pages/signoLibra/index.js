import './index.scss'
import React, { useState } from 'react';

export default function LibraSignos() {
    const [mes, setMes] = useState('');
    const [dia, setDia] = useState(0);
    const [resp, setResp] = useState('---');

    function signoLibra() {        
        if(dia < 1 || dia > 30){
            setResp('erro!')
        }
        else if(mes === 'Outubro' && dia <= 22){
            setResp('Sim!')
        }
        else if(mes === 'Setembro' && dia >= 23){
            setResp('Sim!')
        }
        else{
            setResp('Não!')
        }
    }

 

    return(
        <main>

            <section>

                <h1> Bem vindo a Signo Libra! </h1>


                <h1> Mes </h1>
                <input type="text" value={mes} onChange={e => setMes(e.target.value)} />

                <h1> Dia </h1>
                <input type="number" value={dia} onChange={e => setDia(e.target.value)} />

                <button onClick={signoLibra}> Verificar</button>

                <p> É do signo de Libras? {resp} </p>

            </section>

        </main>
    )
}