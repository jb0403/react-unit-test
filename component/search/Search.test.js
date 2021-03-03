import { render, fireEvent } from "@testing-library/react";
import Search from "./Search";

it("search render test", () => {
  const { queryByTitle } = render(<Search />);
  const input = queryByTitle("dummySearch");
  expect(input).toBeTruthy();
});

describe("ChangeInput", () => {
  it("onChange", () => {
    const { queryByTitle } = render(<Search />);
    const input = queryByTitle("dummySearch");

    fireEvent.change(input, { target: { value: "testValue" } });

    expect(input.value).toBe("testValue");
  });
});
