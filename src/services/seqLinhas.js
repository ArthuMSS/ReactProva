export default function (qtd){
    let itens = [];

    for(let i = 1; i <= qtd; i++){
        itens = [...itens, '*'];
    }
    return itens;
}