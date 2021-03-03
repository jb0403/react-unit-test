import { multiply, makeLowerCase } from "./HelperFunction";

//function testing

test("multiplyTest", () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(3, 3)).toBe(9);
});
test("makeLowerCaseTest", () => {
  expect(makeLowerCase("THIS IS UPPER cASE")).toBe("this is upper case");
});
