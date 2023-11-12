import { render } from "@testing-library/react";
import About from "./About";

test("Renders <About/> component without crashing", () => {
  render(<About />);
});

test("Renders correct number of <CustomDisclosure/> components", () => {
  const { getAllByTestId } = render(<About />);
  const disclosures = getAllByTestId("custom-disclosure");
  expect(disclosures.length).toBe(9);
});

test("Renders <CustomDisclosure/> components with correct aboutOption props", () => {
  const { getAllByTestId } = render(<About />);
  const disclosures = getAllByTestId("custom-disclosure");
  const expectedOptions = [
    `FAQ'S`,
    `PAY-RAIL`,
    `App Details`,
    `Version Number`,
    `Source Code`,
    `Privacy Policy`,
    `Terms of Service`,
    `How to submit feedback`,
    `Work with PAY-RAIL`,
  ];

  disclosures.forEach((disclosure, i) => {
    expect(disclosure.textContent).toContain(expectedOptions[i]);
  });
});
