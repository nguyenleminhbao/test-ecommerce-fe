<template>
  <Bar :data="data" :options="options" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return {
      data: {
        labels: ['5.0 ⭐', '4.0 ⭐', '3.0 ⭐', '2.0 ⭐', '1.0 ⭐'],
        datasets: [
          {
            label: 'Rating',
            backgroundColor: '#377DFF',
            data: [10, 1, 0, 2, 1],
            barPercentage: 0.5
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true
      } as any
    }
  }
}
</script>
