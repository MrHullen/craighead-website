<script>
  import { onMount } from 'svelte'
  import { Chart, Title, Tooltip, Legend, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js'

  Chart.register(Title, Tooltip, Legend, BarElement, BarController, CategoryScale, LinearScale)

  let chart
  let chartCanvas
  let current = 'ue'

  const ueData = {
    title: 'University Entrance',
    labels: ['2019', '2020', '2021', '2022'],
    data: [
      {
        label: `Decile 8 - 10 Girls' Schools`,
        data: [74.2, 77.7, 76.1, 80.6],
        backgroundColor: '#7293A0',
      },
      {
        label: `Decile 9 Girls' Schools`,
        data: [75, 78.5, 78.9, 81.6],
        backgroundColor: '#1D3549',
      },
      {
        label: 'Craighead',
        data: [83, 90, 90.2, 91.8],
        backgroundColor: '#39AB0A',
      },
    ],
  }

  const nceaData = {
    title: 'NCEA Achievement',
    labels: ['2019', '2020', '2021', '2022'],
    data: [
      {
        label: 'Level 1',
        data: [94.4, 92.4, 94.5, 98.5],
        backgroundColor: '#abcea9',
        borderColor: '#73ad70',
        borderWidth: 1,
      },
      {
        label: 'Level 2',
        data: [95.1, 97.7, 95.2, 98],
        backgroundColor: '#73ad70',
      },
      {
        label: 'Level 3',
        data: [91.2, 98, 95.1, 95],
        backgroundColor: '#39AB0A',
      },
    ],
  }

  const endorsementData = {
    title: 'NCEA Achievement and Endorsement',
    labels: ['2019', '2020', '2021', '2022'],
    data: [
      {
        label: 'Level 1 Achieved',
        data: [7.4, 5.4, 21.4, 1.8],
        backgroundColor: '#9cc599',
        borderColor: '#73ad70',
        borderWidth: 1,
        stack: 'Level 1',
      },
      {
        label: 'Level 1 Merit Endorsement',
        data: [60.9, 54, 36.5, 58.2],
        backgroundColor: '#9cc599',
        borderColor: '#73ad70',
        borderWidth: 1,
        stack: 'Level 1',
      },
      {
        label: 'Level 1 Excellence Endorsement',
        data: [26.1, 33, 36.5, 38.5],
        backgroundColor: '#abcea9',
        borderColor: '#73ad70',
        borderWidth: 1,
        stack: 'Level 1',
      },
      {
        label: 'Level 2 Achieved',
        data: [18.5, 27.7, 27.4, 30],
        backgroundColor: '#60a05b',
        stack: 'Level 2',
      },
      {
        label: 'Level 2 Merit Endorsement',
        data: [46, 33, 47.5, 38],
        backgroundColor: '#60a05b',
        stack: 'Level 2',
      },
      {
        label: 'Level 2 Excellence Endorsement',
        data: [30.6, 37, 20.3, 30],
        backgroundColor: '#73ad70',
        stack: 'Level 2',
      },
      {
        label: 'Level 3 Achieved',
        data: [35.3, 36, 31, 40.4],
        backgroundColor: '#359A09',
        stack: 'Level 3',
      },
      {
        label: 'Level 3 Merit Endorsement',
        data: [41.9, 33, 38.5, 36.4],
        backgroundColor: '#359A09',
        stack: 'Level 3',
      },
      {
        label: 'Level 3 Excellence Endorsement',
        data: [14, 29, 25.6, 18.2],
        backgroundColor: '#39AB0A',
        stack: 'Level 3',
      },
    ],
  }

  const literacyNumeracyData = {
    title: 'Literacy and Numeracy Achievement',
    labels: ['Level 1 Literacy', 'Level 1 Numeracy', 'UE Literacy'],
    data: [
      {
        label: `Decile 9 Schools`,
        // data: [87.6, 96.7, 94.1], 2021
        data: [87.6, 97.4, 91.4], // 2022
        backgroundColor: '#1D3549',
      },
      {
        label: 'Craighead',
        // data: [100, 98.2, 95.1], 2021
        data: [100, 98.5, 94.4], // 2022
        backgroundColor: '#39AB0A',
      },
    ],
  }

  function displayUE() {
    current = 'ue'
    chart.options.plugins.title.text = ueData.title
    chart.data.labels = ueData.labels
    chart.data.datasets = ueData.data
    chart.options.scales.x.stacked = false
    chart.options.scales.y.stacked = false
    chart.options.plugins.legend.display = true
    chart.update()
  }

  function displayNCEA() {
    current = 'ncea'
    chart.options.plugins.title.text = nceaData.title
    chart.data.labels = nceaData.labels
    chart.data.datasets = nceaData.data
    chart.options.scales.x.stacked = false
    chart.options.scales.y.stacked = false
    chart.update()
  }

  function displayEndorsement() {
    current = 'endorsement'
    chart.options.plugins.title.text = endorsementData.title
    chart.data.labels = endorsementData.labels
    chart.data.datasets = endorsementData.data
    chart.options.scales.x.stacked = true
    chart.options.scales.y.stacked = true
    chart.options.plugins.legend.display = false
    // chart.options.scales.xEndorsement.display = true
    chart.update()
  }

  function displayLiteracyNumeracy() {
    current = 'literacyNumeracy'
    chart.options.plugins.title.text = literacyNumeracyData.title
    chart.data.labels = literacyNumeracyData.labels
    chart.data.datasets = literacyNumeracyData.data
    chart.options.scales.x.stacked = false
    chart.options.scales.y.stacked = false
    chart.options.plugins.legend.display = true
    chart.update()
  }

  // Initial values for the chart
  let labels = ueData.labels
  let title = ueData.title
  let data = ueData.data

  onMount(() => {
    let ctx = chartCanvas.getContext('2d')
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: data,
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: title,
          },
          legend: {
            position: 'bottom',
          },
        },
        scales: {
          // xEndorsement: {
          //   type: 'category',
          //   offset: true,
          //   labels: ['Level 1', 'Level 2', 'Level 3', 'Level 1', 'Level 2', 'Level 3', 'Level 1', 'Level 2', 'Level 3', 'Level 1', 'Level 2', 'Level 3', ],
          //   display: false,
          //   grid: { display: false },
          // },
          x: {
            grid: { display: false },
          },
          y: {
            min: 0,
            max: 100,
            title: {
              display: true,
              text: 'Percent of students achieving',
            },
          },
        },
        maintainAspectRatio: false,
      },
    })
  })
