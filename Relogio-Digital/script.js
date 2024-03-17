function atualizarHorario() {
    // Cria um novo objeto Date para obter o horário atual
    let dataAtual = new Date();

    // Obtém as informações de hora, minutos e segundos
    let hora = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    // Formata a hora para garantir que tenha sempre dois dígitos (ex: 09:05:12)
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Exibe o horário atual formatado na div com id "horario"
    document.querySelector('#hours-clock').textContent = hora;
    document.querySelector('#minutes-clock').textContent = minutos;
    document.querySelector("#seconds-clock").textContent = segundos;
}

// Chama a função atualizarHorario a cada segundo (1000 milissegundos)
setInterval(atualizarHorario, 1000);

// Chama a função uma vez para exibir o horário inicial imediatamente
//atualizarHorario();