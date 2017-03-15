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
    thermostat.down();
    expect(thermostat.getTemp()).toEqual(19);
  });

  it("throws an error if you try to reduce temperature while current temperature is 10", function() {
    // var times = 10;
    // for(var i=0; i < times; i++){
    //   thermostat.down();
    // }
    spyOn(thermostat, "getTemp").and.returnValue(10)
    expect(function(){thermostat.down();}).toThrowError("Temperature is at minimum");
  });
});
