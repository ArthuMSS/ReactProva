export default function contarAlunos(qtd){
    let itens = [];

    for(let i = 1; i <= qtd; i++){
        itens = [...itens, 'Aluno' + i];
    }
    return itens;
}