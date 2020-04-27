import { parseMs } from "./parseMs";

describe("parseMs", () => {
  test("should return a object containing day, hours, minutes, seconds, milliseconds, microseconds, nanoseconds", () => {
    expect(typeof parseMs(1337000001)).toEqual("object");
  });
  test("should return correct Object", () => {
    expect(parseMs(1337000001)).toEqual({
      days: 15,
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 1,
      microseconds: 0,
      nanoseconds: 0,
    });
    expect(parseMs(13370001234)).toEqual({
      days: 154,
      hours: 17,
      minutes: 53,
      seconds: 21,
      milliseconds: 234,
      microseconds: 0,
      nanoseconds: 0,
    });
    expect(parseMs(5000)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 5,
      milliseconds: 0,
      microseconds: 0,
      nanoseconds: 0,
    });
  });
});
