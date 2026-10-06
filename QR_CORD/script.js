function gerarQRCode(){
    //vai pegar o que foi digitado
    let texto = document.getElementById("texto").value
    let qrcode = document.getElementById("qrcode")


    //LIMPAR O QRCODE ANTERIOR
    qrcode.innerHTML = ""


    //verifica se o usuário digitou algo
    if(texto === ""){
        alert("Digite um texto ou link")
        return;
    }
    new QRCode(qrcode,{
        text:texto,
        width:200,
        height:200
    })


}
