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
            imagem.classList.add('hidden');
        });

        imagens[indice].classList.remove('hidden');
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

    btnTopo.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            btnTopo.classList.remove('opacity-0', 'invisible');
            btnTopo.classList.add('opacity-100', 'visible');
        } else {
            btnTopo.classList.add('opacity-0', 'invisible');
            btnTopo.classList.remove('opacity-100', 'visible');
        }
    });
});

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    var mobileMenuBtn = document.getElementById('mobile-menu-btn');
    var mobileMenu = document.getElementById('mobile-menu');

    mobileMenuBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    var mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
        });
    });
});
