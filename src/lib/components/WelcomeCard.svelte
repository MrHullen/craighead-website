<div class="welcome-card">
  <div class="welcome-card-bar">
    <div class="welcome-card-block" />
  </div>
  <div class="welcome-card-items">
    <div class="welcome-card-items-start">
      <p>
        Craighead has a reputation for lifting the performance of our students – in all activities, both in and out of the classroom.  We believe many students have unrealized potential and we enjoy helping each girl discover her capabilities.
      </p>
      <a class="button is-info is-rounded">
        Discover our prospectus
      </a>
    </div>
    <div class="welcome-card-items-end">
      <figure class="image">
        <img class="is-rounded is-square" src="/student-leaders.jpg" alt="Student leaders" />
        <figcaption>Alysha and Zara, Student Leaders</figcaption>
      </figure>
    </div>
  </div>
</div>


<style>
  .welcome-card {
    position: relative;
  }

  /* background */

  .welcome-card-bar {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    z-index: 0;
  }
  
  .welcome-card-block {
    background-color: #E9E9E9;
    width: 100%;
    height: 75%;
  }

  /* left side */

  .welcome-card-items {
    padding: 0vh 10vw;
    display: flex;
    align-items: center;
  }
  
  .welcome-card-items-start {
    width: 40vw;
    margin: 0 5%;
    z-index: 1;
  }
  
  .welcome-card-items-end {
    width: 40vw;
    margin: 0 5%;
  }

  a,
  p {
    display: block;
    width: fit-content;
    margin: 2rem auto;
  }

  /* right side */

  img {
    border: 0.5rem solid #E9E9E9;
  }

  figcaption {
    position: absolute;
    bottom: 20%;
    text-align: center;
    width: 100%;
    background-color: #E9E9E9;
    padding: 1rem 0;
  }
</style>