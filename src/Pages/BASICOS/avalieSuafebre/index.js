import './index.scss';
import { useEffect, useState } from 'react';


export default function AvalieFebre(){
    const [temperatuda, setTemperatura] = useState(0);
    const [result, setResult] = useState();

    function calcularFebre(){
        const temp = temperatuda;
        if(temp >= 41){
            setResult('Hipetermia')
        }
        else if(temp >= 39.6 &&  temp < 41){
            setResult('Febre Alta')
        }
        else if(temp >= 37.6 && temp < 39.6){
            setResult('Febre')
        }
        else if(temp >= 36 && temp <= 37.6){
            setResult('Normal')
        }
        else if(temp < 36){
            setResult('Hipotermia')
        }
        else{
            setResult('Temperatura Invalida!!')
        }
    }

    
    return(
        <main className='cont-main-febre'>
            <section className='cont-inserir-temp'>
                <div className='tamanho-febre'>
                    <h1 className='temp-titulo'>
                        TEMPERATURA:
                    </h1>
                    <input className='temp-febre' type='number' values={temperatuda} onChange={e => setTemperatura(e.target.value)}/>
                </div>
                <button className='botao-calcular-febre' onClick={calcularFebre}>
                    <h1 className='calc-febre' >
                            CALCULAR
                    </h1>
                </button>
                <h1>
                    {result}
                </h1>
            </section>
        </main>
    ) 
}