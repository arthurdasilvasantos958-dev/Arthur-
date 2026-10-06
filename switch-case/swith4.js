

function corDoSinal(cor) {
  switch (cor) {
    case "vermelho":
      return "Pare";
    case "amarelo":
      return "Atenção";
    case "verde":
      return "Siga";
    default:
      return "Cor desconhecida";
  }
}
console.log(corDoSinal("amarelo"));
 
