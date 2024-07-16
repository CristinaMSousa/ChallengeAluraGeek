async function listaProdutos (){
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}
async function criaProduto(imagem ,nome, preco) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco
        })
        
    });
    if (!conexao.ok) {
        throw new Error('Erro ao criar produto');
    }

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function deletaProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: 'DELETE',
        
    });

    if (!conexao.ok) {
        throw new Error('Erro ao deletar produto');
    }
    
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaApi = { 
    listaProdutos,
    criaProduto,
    deletaProduto
} 


