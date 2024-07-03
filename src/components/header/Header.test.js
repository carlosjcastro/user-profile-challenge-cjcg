import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('debe mostrar el nombre del usuario y la imagen de perfil', () => {
    render(<Header />);
    expect(screen.getByText('Carlos José Castro Galante')).toBeInTheDocument();
    expect(screen.getByAltText('Perfil')).toBeInTheDocument();
  });
});
