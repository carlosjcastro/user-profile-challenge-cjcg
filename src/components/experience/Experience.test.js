import React from "react";
import { render, screen } from "@testing-library/react";
import Experience from "./Experience";

describe("Experience Component", () => {
  test("renders the component", () => {
    render(<Experience />);
    
    const titleElement = screen.getByText(/Experiencia/i);
    expect(titleElement).toBeInTheDocument();
    
    const hackathonElement = screen.getByText(/'Innovation Challenge' Hackathon/i);
    const institutoElement = screen.getByText(/Colaborador en Instituto de Informática/i);
    const portafolioElement = screen.getByText(/Portafolio, Autodidacta/i);
    expect(hackathonElement).toBeInTheDocument();
    expect(institutoElement).toBeInTheDocument();
    expect(portafolioElement).toBeInTheDocument();
  });

  test("renders the durations", () => {
    render(<Experience />);
    
    const hackathonDuration = screen.getByText(/Mayo 2024 - Junio 2024/i);
    const institutoDuration = screen.getByText(/Agosto 2023 - Octubre 2023/i);
    const portafolioDuration = screen.getByText(/Noviembre 2022 - Presente/i);
    expect(hackathonDuration).toBeInTheDocument();
    expect(institutoDuration).toBeInTheDocument();
    expect(portafolioDuration).toBeInTheDocument();
  });

  test("renders the descriptions", () => {
    render(<Experience />);
    
    const hackathonDescription = screen.getByText(/Desarrollé interfaces de usuario dinámicas e interactivas usando React y TypeScript/i);
    const institutoDescription = screen.getByText(/Apoyé el desarrollo de videojuegos para personas con dificultades cognitivas y motoras/i);
    const portafolioDescription = screen.getByText(/Utilicé HTML5 y CSS3 para crear páginas web responsivas y visualmente atractivas/i);
    expect(hackathonDescription).toBeInTheDocument();
    expect(institutoDescription).toBeInTheDocument();
    expect(portafolioDescription).toBeInTheDocument();
  });
});
