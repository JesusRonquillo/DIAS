import React from 'react';

interface Props {
    src: string;
}

const AudioPlayer: React.FC<Props> = ({ src }) => {
    return (
        <div>
            <audio controls>
                <source src={src} type="audio/mp3" />
                Tu navegador no soporta el elemento de audio.
            </audio>
        </div>
    );
};

export default AudioPlayer;
