const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=b35a23c8a4124259858203526250203&q=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "You are currently in " +
          response.body.location.name +
          " Latitude is " +
          response.body.location.lat +
          " and longitude is " +
          response.body.location.lon +
          " and the temperature is " +
          response.body.current.temp_c +
          " degree celsius" +
          " and the weather is " +
          response.body.current.condition.text
      );
    }
  });
};

module.exports = forecast;
