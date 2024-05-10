const bntPontuacao1 = document.getElementById('J1');
const bntPontuacao2 = document.getElementById('J2');
const bntReset = document.getElementById('Reset');
const maximo = document.querySelector('#maximo');
const placar1 = document.getElementById('pontos1');
const placar2 = document.getElementById('pontos2');

let atualiza = null;
let vitoria = false;
let pontos1 = 0;
let pontos2 = 0;
let x = 0;

maximo.addEventListener('change', (e)=>{
    x = Number(e.target.value);
    resetando();
    placar1.innerHTML = pontos1;
    placar2.innerHTML = pontos2;
})

bntPontuacao1.addEventListener('click', () =>{
    pontos1 += 1;
    if (vitoria == true) {
        resetando();
    }
    if (pontos1 == x) {
        placar2.style.color = "red";
        placar2.innerHTML = pontos2;
        placar1.style.color = "green";
        placar1.innerHTML = pontos1;
        vitoria = true;
    }else{
        placar1.innerHTML = pontos1;
    }
})

bntPontuacao2.addEventListener('click', ()=>{
    pontos2 +=1;
    if (vitoria == true) {
        resetando();
    }

    if (pontos2 == x) {
        placar2.style.color = "green";
        placar2.innerHTML = pontos2;
        placar1.style.color = "red";
        placar1.innerHTML = pontos1;

    }else{
        placar2.innerHTML = pontos2;
    }
})

bntReset.addEventListener('click', ()=>{
    resetando();
    placar1.innerHTML = pontos1;
    placar2.innerHTML = pontos2;
})

function resetando(){
    pontos1 = 0;
    pontos2 = 0;
    vitoria = false;
    placar1.style.color = "black";
    placar2.style.color = "black";
}