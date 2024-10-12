// Adiciona um evento de envio ao formulário com ID 'campos'
document.getElementById('campos').addEventListener('submit', function(event) {
    console.log('Formulário submetido'); // Loga no console quando o formulário é submetido
    event.preventDefault(); // Evita o envio padrão do formulário

    // Obtém os valores dos campos de entrada
    let nome = document.getElementById('nome').value;
    let xp = parseInt(document.getElementById('xp').value); // Converte para número
    let nivel;

    // Determina o nível do herói com base na quantidade de experiência (xp)
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 6000) {
        nivel = "Ouro";
    } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Platina";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Ascendente";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Exibe o resultado no div de resultado
    const resultado = `O Herói ${nome} está no nível ${nivel}`;
    document.getElementById('resultado').textContent = resultado;
});

