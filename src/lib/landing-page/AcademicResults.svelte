<script>
  import { onMount } from 'svelte'
  import {
    Chart,
    Title,
    Tooltip,
    Legend,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js'

  Chart.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    BarController,
    CategoryScale,
    LinearScale
  )

  let chart
  let chartCanvas
  let current = 'ue'

	const chartLabels = ['2019', '2020', '2021', '2022']

  const ueData = {
    title: 'University Entrance',
    data: [
      {
        label: 'Decile 8 - 10 Girls',
        data: [74.2, 77.7, 76.1, 78],
        backgroundColor: '#7293A0',
      },
      {
        label: 'Decile 9 Girls',
        data: [75, 78.5, 78.9, 80],
        backgroundColor: '#9D7994',
      },
      {
        label: 'Craighead',
        data: [83, 90, 90.2, 95],
        backgroundColor: '#39AB0A',
      },
    ]
  }
  
  // TODO: Update these data values
  const nceaData = {
    title: 'NCEA Achievement',
    data: [
      {
        label: 'Level 1',
        data: [74.2, 77.7, 76.1, 78],
        backgroundColor: '#2E8708',
      },
      {
        label: 'Level 2',
        data: [75, 78.5, 78.9, 80],
        backgroundColor: '#359A09',
      },
      {
        label: 'Level 3',
        data: [83, 90, 90.2, 95],
        backgroundColor: '#39AB0A',
      },
    ]
  }

  function displayUE() {
    current = 'ue'
    chart.options.plugins.title.text = ueData.title
    chart.data.datasets = ueData.data
    chart.update()
  }

  function displayNCEA() {
    current = 'ncea'
    chart.options.plugins.title.text = nceaData.title
    chart.data.datasets = nceaData.data
    chart.update()
  }

  // Initial values for the chart
  let labels = chartLabels
  let title = ueData.title
  let data = ueData.data

  onMount( () => {
    let ctx = chartCanvas.getContext('2d')
    chart = new Chart(
      ctx,
      {
        type: 'bar',
        data: {
          labels: labels,
          datasets: data,
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: title
            }
          },
          scales: {
            x: { grid: { display: false } }
          },
          maintainAspectRatio: false
        }
      }
    )
  })
</script>

<section>
  <div class="content section">
    <p> Craighead is proud of our girls' academic achievements. Our results are consistently above those of similar schools. </p>
    <div class="buttons">
      <button
        class="button is-info is-rounded has-text-weight-bold"
        class:is-outlined="{current != 'ue'}"
        on:click={displayUE}>
          University Entrance
        </button>
      <button
        class="button is-info is-rounded has-text-weight-bold"
        class:is-outlined="{current != 'ncea'}"
        on:click={displayNCEA}>
          NCEA Achievement
        </button>
    </div>
    <div class="chart-container" style="position: relative">
      <canvas bind:this={chartCanvas} />
    </div>
  </div>
</section>

<style>
  section {
    background-color: #E9E9E9;
    font-size: 1.25rem;
    margin: 0 4rem;
  }

  .buttons {
    justify-content: center;
  }

  .chart-container {
      height: 60vh;
    }

  /* mobile */
  @media (max-width: 700px) {
    section {
      font-size: 1rem;
      margin: 0 0rem;
    }

    .section {
      padding: 1.5rem 1rem;
    }
  }
</style>