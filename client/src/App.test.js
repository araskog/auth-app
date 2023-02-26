import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("renders registration page", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const signUpElement = screen.getByText("Sign up");
  expect(signUpElement).toBeInTheDocument();
});
