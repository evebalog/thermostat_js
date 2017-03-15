function Thermostat() {
  this.currentTemp = 20;
}

Thermostat.prototype.temp = function () {
  return this.currentTemp;
};
