
var 5Dayforcast = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"

fetch(drink)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    console.log(data);
  });



  