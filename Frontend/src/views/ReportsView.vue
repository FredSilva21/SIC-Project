<template>
  <div>
    <Navbar />
    <v-container fluid>
      <div class="table mt-16 d-flex flex-column">
        <v-row class="justify-center">
          <v-col cols="12" class="d-flex justify-center">
            <h1 class="header" v-if="park">Report do {{ park.name }}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-table height="300px" fixed-header>
              <thead>
                <tr>
                  <th class="text-center">Nome</th>
                  <th class="text-center">Ocupação Diária</th>
                  <th class="text-center">Lucro</th>
                  <th class="text-center">Data</th>
                  <th class="text-center">Ação</th>
                </tr>
              </thead>
              <tbody v-if="reports.length != 0">
                <tr v-for="report in reports" :key="report.id_report">
                  <td class="text-center">{{ report.name }}</td>
                  <td class="text-center">{{ report.daily_occupation }}</td>
                  <td class="text-center">{{ report.revenue }}€</td>
                  <td class="text-center">{{ report.date }}</td>
                  <td class="text-center">
                    <v-btn @click="deleteReport(report.id_report)">Apagar</v-btn>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <tr>
                  <td class="text-center" colspan="5">Não existem relatórios</td>
                </tr>
              </tbody>
            </v-table>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { useReportStore } from "@/stores/reportStore";
import { useParkStore } from "@/stores/parkStore";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      reportStore: useReportStore(),
      parkStore: useParkStore(),
    };
  },

  created() {
    const parkId = this.$route.params.parkId;
    this.reportStore.fetchReports(parkId);
    this.parkStore.fetchPark(parkId);
  },

  computed: {
    reports() {
      return this.reportStore.getReports;
    },
    park() {
      return this.parkStore.getPark;
    },
  },

  methods: {
    deleteReport(id_report) {
      try {
        this.reportStore.deleteReport(id_report, this.park.id_park).then(() => {
          this.reportStore.fetchReports(this.park.id_park);
        });
      } catch (error) {
        console.error(error);
        throw error;
      }
    },
  },
};
</script>

<style scoped>
.table {
  margin-top: 30px;
}

.header {
  margin-top: 20px;
}
</style>