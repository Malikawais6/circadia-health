import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import InnerFields from "../components/innerFields";
import SquareRoot from "../Container/SquareRoot";

function renderField() {
  return <InnerFields />;
}

describe("Parent render test", () => {
  test("Check parent component exsit ", () => {
    const { container } = render(<SquareRoot />);
    expect(container.children.length).not.toBe(0);
  });
});

describe("Inpur field tests", () => {
  test("Input test with integer value", () => {
    const { getByTestId } = render(renderField());
    const input = getByTestId("content-input");
    fireEvent.change(input, { target: { value: "23" } });
    expect(input.value).toBe("23");
  });
  test("Input test with character", () => {
    const { getByTestId } = render(renderField());
    const input = getByTestId("content-input");
    fireEvent.change(input, { target: { value: "AB" } });
    expect(input.value).not.toBe("AB");
  });
  test("Input test with invalid string", () => {
    const { getByTestId } = render(renderField());
    const input = getByTestId("content-input");
    fireEvent.change(input, { target: { value: "-10" } });
    expect(input.value).not.toBe("-10");
  });
});

describe("Button Click test", () => {
  test("Check status on button click", async () => {
    const { container } = render(<SquareRoot isFetching={false} />);

    await waitForElement(() =>
      container.getElementsByClassName("loader-block")
    );
  });
});
