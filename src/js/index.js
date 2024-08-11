const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desativarBotaoSelecionado();

        mostarBotaoSelecionado(botao);

        esconderImagem();

        mostarImagemFundo(indice);

        esconderInformacao();

        mostrarInformacao(indice);
    });
});
function mostrarInformacao(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacao() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostarImagemFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagem() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function mostarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}

