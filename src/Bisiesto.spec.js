import esbisiesto from "./bisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia ser bisiesto", () => {
    expect(esbisiesto(4)).toEqual(true);
  });
});

describe("Es Bisiesto", () => {
    it("El 5 no deberia ser bisiesto", () => {
      expect(esbisiesto(5)).toEqual(false);
    });
  });
  
describe("Es Bisiesto", () => {
    it("Anios divisibles por 4 y no por 100 deberian ser bisiestos", () => {
      expect(esbisiesto(2008)).toEqual(true);
      expect(esbisiesto(2009)).toEqual(false);
    });
  });
