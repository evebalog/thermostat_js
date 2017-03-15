function Thermostat() {
  this.currentTemp = 20;
}

Thermostat.prototype.getTemp = function () {
  return this.currentTemp;
};

Thermostat.prototype.up = function () {
  this.currentTemp += 1;
};

Thermostat.prototype.down = function () {
  if(this.getTemp() === 10) {
  throw new Error("Temperature is at minimum");
}
  this.currentTemp -= 1;
};
