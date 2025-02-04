import { render, screen } from "@testing-library/react";
import React from 'react';
import BookingPage, { initializeTimes } from "./components/BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const buttonElement = screen.getByText("Reserve");
    expect(buttonElement).toBeInTheDocument();
});

test('BookingsForm component can be submitted by the user', () => {
  render(<BookingPage />);
  const buttonElement = screen.getByText("Reserve");
  expect(buttonElement).toBeInTheDocument();
  buttonElement.click();
});

test('initializeTimes is returning the correct expected value', () => {
  render(<BookingPage />);
  const dropdown = screen.getByLabelText("Time:");
  const options = Array.from(dropdown.options).map(option => option.value);
  expect(options).toEqual(['', '12:00 PM', '1:00 PM', '2:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']);
});

test('updateTimes function returns the correct expected value', () => {
  render(<BookingPage />);
});