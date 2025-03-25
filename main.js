// Função para mostrar a curiosidade clicada
function mostrarCuriosidade(elemento) {
    // Respostas específicas para cada curiosidade
    const respostas = {
        "Em que ano foi fundado?": "O Flamengo foi fundado em 15 de novembro de 1895.",
        "Quem foi o maior ídolo?": "O maior ídolo do Flamengo foi Zico.",
        "Qual o maior título conquistado?": "O maior título conquistado foi a Copa Libertadores da América e o Mundial em dezembro de 1981.",
        "Qual foi a maior goleada?": "A maior goleada do Flamengo foi em abril de 1995, quando o clube venceu o Kaburé, do Tocantins, por 8 a 0 na Copa do Brasil."
    };

    // Pega a pergunta clicada
    const pergunta = elemento.innerHTML.trim(); 

    // Verifica se a pergunta tem uma resposta
    if (respostas[pergunta]) {
        // Substitui a pergunta pela resposta
        elemento.innerHTML = respostas[pergunta]; 
        elemento.style.backgroundColor = "rgb(189, 195, 199)"; // Muda a cor de fundo
    }
}
