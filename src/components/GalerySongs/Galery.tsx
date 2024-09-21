import React, { useState } from 'react';
import A_marte from '../../assets/audio/A marte.mp3';
import A_donde_vamos from '../../assets/audio/A-donde-vamos.mp3';
import Bendita_la_luz from '../../assets/audio/Bendita la luz .mp3';
import Cant_Help_Falling_In_Love from '../../assets/audio/Cant Help Falling In Love.mp3';
import Cha_cha_cha from '../../assets/audio/Cha cha cha.mp3';
import De_que_me_sirve_el_cielo from '../../assets/audio/De que me sirve el cielo.mp3';
import Dont_for_get_me from '../../assets/audio/Dont for get me.mp3';
import Latido_de_mi_corazon from '../../assets/audio/Latido de mi corazon.mp3';
import Destino_casualidad from '../../assets/audio/Destino casualidad.mp3';
import Lo_mejor_de_mi_vida_eres_tu from '../../assets/audio/Lo mejor de mi vida eres tu .mp3';
import Mi_persona_favorita from '../../assets/audio/Mi persona favorita.mp3';
import Mujer_perfecta from '../../assets/audio/Mujer perfecta.mp3';
import Mylady from '../../assets/audio/Mylady.mp3';
import Next_to_me from '../../assets/audio/Next to me.mp3';
import Not_today from '../../assets/audio/Not today.mp3';
import Tengo_tu_love from '../../assets/audio/Tengo tu love .mp3';
import Tu_de_que_vas from '../../assets/audio/Tu de que vas.mp3';
import Tu_foto_en_blanco_y_negro from '../../assets/audio/Tu foto en blanco y negro.mp3';
import hace_2_segundos from '../../assets/audio/hace 2 segundos.mp3';

const Gallery: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const songs = [
        {
            title: "A marte",
            artist: "Artista Desconocido",
            file: A_marte,
            message: "Mensaje sobre A marte.",
        },
        {
            title: "A dónde vamos",
            artist: "Morat",
            file: A_donde_vamos,
            message: "Mensaje sobre A dónde vamos.",
        },
        {
            title: "Bendita la luz",
            artist: "Maná",
            file: Bendita_la_luz,
            message: "Mensaje sobre Bendita la luz.",
        },
        {
            title: "Can't Help Falling In Love",
            artist: "Elvis Presley",
            file: Cant_Help_Falling_In_Love,
            message: "Mensaje sobre Can't Help Falling In Love.",
        },
        {
            title: "Cha cha cha",
            artist: "Artista Desconocido",
            file: Cha_cha_cha,
            message: "Mensaje sobre Cha cha cha.",
        },
        {
            title: "¿De qué me sirve el cielo?",
            artist: "Maná",
            file: De_que_me_sirve_el_cielo,
            message: "Mensaje sobre ¿De qué me sirve el cielo?.",
        },
        {
            title: "Don't Forget Me",
            artist: "Artista Desconocido",
            file: Dont_for_get_me,
            message: "Mensaje sobre Don't Forget Me.",
        },
        {
            title: "Latido de mi corazón",
            artist: "Artista Desconocido",
            file: Latido_de_mi_corazon,
            message: "Mensaje sobre Latido de mi corazón.",
        },
        {
            title: "Destino casualidad",
            artist: "Artista Desconocido",
            file: Destino_casualidad,
            message: "Mensaje sobre Destino casualidad.",
        },
        {
            title: "Lo mejor de mi vida eres tú",
            artist: "Natalia Lafourcade",
            file: Lo_mejor_de_mi_vida_eres_tu,
            message: "Mensaje sobre Lo mejor de mi vida eres tú.",
        },
        {
            title: "Mi persona favorita",
            artist: "Morat",
            file: Mi_persona_favorita,
            message: "Mensaje sobre Mi persona favorita.",
        },
        {
            title: "Mujer perfecta",
            artist: "Jesse & Joy",
            file: Mujer_perfecta,
            message: "Mensaje sobre Mujer perfecta.",
        },
        {
            title: "My Lady",
            artist: "Artista Desconocido",
            file: Mylady,
            message: "Mensaje sobre My Lady.",
        },
        {
            title: "Next to Me",
            artist: "Emeli Sandé",
            file: Next_to_me,
            message: "Mensaje sobre Next to Me.",
        },
        {
            title: "Not Today",
            artist: "Artista Desconocido",
            file: Not_today,
            message: "Mensaje sobre Not Today.",
        },
        {
            title: "Tengo tu love",
            artist: "Artista Desconocido",
            file: Tengo_tu_love,
            message: "Mensaje sobre Tengo tu love.",
        },
        {
            title: "¿Tu de qué vas?",
            artist: "Artista Desconocido",
            file: Tu_de_que_vas,
            message: "Mensaje sobre ¿Tu de qué vas?.",
        },
        {
            title: "Tu foto en blanco y negro",
            artist: "Artista Desconocido",
            file: Tu_foto_en_blanco_y_negro,
            message: "Mensaje sobre Tu foto en blanco y negro.",
        },
        {
            title: "Hace 2 segundos",
            artist: "Artista Desconocido",
            file: hace_2_segundos,
            message: "Mensaje sobre Hace 2 segundos.",
        },
    ];

    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <h2>Galería Musical</h2>
            {songs.map((song, index) => (
                <div key={index} style={{ border: '1px solid #ccc', borderRadius: '8px', margin: '20px', padding: '10px' }}>
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                    <audio controls>
                        <source src={song.file} type="audio/mp3" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    <button onClick={() => toggleDropdown(index)} style={{ marginTop: '10px' }}>
                        {openIndex === index ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}
                    </button>
                    {openIndex === index && (
                        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f9f9f9', borderRadius: '5px' }}>
                            <p>{song.message}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Gallery;
