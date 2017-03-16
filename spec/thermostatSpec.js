'use strict';

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

    spyOn(thermostat, "getTemp").and.returnValue(10)
    expect(function(){thermostat.down();}).toThrowError("Temperature is at minimum");
  });

  it("checks power saving mode is on by default", function() {
    expect(thermostat.mode()).toEqual(true)
  })

  it("can change power saving mode", function() {
    thermostat.changeMode();
    expect(thermostat.mode()).toEqual(false)
    thermostat.changeMode();
    expect(thermostat.mode()).toEqual(true)
  })

  it("doesn't go above 25 degrees if power save mode is on", function() {
    spyOn(thermostat, "getTemp").and.returnValue(25)
    expect(function(){thermostat.up();}).toThrowError("Temperature is at maximum");
  })

  it("doesn't go above 32 degrees if power save mode is off", function() {
    spyOn(thermostat, "getTemp").and.returnValue(32)
    thermostat.changeMode()
    expect(function(){thermostat.up();}).toThrowError("Temperature is at maximum");
  })

  it("can reset temperature to 20 degrees by reset function", function() {
    var times = 5;
    for(var i=0; i < times; i++){
      thermostat.up();
    }
    thermostat.reset()
    expect(thermostat.getTemp()).toEqual(20)
  })

  describe("Usage", function() {

    it("confirms low-usage if temperature is 17", function() {
      spyOn(thermostat, "getTemp").and.returnValue(17)
      expect(thermostat.checkUsage()).toEqual("Low-usage")
    })

      it("confirms low-usage if temperature is lower than 17", function() {
      spyOn(thermostat, "getTemp").and.returnValue(9)
      expect(thermostat.checkUsage()).toEqual("Low-usage")
    })

    it("confirms medium-usage if temperature is 18", function(){
      spyOn(thermostat, "getTemp").and.returnValue(18)
      expect(thermostat.checkUsage()).toEqual("Medium-usage")
    })

    it("confirms medium-usage if temperature is higher than 18 but lower than 25", function(){
      spyOn(thermostat, "getTemp").and.returnValue(24)
      expect(thermostat.checkUsage()).toEqual("Medium-usage")
    })

    it("confirms high-usage if temperature is 25", function(){
      spyOn(thermostat, "getTemp").and.returnValue(25)
      expect(thermostat.checkUsage()).toEqual("High-usage")
    })

    it("confirms high-usage if temperature is higher than 25", function(){
      spyOn(thermostat, "getTemp").and.returnValue(32)
      expect(thermostat.checkUsage()).toEqual("High-usage")
    })
  });
});
