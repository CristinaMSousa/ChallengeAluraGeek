import { conectaApi } from './conectaApi.js';

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector("[data-formulario]");
    
    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault();

        const imagem = document.querySelector("[data-imagem]").value;
        const nome = document.querySelector("[data-nome]").value;
        const preco = document.querySelector("[data-preco]").value;

        try {
            const produto = await conectaApi.criaProduto(imagem, nome, preco);
            adicionarCard(produto);
            formulario.reset();
        } catch (error) {
            console.error('Erro ao criar produto:', error);
        }
    });
    const botaoLimpar = document.querySelector("[data-limpar]");
    
    botaoLimpar.addEventListener("click", () => {
        formulario.reset();
    });
});

        




