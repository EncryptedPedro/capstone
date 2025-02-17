import { render, screen } from "@testing-library/react";
import React from 'react';
import { BookingContext } from "./components/BookingContext";

test('Renders the BookingForm heading', () => {
    render(<BookingContext />);
    const buttonElement = screen.getByText("Reserve");
    expect(buttonElement).toBeInTheDocument();
});

test('BookingsForm component can be submitted by the user', () => {
  render(<BookingContext />);
  const buttonElement = screen.getByText("Reserve");
  expect(buttonElement).toBeInTheDocument();
  buttonElement.click();
});

test('initializeTimes is returning the correct expected value', () => {
  render(<BookingContext />);
  const dropdown = screen.getByLabelText("Time:");
  const options = Array.from(dropdown.options).map(option => option.value);
  expect(options).toNotEqual(['']);
});

test('updateTimes function returns the correct expected value', () => {
  render(<BookingContext />);
});