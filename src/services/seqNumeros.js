export default function (inicio, fim){
    let itens = [];

    for(let i = inicio; i <= fim; i++){
        itens = [...itens, i];
    }
    return itens;
}