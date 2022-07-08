function hoverMudaDescricao(nomeCard, texto) {
    var mudaDescricao = document.querySelector('.mudar-descricao');

    document.querySelector(nomeCard).addEventListener('mouseover', () => {
        mudaDescricao.innerHTML = texto;
    });

    document.querySelector(nomeCard).addEventListener('mouseout', () => {
        mudaDescricao.innerHTML = `*passe o cursor do mouse no card para ler*`;
    });
}

function digitarPorLetras(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {
        setTimeout(function () {
            elemento.innerHTML += letra;
        }, 100 * i);
    });
}

digitarPorLetras(document.querySelector('.home-digitado'));

hoverMudaDescricao(
    '.html',
    'HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.',
);
hoverMudaDescricao(
    '.css',
    'CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.',
);
hoverMudaDescricao(
    '.js',
    'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.',
);
hoverMudaDescricao('.py', 'Descrição do Python.');
hoverMudaDescricao('.nodejs', 'Descrição do NodeJs.');
hoverMudaDescricao('.c', 'Descrição do C.');
