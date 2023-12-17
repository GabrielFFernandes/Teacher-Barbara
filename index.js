const imgs = document.getElementById("img-depoimentos");
const img = document.querySelector("#img-depoimentos .img-transicao");

let idx = 0;

function carrossel(){
    idx++;
    if(idx >img-transicao.length -1 ){
        idx = 0;
    }
    imgs.style.transform= 'translateX(${-idx *250}px)';
}
setInterval(carrossel, 1800);