</script>

<section>
  <div class="content section">
    <p>Craighead is proud of our girls' academic achievements. Our results are consistently above those of similar schools.</p>
    <div class="buttons">
      <button class="button is-info is-rounded has-text-weight-bold" class:is-outlined={current != 'ue'} on:click={displayUE}> University Entrance </button>
      <!-- <button class="button is-info is-rounded has-text-weight-bold" class:is-outlined={current != 'ncea'} on:click={displayNCEA}> NCEA Achievement </button> -->
      <button class="button is-info is-rounded has-text-weight-bold" class:is-outlined={current != 'endorsement'} on:click={displayEndorsement}> NCEA Achievement </button>
      <button class="button is-info is-rounded has-text-weight-bold" class:is-outlined={current != 'literacyNumeracy'} on:click={displayLiteracyNumeracy}> Literacy & Numeracy </button>
    </div>
    <div class="chart-container" style="position: relative">
      <canvas bind:this={chartCanvas} />
    </div>
  </div>
</section>

<style>
  section {
    background-color: #e9e9e9;
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

    .buttons {
      flex-direction: column;
    }

    /* overrides Bulma's behaviour, which is just wrapping buttons */
    .buttons .button:not(:last-child):not(.is-fullwidth) {
      margin-right: 0;
    }
  }
</style>
