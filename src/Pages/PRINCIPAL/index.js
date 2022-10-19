import './index.scss';
import { Link } from 'react-router-dom';

export default function principal(){
    return(
        <main className='cont-principal-main'>
            <Link to='/acai'>
                Venda de Açai
            </Link>
            <Link to='/sorveteria'>
                Sorveteria
            </Link>
            <Link to='/signo'>
                Signo
            </Link>
            <Link to='/salario'>
                Salario
            </Link>
            <Link to='/paradas'>
                Verificar Paradas
            </Link>
            <Link to='/situacao'>
                Situação
            </Link>
            <Link to='/febre'>
                Verificar Febre
            </Link>
            <Link to='/orc'>
                Orçamento
            </Link>
            <Link to='/cinema'>
                Ingresso Cinema
            </Link>

            <h1 className='repetição-txt'>
                REPETIÇÃO
            </h1>
            <Link to='/seq'>
                Sequencia de Numeros
            </Link>
            <Link to='/ret'>
                Retangulo
            </Link>
            <Link to='/linha'>
                Linha de Asteriscos
            </Link>
            <Link to='/desafio'>
                Desafiooo
            </Link>
        </main>
    )
}