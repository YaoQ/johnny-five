var five = require("../lib/johnny-five.js");
var board = new five.Board();

board.on("ready", function() {
  var temperature = new five.Thermometer({
    controller: "TMP102"
  });

  temperature.on("change", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });
});

// @markdown
// - [TMP102 - Temperature Sensor](https://www.sparkfun.com/products/11931)
// @markdown
