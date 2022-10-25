export default function notaAlunos(nota){
    let itens = [];

    for(let i = 1; i <= nota; i++){
        itens = [...itens, i];
    }
    return itens;
}