import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, imagem, id){
    const produto = document.createElement("li");
    produto.className = "produtos__lista";
    produto.innerHTML = `
    <div class="produtos__item" id="${id}">
    <img  class="produtos__item__img" src=${imagem} alt="Imagem do produto">
        <div class="produtos__item__info">
            <p>${nome}</p>
            <div class="produtos__item__valor">
                <p>${preco}</p>
                <button class="deletaIcon">
                    <img class="produtos__item__delete" src="assets/Vector.png" alt="Ícone de lixeira">
                </button>
            </div>
        </div>
    </div>`
     
    const botaoDeletar = produto.querySelector(".deletaIcon");
    botaoDeletar.addEventListener("click", async () => {
        try {
            await conectaApi.deletaProduto(id); 
            produto.remove();
        } catch (error) {
            console.error('Erro ao deletar produto:', error);
        }
    });

    return produto;
}

async function listaProdutos(){
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento=> lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)))
}
listaProdutos();
