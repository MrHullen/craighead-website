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

  const ueData = {
    title: 'University Entrance',
    labels: ['2019', '2020', '2021', '2022'],
    data: [
      {
        label: `Decile 8 - 10 Girls' Schools`,
        data: [74.2, 77.7, 76.1, 90],
        backgroundColor: '#7293A0',
      },
      {
        label: `Decile 9 Girls' Schools`,
        data: [75, 78.5, 78.9, 90],
        backgroundColor: '#1D3549',
      },
      {
        label: 'Craighead',
        data: [83, 90, 90.2, 100],
        backgroundColor: '#39AB0A',
      },
    ]
  }
  
  const nceaData = {
    title: 'NCEA Achievement',
    labels: ['2019', '2020', '2021', '2022'],
    data: [
      {
        label: 'Level 1',
        data: [94.4, 92.4, 94.5, 100],
        backgroundColor: '#abcea9',
        borderColor: '#73ad70',
        borderWidth: 1
      },
      {
        label: 'Level 2',
        data: [95.1, 97.7, 95.2, 100],
        backgroundColor: '#73ad70',
      },
      {
        label: 'Level 3',
        data: [91.2, 98, 95.1, 100],
        backgroundColor: '#39AB0A',
      },
    ]
  }

  const endorsementData = {
    title: 'NCEA Endorsement',
    labels: ['2020', '2021', '2022'],
    data: [
      {
        label: 'Level 1 Merit Endorsement',
        data: [54, 36.5, 25],
        backgroundColor: '#9cc599',
        borderColor: '#73ad70',
        borderWidth: 1,
        
        stack: "Level 1"
      },
      {
        label: 'Level 1 Excellence Endorsement',
        data: [33, 36.5, 25],
        backgroundColor: '#abcea9',
        borderColor: '#73ad70',
        borderWidth: 1,
        stack: "Level 1"
      },
      {
        label: 'Level 2 Merit Endorsement',
        data: [33, 47.5, 25],
        backgroundColor: '#60a05b',
        stack: "Level 2"
      },
      {
        label: 'Level 2 Excellence Endorsement',
        data: [37, 20.3, 25],
        backgroundColor: '#73ad70',
        stack: "Level 2"
      },
      {
        label: 'Level 3 Merit Endorsement',
        data: [0, 33, 38.5, 25],
        backgroundColor: '#359A09',
        stack: "Level 3"
      },
      {
        label: 'Level 3 Excellence Endorsement',
        data: [0, 29, 25.6, 25],
        backgroundColor: '#39AB0A',
        stack: "Level 3"
      },
    ]
  }

  const literacyNumeracyData = {
    title: 'Literacy and Numeracy Achievement',
    labels: ['Level 1 Literacy', 'Level 1 Numeracy', 'UE Literacy'],
    data: [
      {
        label: `Decile 9 Schools`,
        data: [87.6, 96.7, 94.1],
        backgroundColor: '#1D3549',
      },
      {
        label: 'Craighead',
        data: [100, 98.2, 95.1],
        backgroundColor: '#39AB0A',
      },
    ]
  }

  function displayUE() {
    current = 'ue'
    chart.options.plugins.title.text = ueData.title
    chart.data.labels = ueData.labels
    chart.data.datasets = ueData.data
    chart.options.scales.x.stacked = false
    chart.options.scales.y.stacked = false
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
    chart.update()
  }

  // Initial values for the chart
  let labels = ueData.labels
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
            },
            legend: {
              position: 'bottom'
            }
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
                text: 'Percent of students achieving'
              }
            },
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
      <button
        class="button is-info is-rounded has-text-weight-bold"
        class:is-outlined="{current != 'endorsement'}"
        on:click={displayEndorsement}>
          NCEA Endorsement
        </button>
      <button
        class="button is-info is-rounded has-text-weight-bold"
        class:is-outlined="{current != 'literacyNumeracy'}"
        on:click={displayLiteracyNumeracy}>
          Literacy & Numeracy
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

    .buttons {
      flex-direction: column;
    }

    /* overrides Bulma's behaviour, which is just wrapping buttons */
    .buttons .button:not(:last-child):not(.is-fullwidth) {
      margin-right: 0;
    }
  }
</style>