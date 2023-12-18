document.addEventListener('DOMContentLoaded', function () {
    var imagens = document.querySelectorAll('.img-transicao');
    var titulo = document.getElementById('titulo-depoimentos');
    var textoDepoimentos = document.getElementById('texto-depoimentos');

    var textos = [
        "'Minha maior queixa sempre foi a falta de empatia dos professores.'",
        "'Ela realmente está interessada no desenvovimento dos alunos.'",
        "'Meu inglês evoluiu 100% depois das aulas com a Bárbara.'"
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
        }, 8000);
    }

    cicloDeDepoimentos();
});
document.addEventListener('DOMContentLoaded', function () {
    var btnTopo = document.getElementById('btnTopo');

    // addEventListener pra verificar se botao foi cilcado
    btnTopo.addEventListener('click', function () {
        // comportamento do scroll
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // addEventListener pra verificar se foi scrollado e a pos da pagina, chama funcao anonima
    window.addEventListener('scroll', function () {
        // botao so aparece depois de scrollar uma parte da pag
        if (window.scrollY > 200) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    });
});
