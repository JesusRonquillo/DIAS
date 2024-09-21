import React, { useEffect, useRef } from 'react';

interface Props {
    x: number;
    y: number;
    numPetalos: number;
    radioXPetalo: number;
    radioYPetalo: number;
}

const Flor: React.FC<Props> = ({ x, y, numPetalos, radioXPetalo, radioYPetalo }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const DibujarPetalo = (
        ctx: CanvasRenderingContext2D,
        x: number,
        y: number,
        radioX: number,
        escala: number,
        rotacion: number,
        color: string,
        pasos: number
    ): void => {
        const anguloIncrement = (Math.PI / pasos) * 2;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(rotacion);
        ctx.scale(1, escala);
        ctx.beginPath();
        for (let i = 0; i <= pasos; i++) {
            const anguloActual = i * anguloIncrement;
            const currentRadius = Math.sin(anguloActual) * radioX;
            const puntoY = Math.sin(anguloActual) * currentRadius;
            const puntoX = Math.cos(anguloActual) * currentRadius;
            if (i === 0) {
                ctx.moveTo(puntoX, puntoY);
            } else {
                ctx.lineTo(puntoX, puntoY);
            }
        }
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            let frame = 0;
            let stopAnimation = false;

            if (ctx) {
                const dibujarFlor = () => {
                    if (stopAnimation) return;
                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // Dibujar los pétalos con animación
                    const anguloIncrement = (Math.PI * 2) / numPetalos;
                    const colors = ['#ffcc00', '#ff6699', '#66ccff', '#ff99ff', '#ffcc99', '#99ffcc'];

                    for (let i = 0; i < numPetalos; i++) {
                        const angulo = i * anguloIncrement + (frame * 0.01); // Animación rotatoria
                        DibujarPetalo(ctx, x, y, radioXPetalo, 2, angulo, colors[i % colors.length], 100);
                    }

                    frame++;
                    requestAnimationFrame(dibujarFlor);
                };

                dibujarFlor(); // Iniciar la animación
            }

            return () => {
                stopAnimation = true; // Detener la animación cuando el componente se desmonte
            };
        }
    }, [x, y, numPetalos, radioXPetalo, radioYPetalo]);

    return <canvas ref={canvasRef} width={500} height={500}></canvas>;
};

export default Flor;
