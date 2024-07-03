import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';

test('renders Skills component with skill items', () => {
  render(<Skills />);
  expect(screen.getByText(/Habilidades/i)).toBeInTheDocument();
  const skills = [
    'HTML 5',
    'CSS 3',
    'JavaScript',
    'React',
    'Next.js',
    'Azure',
    'Git',
    'GitHub',
    'VS Code',
    'Slack',
    'Trello',
  ];
  skills.forEach((skill) => {
    expect(screen.getByAltText(`${skill} logo`)).toBeInTheDocument();
  });
});
