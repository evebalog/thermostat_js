$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();
  checkPowerSavingMode();


  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=4a96b45b37e261676cf9674bb5cb8c4b&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  $('#current-city').change(function() {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=4a96b45b37e261676cf9674bb5cb8c4b&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
    })
  })

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=4a96b45b37e261676cf9674bb5cb8c4b&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#current-city-display').text(city);
    })
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
    checkPowerSavingMode();
  });

  function checkPowerSavingMode(){
    if (thermostat.currentMode) {
    $('#boxed').attr('class', 'ON');
    } else {
    $('#boxed').attr('class', 'OFF');
    }
  }

  function updateTemperature(){
    $('#temperature').text(thermostat.currentTemp);
    if(thermostat.checkUsage() === "Low-usage") {
      $('#temperature').attr('class', 'Low-usage');
      $('#conditional').attr('class', 'Low-usage-img');
    } else if (thermostat.checkUsage() === "Medium-usage") {
      $('#temperature').attr('class', 'Medium-usage');
      $('#conditional').attr('class', 'Medium-usage-img');
    } else {
      $('#temperature').attr('class', 'High-usage');
      $('#conditional').attr('class', 'High-usage-img');
    }
  };
});
