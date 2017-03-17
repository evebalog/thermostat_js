$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=4a96b45b37e261676cf9674bb5cb8c4b&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);                      
  })

  $('#temperature-up').click(function(){
    thermostat.up();
    updateTemperature();
  });

  $('#temperature-down').click(function(){
    thermostat.down();
    updateTemperature();
  });

  $('#temperature-reset').click(function(){
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-change').click(function(){
    thermostat.changeMode();
    var blabla;
    if (thermostat.currentMode) {
      blabla = 'ON';
    } else {
      blabla = 'OFF';
    }
    $('#power-saving-status').text(blabla)
    updateTemperature();
  });

  function updateTemperature(){
   $('#temperature').text(thermostat.currentTemp);
   $('#temperature').attr('class', thermostat.checkUsage());
 };


});
