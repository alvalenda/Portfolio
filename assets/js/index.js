/**
 *  @function homeLogoClique
 *  Um EventListener que aciona a função @digitarPorLetras quando há um clique de mouse no Logo da Home.
 */
function homeLogoClique() {
    document.querySelector('#anchor-logo').addEventListener('click', () => {
        digitarPorLetras(document.querySelector('.home-digitado'));
    });
}

/**
 * @function hoverMudaDescricao
 * Insere um texto no elemento html que descreve as skill-cards, retorna um texto padrão quando o mouse sai de um card.
 * @param {string} nomeCard - representa a classe do elemento que será descrito.
 * @param {string} texto - uma string contendo a descrição do card específico.
 */
function hoverMudaDescricao(nomeCard, texto) {
    const mudaDescricao = document.querySelector('.mudar-descricao');

    document.querySelector(nomeCard).addEventListener('mouseover', () => {
        mudaDescricao.innerText = texto;
    });

    document.querySelector(nomeCard).addEventListener('mouseout', () => {
        mudaDescricao.innerText =
            'Coloque o Mouse sobre um Card para receber sua descrição neste campo.';
    });
}

/**
 * @function digitarPorLetras
 * Insere texto em um elemento html de forma pausada, simulando efeito de digitação.
 * @param {Object} elemento - elemento do DOM que terá seu texto interno alterado.
 */
function digitarPorLetras(elemento) {
    if (digitando[0] === true) return;

    digitando[0] = true;

    const textoArray = elemento.innerText.split('');
    elemento.innerText = ' ';
    textoArray.forEach((letra, n) => {
        setTimeout(() => {
            elemento.innerText += letra;
        }, 100 * n);
    });

    // setta intervalo para poder digitar novamente evitando um bug
    setTimeout(() => {
        digitando[0] = false;
    }, 3000);
}

/**
 * @function iniciarEvento
 * Inicializa os EventListener das funções @hoverMudaDescricao e @homeLogoClique
 */
function iniciarEventos() {
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
        'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma (protótipos, orientado a objeto, imperativo e, funcional).',
    );
    hoverMudaDescricao(
        '.py',
        'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.',
    );
    hoverMudaDescricao(
        '.nodejs',
        'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.',
    );
    hoverMudaDescricao(
        '.c',
        'C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional para Padronização (ISO).',
    );

    // Inicia Evento de clicar na Logo e Reescrever texto digitado na HOME
    homeLogoClique();
}

/** Variável de controle. Determina o comportamendo da função @digitarPorLetras */
const digitando = [false];

function main() {
    digitarPorLetras(document.querySelector('.home-digitado'));
    iniciarEventos();
}
main();
