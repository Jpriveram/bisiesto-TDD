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
  