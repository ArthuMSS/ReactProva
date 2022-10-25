import './index.scss';
import React, { useEffect, useState } from 'react';

import contarAlunos from '../../services/qtdAlunos';

export default function MediaEscola(){
    const [alunos, setAlunos] = useState();
    const [qtdAlunos, setQtdAlunos] = useState([]);
    const [nota, setNota] = useState();
    const [notas, setNotas] = useState([]);
    const [calculo, setCalculo] = useState();
    console.log(notas);

    function calcular(){
        let al = alunos;
        setQtdAlunos(contarAlunos(al));
    }

    function alterarNotas(){
        setNotas([...setNotas, notas]);
    }

    function calcularMedia(){
        setCalculo(notas[posicoes()]);
    }

    function posicoes(){
        let nt = notas.length;
        for(let i = 0; i < nt; i++){
            return i;
        }
    }

    useEffect(()=>{
        if(notas > 0){
            alterarNotas();
        }
    }, [])

    return(
        <main className='cont-main-media'>
            <div className='cont-info'>
                        <h1 className='text-alunos'>
                            Insira os alunos:
                        </h1>
                        <input type='number' className='inserir-alunos' value={alunos} onChange={e => setAlunos(e.target.value)}/>
                        <button className='botao-confirma-aluno' onClick={calcular}>
                            Calcular
                        </button>
                    <div className='cont-alunos-selec'>
                    {qtdAlunos.map(item =>
                                <div className='alunos'>
                                    <p className='text-alunos'>
                                        {item}
                                    </p>
                                    <input className='nota-aluno' value={nota} onChange={e => setNota([...setNota, (alterarNotas(Number(e.target.value)))])}/>
                                    <button className='botao' onClick={alterarNotas}>

                                    </button>
                                </div> 
                    )}
                    {notas}
                    <button className='calcular' onClick={calcularMedia}>
                        Calcular
                    </button>
                </div>
            </div>
        </main>
    )
}