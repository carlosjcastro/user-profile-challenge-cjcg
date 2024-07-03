import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders ContactForm component with form elements', () => {
  render(<ContactForm />);
  expect(screen.getByPlaceholderText(/Nombre/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Mensaje/i)).toBeInTheDocument();
  expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
});
