import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About component with correct content', () => {
  render(<About />);
  expect(screen.getByText(/Sobre mí/i)).toBeInTheDocument();
  expect(screen.getByText(/¡Hola! Soy Carlos José/i)).toBeInTheDocument();
  expect(screen.getByText(/Descargar CV/i)).toBeInTheDocument();
});
