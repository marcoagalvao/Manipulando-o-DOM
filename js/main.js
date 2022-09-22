const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) // vai no evento que é o click no botao, pega o target que é oq foi clicado e dps busca o elemento data. E no outro paramento vamos no click, pegamos oq foi clicado e vamos no pai do elemento clicado
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, paiElemento){
    const peca = paiElemento.querySelector("[data-contador]"); // vai buscar a data-contador daquele item q foi clicado

    if(operacao === "-"){
        if(parseInt(peca.value) > 0)
            peca.value = parseInt(peca.value) - 1;
        else
            alert("Não é possível colocar números negativos!")
    } else {
        peca.value = parseInt(peca.value) + 1; //precisa do parseInt pois sem ele recebemos uma string e com string a soma nn eh feita adequadamente.
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}