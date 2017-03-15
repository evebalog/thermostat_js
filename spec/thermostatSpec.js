describe('Thermostat', function() {
  var thermostat;
  thermostat = new Thermostat();

  it("starts at 20 degrees", function() {
    expect(thermostat.getTemp()).toEqual(20);
  });

  it("can increase temperature with up function", function() {
    thermostat.up();
    expect(thermostat.getTemp()).toEqual(21);
  });
});
