document.addEventListener('DOMContentLoaded', function () {
    var imagens = document.querySelectorAll('.img-transicao');
    var titulo = document.getElementById('titulo-depoimentos');
    var textoDepoimentos = document.getElementById('texto-depoimentos');

    var textos = [
        "Depoimento 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Depoimento 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Depoimento 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    ];

    function mostrarDepoimento(indice) {
        imagens.forEach(function (imagem) {
            imagem.style.display = 'none';
        });

        imagens[indice].style.display = 'block';

        titulo.textContent = "Depoimentos de algumas alunas!";
        textoDepoimentos.textContent = textos[indice];
    }

    function cicloDeDepoimentos() {
        var indiceAtual = 0;

        mostrarDepoimento(indiceAtual);

        setInterval(function () {
            indiceAtual = (indiceAtual + 1) % imagens.length;
            mostrarDepoimento(indiceAtual);
        }, 5000);
    }

    cicloDeDepoimentos();
});
