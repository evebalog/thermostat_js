function Thermostat() {
  this.currentTemp = 20;
}

Thermostat.prototype.getTemp = function () {
  return this.currentTemp;
};

Thermostat.prototype.up = function () {
  this.currentTemp += 1
};
