const valorini = document.querySelector('#inicio');
const valorfi = document.querySelector('#Fim');
const btnPensar = document.querySelector('#btnPensar');
const valorPalpite = document.querySelector('#palpite');
const btnAdvinha = document.querySelector('#btnAdvinhar');
const areaSaida = document.querySelector('#spanAqui');

let numero = null;
let tentativas = 1;


btnPensar.addEventListener('click', () =>{

    let valorInicio = valorini.value;
    let valorFim = valorfi.value;


    if (valorInicio === '' || valorFim === '') {
        areaSaida.innerHTML = `Digite um número inteiro nos campos "início" e "fim"!`;
        return;
    }

    numero = Math.trunc(Math.random() *(Number(valorFim) - Number(valorInicio)+1) + Number(valorInicio));
    areaSaida.innerHTML = `Pronto! Pensei em um número entre ${valorInicio} e ${valorFim}. Tente Adivinhar.`;
    console.log(numero)
});

btnAdvinha.addEventListener('click', () =>{
    let palpite = valorPalpite.value;
    if (numero === null) {
        areaSaida.innerHTML = `Calma Jovem! Nem pensei em nenhum número. Clique no "Pensar" ai burrao`
        return;
    }

    if (palpite === '') {
        areaSaida.innerHTML = `Digite um número inteiro para tentar adivinhar oque pensei`;
    }
    if (Number(palpite) === numero) {
        areaSaida.innerHTML = `Parabéns!! Eu pensei no número ${numero}. Você conseguiu após ${tentativas} tentativa(s).`;
        tentativas = 1;
        
    }
    if (palpite > numero) {
        areaSaida.innerHTML = `O numero que pensei é menor`;
        tentativas += 1;
    }
    if (palpite < numero) {
        areaSaida.innerHTML = `O numero que pensei é maior`;
        tentativas += 1;
    }
});
