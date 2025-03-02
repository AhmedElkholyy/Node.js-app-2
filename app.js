const geocode = require("./api/geocode");
const forecast = require("./api/forecast");

const address = process.argv[2];

geocode(address, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        console.log(error);
      } else {
        console.log(forecastData);
      }
    });
  }
});
