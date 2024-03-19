const botoes = document. querySelectorAll("botao");
for(let i=0;i<botoes.length;i++) 
   botoes(i).onclik = function (){
 
    for (let j=0;botoes.length;j++) {
        botoes[j].classList.remove("ativo");
    }
   botoes(1).classList.add("ativo");

}
