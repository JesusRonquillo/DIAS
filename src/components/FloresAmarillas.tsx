import React, { useState } from 'react';
import Canvas from './Canvas';
import Boton from './Boton';
import Flor from './Flor'; // Importamos el componente Flor
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(70deg, blue, purple, pink);
`;

const Texto = styled.div`
  display: none;
  font-size: 50px;
`;

const FloresAmarillas: React.FC = () => {
    const [dibujar, setDibujar] = useState(false); // Controla cuándo se dibuja la flor

    const handleClick = () => {
        setDibujar(true); // Al hacer clic, dibuja la flor
    };

    return (
        <Container>
            <h1 id="Titulo">Flor React</h1>
            <div className="Con">
                <Boton onClick={handleClick}>Dibujar Flor</Boton>
            </div>
            <Texto className="Texto">
                <h2>Texto Visible</h2>
            </Texto>
            <Canvas />
            {dibujar && (
                <Flor x={250} y={250} numPetalos={6} radioXPetalo={50} radioYPetalo={70} />
            )}
        </Container>
    );
};

export default FloresAmarillas;
