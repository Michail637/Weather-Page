let btn = document.querySelector('.btn');

let city = prompt( "city input" )



let URLandKey = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=8TJJQRRLMR6LDYMDFBWG3Y5R8&contentType=json`;



btn.addEventListener( 'click', function(){
  fetch( URLandKey ).then( function(file){
    let curData = file.json();
    return curData
  } ).then( function(newObj) {
    console.log(newObj)
  } )
} )