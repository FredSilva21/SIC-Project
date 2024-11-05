import mqtt from "mqtt";
import { useParkStore } from "@/stores/parkStore";

const brokerUrl = "mqtt://localhost:1883";
const options = {
  clientId: "mqtt-client-" + Math.random().toString(16).substring(2, 8),
  clean: true,
};

// Conectar ao broker
const client = mqtt.connect(brokerUrl, options);

client.on("connect", () => {
  console.log("Conectado ao broker MQTT");

  // Subscrever ao tópico para a lista de parques
  client.subscribe("parks/list");

  // Subscrever ao tópico para detalhes de um parque específico
  client.subscribe("parks/+");
});

client.on("message", (topic, message) => {
  const parkStore = useParkStore();

  try {
    const data = JSON.parse(message.toString());
    if (topic === "parks/list") {
      parkStore.parks = data; // Atualizar a lista de parques
    } else if (topic.startsWith("parks/")) {
      const parkId = topic.split("/")[1];
      if (parkStore.park_id && parkStore.park_id.id === parseInt(parkId)) {
        parkStore.park_id = data; // Atualizar o parque específico
      }
    }
  } catch (error) {
    console.error("Erro ao processar mensagem MQTT:", error);
  }
});

export default client;
