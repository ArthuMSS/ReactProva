import './index.scss'
import React, { useState } from 'react';

export default function SalarioLiquido() {
    const[salario, setSalario] = useState(0);
    const[bonus, setBonus] = useState(0);
    const[desc, setDesc] = useState(0);
    const[respos, setRespos] = useState('---');

    function salarioLiquido(){

        const calcBonus = bonus * (salario / 100);
        const calcDesc = (salario - desc);
        const calculoTotal = calcDesc + calcBonus;
        setRespos(calculoTotal);
    }
  
    return(
        <main>

            <section>

                <h1> Bem vindo a Salario Liquido!</h1>

                <h2> Salario </h2>
                <input type="number" value={salario} onChange={e => setSalario(e.target.value)} />

                <h2> Bonus </h2>
                <input type="number" value={bonus} onChange={e => setBonus(e.target.value)} />

                <h2> Desconto </h2>
                <input type="number" value={desc} onChange={e => setDesc(e.target.value)} />

                <button onClick={salarioLiquido}> Verificar</button>

                <p> Seu salário líquido é de: R${respos}</p>

            </section>

        </main>
    )
}