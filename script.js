// nome aparece no ola

function exibirSaudacao() {
    // Obtém os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    // Obtém o valor do parâmetro 'nome'
    const nome = urlParams.get('nome');
    // Exibe a saudação com o nome
    document.getElementById('saudacao').textContent = `Olá, ${nome}!`;
}
window.onload = exibirSaudacao;

//  nome aparece no ola 

