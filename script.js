/* Lógica do Simulador de Estufa Sustentável - Agrinho 2026 
    Variáveis baseadas em parâmetros reais para o cultivo de morango.
*/

// Selecionando os inputs e elementos de exibição
const inputTemp = document.getElementById('temp');
const inputUmidade = document.getElementById('umidade');
const inputPh = document.getElementById('ph');

const displayTemp = document.getElementById('val-temp');
const displayUmidade = document.getElementById('val-umidade');
const displayPh = document.getElementById('val-ph');

const feedback = document.getElementById('feedback');
const emoji = document.getElementById('status-emoji');

// Função principal que atualiza a simulação
function atualizarSimulacao() {
    // 1. Capturar os valores dos Sliders
    const temp = parseFloat(inputTemp.value);
    const umidade = parseFloat(inputUmidade.value);
    const ph = parseFloat(inputPh.value);

    // 2. Atualizar os números na tela
    displayTemp.innerText = temp;
    displayUmidade.innerText = umidade;
    displayPh.innerText = ph;

    // 3. Lógica de Avaliação (Equilíbrio Sustentável)
    // Parâmetros ideais: Temp (18-25), Umidade (60-80), pH (5.5-6.5)
    
    let mensagem = "";
    let classeCss = "";
    let emojiIcone = "";

    const climaIdeal = (temp >= 18 && temp <= 25);
    const umidadeIdeal = (umidade >= 60 && umidade <= 80);
    const phIdeal = (ph >= 5.5 && ph <= 6.5);

    if (climaIdeal && umidadeIdeal && phIdeal) {
        mensagem = "🌱 Equilíbrio Perfeito! Produção máxima com gasto mínimo de recursos.";
        classeCss = "sustentavel";
        emojiIcone = "🍓";
    } 
    else if (!climaIdeal && umidadeIdeal) {
        mensagem = "⚠️ Clima instável. Ajuste a ventilação para proteger as flores.";
        classeCss = "alerta";
        emojiIcone = "🍃";
    }
    else if (temp > 35 || umidade < 30) {
        mensagem = "🚨 ALERTA CRÍTICO: Risco de perda total da safra por estresse!";
        classeCss = "perigo";
        emojiIcone = "🥀";
    }
    else {
        mensagem = "Ajuste os parâmetros para alcançar o Futuro Sustentável.";
        classeCss = "alerta";
        emojiIcone = "🌿";
    }

    // 4. Aplicar as mudanças no HTML
    feedback.innerText = mensagem;
    feedback.className = classeCss;
    emoji.innerText = emojiIcone;

    // Efeito visual opcional: mudar a opacidade se a planta estiver morrendo
    emoji.style.opacity = (emojiIcone === "🥀") ? "0.5" : "1";
}

// Ouvir as mudanças nos controles
// O evento 'input' detecta a mudança enquanto você arrasta o slider
inputTemp.addEventListener('input', atualizarSimulacao);
inputUmidade.addEventListener('input', atualizarSimulacao);
inputPh.addEventListener('input', atualizarSimulacao);

// Iniciar a simulação assim que a página carregar
window.onload = atualizarSimulacao;