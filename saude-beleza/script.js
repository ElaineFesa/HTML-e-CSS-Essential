window.sr = ScrollReveal(); /*Inicializa o ScrollReveal e atribui a variável sr para facilitar o uso. */
sr.reveal('.grid', { /*Aplica a animação de revelação aos elementos com a classe .grid. */
    duration: 2000,
}) /*Define a duração da animação em milissegundos. */
sr.reveal('.grid-equipe', { /*Aplica a animação de revelação aos elementos com a classe .grid-equipe. */
    rotate: { /*Configura a rotação da animação. */
        x: 0, /*Define a rotação no eixo X em graus. */
        y: 100, /*Define a rotação no eixo Y em graus. */
        z: 0, /*Define a rotação no eixo Z em graus. */
}})
sr.reveal('.video', { /*Aplica a animação de revelação aos elementos com a classe .video. */
    duration: 2000,
})


function escrita(elemento) {
    const textoArray = elemento.innerHTML.split(''); /*ivide o texto do elemento em um array de letras. */
    elemento.innerHTML = ''; /*Limpa o conteúdo do elemento para que a animação possa ser exibida. */
    textoArray.forEach((letra, i) => { /* Para cada letra no array, executa uma função com a letra e seu índice. */
        setTimeout(function () {
            elemento.innerHTML += letra; /*Adiciona a letra ao conteúdo do elemento após um tempo de atraso. */
        }, 75 * i); /*O tempo de atraso para cada letra, multiplicado pelo índice da letra. */
    });
}
const animacao = document.querySelector('h2'); /*Seleciona o elemento h2 para aplicar a animação. */
escrita(animacao); /*Chama a função escrita, passando o elemento selecionado. */
