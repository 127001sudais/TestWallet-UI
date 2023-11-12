import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import EnterCurrentPin from "./EnterCurrentPin";

describe("EnterCurrentPin component", () => {
  test("renders without crashing", () => {
    render(
      <Router>
        <EnterCurrentPin />
      </Router>
    );

    // Check if the child components are in the document
    expect(screen.getByTestId("Header")).toBeInTheDocument();
    expect(screen.getByTestId("PinEntry")).toBeInTheDocument();
    expect(screen.getByTestId("Link")).toBeInTheDocument();
    expect(screen.getByTestId("Button")).toBeInTheDocument();

    // Notice component is not expected to be in the document initially
    expect(screen.queryByTestId("Notice")).not.toBeInTheDocument();
  });
});
