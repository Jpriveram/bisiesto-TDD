import esbisiesto from "./bisiesto.js";

describe("Es Bisiesto", () => {
  it("El 4 deberia ser bisiesto", () => {
    const result = esbisiesto(4)
    expect(result).toEqual(true);
  });
});

