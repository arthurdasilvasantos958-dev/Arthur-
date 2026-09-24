// ---------- Curtir ----------
 
// 1. Variável que guarda o número de curtidas, começando em 0
let curtidas = 0;
 
// 2. Elementos da tela
const botaoCurtir = document.getElementById("botao-curtir");
const contadorCurtidas = document.getElementById("contador-curtidas");
 
// 3. Quando clicar, soma 1 e atualiza o texto
botaoCurtir.addEventListener("click", function () {
  curtidas = curtidas + 1;
  contadorCurtidas.textContent = curtidas + " curtidas";
  botaoCurtir.textContent = " Curtido";
});
 
 
// ---------- Descurtir ----------
 
// 1. Variável que guarda o número de descurtidas, começando em 0
let descurtidas = 0;

 
// 2. Elementos da tela
const botaoDescurtir = document.getElementById("botao-descurtir");
const contadorDescurtidas = document.getElementById("contador-descurtidas");
 
// 3. Quando clicar, soma 1 e atualiza o texto
botaoDescurtir.addEventListener("click", function () {
  descurtidas = descurtidas + 1;
  contadorDescurtidas.textContent = descurtidas + " descurtidas";
  botaoDescurtir.textContent = " Descurtido";
});
