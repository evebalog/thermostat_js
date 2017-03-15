'use strict';

function Thermostat() {
  this.currentTemp = 20;
  this.currentMode = true;
  this.MINIMUMTEMP = 10
  this.PSMAXIMUMTEMP = 25
  this.MAXIMUMTEMP = 32
}

Thermostat.prototype.mode = function () {
  return this.currentMode;
};

Thermostat.prototype.changeMode = function () {
   this.currentMode = !this.currentMode;
   if(this.getTemp() > 25 ) {
     this.currentTemp = 25
   }
};

Thermostat.prototype.getTemp = function () {
  return this.currentTemp;
};

Thermostat.prototype.up = function () {
  if(this.mode() === false) {
    var max = this.MAXIMUMTEMP;
  } else {
    var max = this.PSMAXIMUMTEMP;
  }
  if(this.getTemp() === max) {
  throw new Error("Temperature is at maximum");
}
  this.currentTemp += 1;
};

Thermostat.prototype.down = function () {
  if(this.getTemp() === this.MINIMUMTEMP) {
  throw new Error("Temperature is at minimum");
}
  this.currentTemp -= 1;
};

Thermostat.prototype.reset = function () {
  this.currentTemp = 20
};
