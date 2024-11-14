import mqttService from "@/services/mqttService";
import { defineStore } from "pinia";
import { useNotStore } from "./notificationStore";

const url = "http://localhost:3000";

export const useParkStore = defineStore("park", {
  state: () => ({
    connected: false,
    parks: [],
    park_id: null,
    placeId: null,
    place: null,
  }),
  getters: {
    getParks: (state) => state.parks,
    getPark: (state) => state.park_id,
    getPlaceId: (state) => state.placeId,
    getPlace: (state) => state.place,
  },
  actions: {
    connect() {
      mqttService.connect("mqtt://localhost:1883");
      this.connected = true;
      console.log("Connected to MQTT broker");
    },

    disconnect() {
      mqttService.disconnect();
      this.connected = false;
      console.log("Disconnected from MQTT broker");
    },

    async fetchParks() {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}/parks`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          this.parks = data.parks;
          localStorage.setItem("parks", JSON.stringify(this.parks));
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchPark(id) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}/parks/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          this.park_id = data.park;
        }
      } catch (error) {
        console.error(error);
      }
    },

    async addPlace(park) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}/parks/${park.id_park}/places`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        
        if (response.status === 201) {
          const data = await response.json();
          this.placeId = data.place.id_place;

          if (Boolean(localStorage.getItem("type")) === false) {
            const topic = `parks/${park.id_park}/enter`;
            mqttService.subscribe(topic, (message) => {
              return message;
            });
            useNotStore().notifyPlace(park, true);
          }
          useNotStore().notifyPlace(park, true);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async editPlace(place, park, data) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}/places/${place.id_place}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        });
        if (response.status === 200) {
          const data = await response.json();
          this.place = data.place;

          const topic = `parks/${place.id_park}/exit`;

          mqttService.publish(`place/${place.id_place}/notify`, "", {
            retain: true,
          });
          mqttService.subscribe(topic, (message) => {
            return message;
          });
          mqttService.unsubscribe(`parks/${place.id_park}/enter`, (message) => {
            return message;
          });
          mqttService.unsubscribe(
            `place/${place.id_place}/notify`,
            (message) => {
              return message;
            }
          );

          useNotStore().notifyPlace(park, false);
        }
      } catch (error) {
        console.error(error);
      }
    },

    async fetchPlace(placeId) {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${url}/places/${placeId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const data = await response.json();
          this.place = data.place;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
