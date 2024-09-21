import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: monospace;
  font-size: x-large;
  transition-duration: 0.2s;
  padding: 10px;
  border-radius: 8px;
  background-color: greenyellow;
  color: black;
  border: 2px solid green;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    border-radius: 14px;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
    background-color: white;
  }
`;

interface Props {
    onClick: () => void;
    children: React.ReactNode; // Para aceptar contenido entre las etiquetas <Boton>
}

const Boton: React.FC<Props> = ({ onClick, children }) => {
    return <Button onClick={onClick}>{children}</Button>; // Renderizar los children dentro del botón
};

export default Boton;
