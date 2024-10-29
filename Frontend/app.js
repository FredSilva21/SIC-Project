// app.js
const mqtt = require('mqtt');
const config = require('./mqttClient');

const client = mqtt.connect(config.brokerUrl, config.options);

client.on('connect', () => {
  console.log('Conectado ao HiveMQ Cloud');

  // Função para publicar status de vagas
  // function publicarStatusVaga(idEstacionamento, idVaga, status) {
  //   const topico = `estacionamento/${idEstacionamento}/vaga/${idVaga}/status`;
  //   const mensagem = JSON.stringify({ status });
  //   client.publish(topico, mensagem, { qos: 1 }, (err) => {
  //     if (!err) console.log(`Status da vaga publicado: ${mensagem}`);
  //   });
  // }

  // // Função para publicar mudança de status de vagas
  // function publicarMudancaStatus(idEstacionamento, idVaga, status, horaOcupacao) {
  //   const topico = `estacionamento/${idEstacionamento}/vaga/${idVaga}/mudanca_status`;
  //   const mensagem = JSON.stringify({ hora_ocupacao: horaOcupacao, status });
  //   client.publish(topico, mensagem, { qos: 1 }, (err) => {
  //     if (!err) console.log(`Mudança de status publicada: ${mensagem}`);
  //   });
  // }

  // // Função para publicar preço por hora da vaga
  // function publicarPrecoVaga(idEstacionamento, idVaga, precoHora) {
  //   const topico = `estacionamento/${idEstacionamento}/vaga/${idVaga}/preco`;
  //   const mensagem = JSON.stringify({ preco_hora: precoHora });
  //   client.publish(topico, mensagem, { qos: 1 }, (err) => {
  //     if (!err) console.log(`Preço da vaga publicado: ${mensagem}`);
  //   });
  // }

  // // Função para publicar reserva de vaga
  // function publicarReservaVaga(idEstacionamento, idVaga, reservada, horaReserva) {
  //   const topico = `estacionamento/${idEstacionamento}/vaga/${idVaga}/reserva`;
  //   const mensagem = JSON.stringify({ reservada, hora_reserva: horaReserva });
  //   client.publish(topico, mensagem, { qos: 1 }, (err) => {
  //     if (!err) console.log(`Reserva da vaga publicada: ${mensagem}`);
  //   });
  // }

  // // Função para publicar relatório de utilização
  // function publicarRelatorioUso(idEstacionamento, ocupacaoMedia, vagasLivres, vagasOcupadas) {
  //   const topico = `estacionamento/${idEstacionamento}/relatorio/uso`;
  //   const mensagem = JSON.stringify({
  //     ocupacao_media: ocupacaoMedia,
  //     vagas_livres: vagasLivres,
  //     vagas_ocupadas: vagasOcupadas,
  //   });
  //   client.publish(topico, mensagem, { qos: 1 }, (err) => {
  //     if (!err) console.log(`Relatório de uso publicado: ${mensagem}`);
  //   });
  // }

  // // Exemplos de publicação de mensagens
  // publicarStatusVaga('centro_comercial', 1, 'livre');
  // publicarMudancaStatus('centro_comercial', 1, 'ocupada', '2024-10-14T12:30:00');
  // publicarPrecoVaga('centro_comercial', 1, 2.5);
  // publicarReservaVaga('centro_comercial', 1, true, '2024-10-14T14:00:00');
  // publicarRelatorioUso('centro_comercial', '75%', '20', '80');

  async function fetchUtilizadores() {
    const response = await fetch('http://127.0.0.1:3000/users');
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    const utilizadores = await response.json();
    return utilizadores;
  }
  
  //Função para publicar todos os utilizadores
  
  async function publicarUtilizadores() {
    const topico = 'utilizadores';
    try {
      const utilizadores = await fetchUtilizadores();
      const mensagem = JSON.stringify(utilizadores);
      client.publish(topico, mensagem, { qos: 1 }, (err) => {
        if (!err) console.log(`Utilizadores publicados: ${mensagem}`);
      });
    } catch (error) {
      console.error('Erro ao buscar utilizadores:', error);
    }
  }
  

  publicarUtilizadores();
});

client.on('error', (err) => {
  console.error('Erro de conexão:', err);
});
