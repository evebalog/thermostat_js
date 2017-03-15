describe('Thermostat', function() {
  var thermostat;
  thermostat = new Thermostat();

  it("starts at 20 degrees", function() {
    expect(thermostat.temp()).toEqual(20);
  });

});
