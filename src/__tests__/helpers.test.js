import { getRoundedValue } from "../utils/helpers";

describe("getRoundedValue function tests", () => {
  it("getDropdownLabel with 1 decimal points input", () => {
    expect(getRoundedValue(1.6)).toEqual(1.6);
  });
  it("getDropdownLabel with 3 decimal points input", () => {
    expect(getRoundedValue(1.555)).toEqual(1.555);
  });
  it("getDropdownLabel with 5 decimal points input", () => {
    expect(getRoundedValue(1.75698)).toEqual(1.757);
  });
});
