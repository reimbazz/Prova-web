const qntProd = document.querySelector('#Quantidade');
const nomeProdinput = document.querySelector('#nomeProduto');
const btnAdicionar = document.querySelector('#btnadd');
const listaProds =  document.querySelector('#listaProdutos');

btnAdicionar.addEventListener('click', () => {
    let qtd = Number(qntProd.value);
    let nomeProd = nomeProdinput.value;
    if (nomeProd === '') {
        alert('Nome do produto nao pode ser vazio');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `${nomeProd}. Quantidade: ${qtd}`;
    const btnNovoProduto = document.createElement('button');
    btnNovoProduto.innerHTML = 'X';
    btnNovoProduto.addEventListener('click', remover);
    li.append(btnNovoProduto);
    listaProds.append(li);
});

const remover = (e) =>{
    e.target.parentNode.remove();
}