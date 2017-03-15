describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.getTemp()).toEqual(20);
  });

  it("can increase temperature with up function", function() {
    thermostat.up();
    expect(thermostat.getTemp()).toEqual(21);
  });

  it("can decrease temperature with down function", function() {
    console.log(thermostat.getTemp())
    thermostat.down();
    expect(thermostat.getTemp()).toEqual(19);
  });
});
