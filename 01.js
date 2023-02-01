let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
let body = document.querySelector('body');

let city = prompt( 'Which city would you like to know the weather about ? ' );

if(!city.trim()){
  alert('Input a city')
}

else{
  let URLandKey = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=8TJJQRRLMR6LDYMDFBWG3Y5R8&contentType=json`;

  fetch( URLandKey ).then( function(file){
    let curData = file.json();
    return curData;
  } ).then( function(newObj){
    console.log(newObj)

    function concatenate(){
      let concatenation = ``;
      for( let i = 1; i < 8; i++ ){
        let htmlNew = `
        <div class="element">
        <div class="image">
          <img src= images/${newObj.days[i].icon}.svg>
        </div>
        <div class="date-temp">
          <div class="temp">${Math.round(newObj.days[i].temp)}</div>
          <div class="day">${days[ new Date(newObj.days[i].datetime).getDay()]}</div>
        </div>
      </div>    
        `
        concatenation = concatenation + htmlNew;
      }
      return concatenation
    }


    let dateNumObj = newObj.days[0].datetime; // will always be the current date, as it is the 1st day from the object,  in format'01-02-2023'

    let dayInNumbers = new Date(dateNumObj).getUTCDate(); // e.g. 15 or 31 or 25
    let month = months[ new Date(dateNumObj).getMonth()]; // e.g. January, March etc.

    let dayNumMonth = dayInNumbers + ' ' + month;  
    let year = new Date( dateNumObj ).getFullYear();
    

    let htmlPage = `
    <div class="container">
    <header>
      <div class="line"></div>
      <div class="title">Weather</div>
    </header>


    <main>
      <div class="image-block">
        <div class="date-month">
          <div class="number-date">${dayNumMonth}</div>
          <div class="year">${year}</div>
        </div>
        <div class="weather-image">
          <img src="images/${newObj.days[0].icon}.svg" alt="">
          <div class="weather-condition">${newObj.days[0].conditions}</div>
        </div>
      
      </div>

      <div class="weather-right-hand-side">
        <div class="up-block">
          <p>Temperature</p>
        </div>
        <div class="middle-block">
          <div class="temp-data">${Math.round(newObj.days[0].temp)}°</div>
          <div class="temp-icon"><i class="fa-solid fa-temperature-three-quarters"></i></div>
        </div>
        <div class="down-block">
          <p>Humidity <span class="humidity-data" >${newObj.days[0].humidity}%</span></p>
          <div class="humidity-icon">
            <img src="images/humidity.jpg" alt="">
          </div>
        </div>
      </div>
    </main>


    <footer>
      <div class="slider">
        ${concatenate()}
      </div>
    </footer>

  </div>
    `
    body.insertAdjacentHTML( 'afterbegin', htmlPage );
  } );

}

