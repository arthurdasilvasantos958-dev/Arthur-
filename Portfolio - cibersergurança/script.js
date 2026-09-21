
const secoes = document.querySelectorAll("section");

secoes.forEach((secao, i) => {
    secao.addEventListener("whel", (e) => {
        if (e.deltaY > 0 && secoes [i +1])
            secoes[i + 1].scrollIntoView();

        if (e.deltaY < 0 && secoes [i - 1])
            secoes[i - 1].scrollIntoView();
    })
})