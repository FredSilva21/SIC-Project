const mqtt = require('mqtt');

// Altere a URL para MQTT padrão
const brokerUrl = 'mqtt://localhost:1883'; // Conectando via MQTT padrão
const options = {
  clientId: 'mqtt-client-' + Math.random().toString(16).substring(2, 8),
  clean: true,
};

// Conectar ao broker
const client = mqtt.connect(brokerUrl, options);

client.on('connect', () => {
  console.log('Conectado ao broker MQTT!');

  // Inscreva-se em um tópico
  client.subscribe('meuTopico/teste', (err) => {
    if (!err) {
      console.log('Inscrito com sucesso em meuTopico/teste');
    } else {
      console.error('Erro ao inscrever-se:', err);
    }
  });
});

client.on('error', (err) => {
  console.error('Erro de conexão:', err);
});

client.on('message', (topic, message) => {
  console.log(`Mensagem recebida em ${topic}: ${message.toString()}`);
});

module.exports = client;