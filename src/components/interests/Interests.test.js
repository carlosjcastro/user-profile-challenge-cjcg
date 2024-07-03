import React from 'react';
import { render, screen } from '@testing-library/react';
import Interests from './Interests';

test('renders Interests component with interest items', () => {
  render(<Interests />);
  expect(screen.getByText(/Intereses/i)).toBeInTheDocument();
  const interests = [
    'Desarrollo web',
    'Inteligencia Artificial',
    'Ciberseguridad',
    'Machine Learning',
    'IoT',
    'Cloud Computing',
    'E-commerce',
    'Blockchain',
  ];
  interests.forEach((interest) => {
    expect(screen.getByText(interest)).toBeInTheDocument();
  });
});
