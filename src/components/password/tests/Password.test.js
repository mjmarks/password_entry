import { fireEvent, render, screen } from "@testing-library/react";

import Password from "../Password";

test("that a password submission renders a success message", () => {
  render(<Password />);

  const pendingIcons = screen.getAllByTestId("PendingIcon");
  const visibilityOffIcon = screen.getByTestId("VisibilityOffIcon");
  expect(pendingIcons.length).toBe(5);
  expect(visibilityOffIcon).toBeInTheDocument();

  const passwordInput = screen.getByLabelText("Password *");
  const confirmPasswordInput = screen.getByLabelText("Confirm Password *");
  fireEvent.change(passwordInput, { target: { value: "@Test123" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "@Test123" } });
  const checkCircleIcons = screen.getAllByTestId("CheckCircleIcon");
  expect(checkCircleIcons.length).toBe(5);

  const submitButton = screen.getByRole("button", { name: "Submit" });
  fireEvent.click(submitButton);
  expect(
    screen.getByText("Password successfully validated!")
  ).toBeInTheDocument();
});

test("that a password submission renders a failure message", () => {
  render(<Password />);

  const pendingIcons = screen.getAllByTestId("PendingIcon");
  const visibilityOffIcon = screen.getByTestId("VisibilityOffIcon");
  expect(pendingIcons.length).toBe(5);
  expect(visibilityOffIcon).toBeInTheDocument();

  const passwordInput = screen.getByLabelText("Password *");
  const confirmPasswordInput = screen.getByLabelText("Confirm Password *");
  fireEvent.change(passwordInput, { target: { value: "@Test" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "@Test" } });
  const checkCircleIcons = screen.getAllByTestId("CheckCircleIcon");
  expect(checkCircleIcons.length).toBe(3);

  const visibilityCheckbox = screen.getByRole("checkbox");
  fireEvent.click(visibilityCheckbox);
  expect(screen.getByTestId("VisibilityIcon")).toBeInTheDocument();

  const submitButton = screen.getByRole("button", { name: "Submit" });
  fireEvent.click(submitButton);
  expect(
    screen.getByText(
      "Password validation failed. Please check the requirements."
    )
  ).toBeInTheDocument();
});
