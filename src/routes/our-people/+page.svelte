<script>
  import Head from '$lib/Head.svelte'
  import Header from '$lib/page/Header.svelte'
  import SideMenu from '$lib/page/SideMenu.svelte'
  import PeopleSection from '$lib/people/PeopleSection.svelte';

  export let data
  // let data = {
  //   page: {
  //     title: "Our People",
  //     peopleSections: [
  //   {
  //     heading: "Senior Leadership Team - Rōpū Kaiarahi Matua",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac risus massa. Pellentesque elementum aliquet dignissim. Suspendisse turpis purus, fermentum ut rhoncus nec, fermentum quis magna.",
  //     people: [
  //       {
  //         name: "Lara Hearn",
  //         position: "Principal",
  //         image: "https://cds.craighead.school.nz/wp-content/uploads/2024/02/Lara-Feb-24-300x300x300.jpg" 
  //       },
  //       {
  //         name: "Sonya Hull",
  //         position: "Deputy Principal",
  //         image: "https://cds.craighead.school.nz/wp-content/uploads/2024/02/Sonya-300x300x300.jpg" 
  //       },
  //       {
  //         name: "Andrew Jones",
  //         position: "Deputy Principal",
  //         image: "https://cds.craighead.school.nz/wp-content/uploads/2024/02/Andrew-300x300x300.jpg" 
  //       },
  //     ]
  //   },
  //   {
  //     heading: "Heads of Department - Upoko o te Tari",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac risus massa. Pellentesque elementum aliquet dignissim. Suspendisse turpis purus, fermentum ut rhoncus nec, fermentum quis magna.",
  //     people: [
  //       {
  //         name: "Lara Hearn",
  //         position: "Principal",
  //         image: "https://cds.craighead.school.nz/wp-content/uploads/2024/02/Lara-Feb-24-300x300x300.jpg" 
  //       },
  //       {
  //         name: "Sonya Hull",
  //         position: "Deputy Principal",
  //         image: "https://cds.craighead.school.nz/wp-content/uploads/2024/02/Sonya-300x300x300.jpg" 
  //       },
  //       {
  //         name: "Andrew Jones",
  //         position: "Deputy Principal",
  //         image: "https://cds.craighead.school.nz/wp-content/uploads/2024/02/Andrew-300x300x300.jpg" 
  //       },
  //     ]
  //   },
  //   {
  //     heading: "Specialist Roles - Kaiārahi",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac risus massa. Pellentesque elementum aliquet dignissim. Suspendisse turpis purus, fermentum ut rhoncus nec, fermentum quis magna.",
  //     people: [
  //       {
  //         name: "Lara Hearn",
  //         position: "Principal",
  //         image: "https://cds.craighead.school.nz/wp-content/uploads/2024/02/Lara-Feb-24-300x300x300.jpg" 
  //       },
  //       {
  //         name: "Sonya Hull",
  //         position: "Deputy Principal",
  //         image: "https://cds.craighead.school.nz/wp-content/uploads/2024/02/Sonya-300x300x300.jpg" 
  //       },
  //       {
  //         name: "Andrew Jones",
  //         position: "Deputy Principal",
  //         image: "https://cds.craighead.school.nz/wp-content/uploads/2024/02/Andrew-300x300x300.jpg" 
  //       },
  //     ]
  //   }
  // ]
  //   }
  // }
</script>

<Head title={data.page.title} description={data.page.introduction} />

<Header title={data.page.title} subtitle={data.page.introduction} image={data.page.backgroundImage} />

<div class="columns">
  <main class="content column">
    {#each data.page.peopleSections as section}
      <PeopleSection {section} />
    {/each}
  </main>
  <aside class="column is-3">
    <SideMenu title={data.page.title} sections={data.page.peopleSections} />
  </aside>
</div>