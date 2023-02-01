// let btn = document.querySelector('.btn');

// let city = prompt( "city input" )



// let URLandKey = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=8TJJQRRLMR6LDYMDFBWG3Y5R8&contentType=json`;



// btn.addEventListener( 'click', function(){
//   fetch( URLandKey ).then( function(file){
//     let curData = file.json();
//     return curData
//   } ).then( function(newObj) {
//     console.log(newObj)
//   } )
// } )

// function getDayName(dateStr, locale)
// {
//     var date = new Date(dateStr);
//     return date.toLocaleDateString(locale, { weekday: 'long' });        
// }

// var dateStr = '05/23/2014';
// var day = getDayName(dateStr, "nl-NL"); // Gives back 'Vrijdag' which is Dutch for Friday.

// console.log(getDayName())


let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

let days = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


let city = prompt( 'Which city would you like to know weather about ? ' );
let URLandKey = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=8TJJQRRLMR6LDYMDFBWG3Y5R8&contentType=json`;

fetch( URLandKey ).then( function(file){
  let curData = file.json();
  return curData;
} ).then( function(newObj){
  console.log(newObj)
} )





// let datetime = '2023-02-01'
// 
// let day = datetime.getDay();

// console.log(day)