import React, { useRef, useEffect } from 'react';

const Canvas: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            if (ctx) {
                // Aquí puedes colocar la lógica para dibujar en el canvas
            }
        }
    }, []);

    return <canvas id="Flor" ref={canvasRef} width={800} height={600} />;
};

export default Canvas;
