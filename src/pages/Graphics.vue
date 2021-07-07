<template>
  <div>
    <canvas :id="this.graph.id" width="100%" height="100px" />
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  name: 'brews',
  props: ['graph'],
  mounted () {
    this.generateChart()
  },
  updated () {
    this.generateChart()
  },
  methods: {
    async generateChart () {
      let ctx = document.getElementById(this.graph.id).getContext('2d')

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.graph.headers,
          datasets: [{
            label: this.graph.label,
            data: this.graph.results,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        }
      })
    }
  }
}
</script>
