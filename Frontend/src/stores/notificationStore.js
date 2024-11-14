import mqttService from "@/services/mqttService";
import { defineStore } from "pinia";
const url = "http://localhost:3000";

export const useNotStore = defineStore("notification", {
  state: () => ({
    userNotifications: [],
    notificationMessage: "",
  }),
  getters: {
    getNotificationMessage: (state) => state.notificationMessage,
  },
  actions: {
    notifyTime(place, price, interval) {
      const topic = `place/${place.id_place}/notify`;
      mqttService.subscribe(topic, (message) => {
        return message;
      });

      setInterval(() => {
        const start = new Date(place.start);
        const now = new Date();

        const diffInHours = Math.abs(now - start) / 36e5;

        const totalPrice = diffInHours * Number(price);

        mqttService.publish(
          topic,
          `Preço atualizado: ${totalPrice.toFixed(2)}`
        );
      },interval);
    },

    notifyPlace(park, boolean) {
      if (boolean) {
        const topic = `parks/${park.id_park}/enter`;
        if (park.free_places > 0) {
          mqttService.publish(
            topic,
            `O parque ${park.name} registou uma nova entrada. Lugares disponíveis: ${Number(park.free_places) - 1}`
          );

          alert(`O parque ${park.name} registou uma nova entrada. Lugares disponíveis: ${Number(park.free_places) - 1}`);
        }
      }else{
        const topic = `parks/${park.id_park}/exit`;
        mqttService.publish(
          topic,
          `O parque ${park.name} registou uma saída. Lugares disponíveis: ${park.free_places + 1}`
        );

        alert(`O parque ${park.name} registou uma saída. Lugares disponíveis: ${Number(park.free_places) + 1}`);
      }
    },
  },
});
