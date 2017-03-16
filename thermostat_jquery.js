$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

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
    $('#power-saving-status').text(thermostat.currentMode)
    updateTemperature();
  });

  function updateTemperature(){
   $('#temperature').text(thermostat.currentTemp);
   $('#temperature').attr('class', thermostat.checkUsage());
   // if(thermostat.checkEnergyUsage() === 'low') {
   //   $('#temperature').css('color', 'green')
   // } else if(thermostat.checkEnergyUsage() === 'medium') {
   //   $('#temperature').css('color', 'black')
   // } else {
   //   $('#temperature').css('color', 'red')
   // }
 };
});
