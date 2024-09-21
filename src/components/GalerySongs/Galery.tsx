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
    const [completedSongs, setCompletedSongs] = useState<boolean[]>(new Array(19).fill(false)); // Controla qué canciones se han completado
    const [showModal, setShowModal] = useState<boolean>(false);
    const [, setCurrentSongIndex] = useState<number | null>(null); // Canción actual que termina
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const songs = [
        {
            title: "Vámonos a Marte",
            artist: "Kevin Kaarl",
            file: A_marte,
            message: `¡Vámonos a Marte! 🚀 Quiero contarte algo que llevo en el corazón: la canción que más me representa, esa melodía que siempre estará ahí para darme ánimo en los momentos difíciles. Pero sé que, a tu lado, esos momentos difíciles van a ser más bien "difíciles chidos" o, tal vez, ni tan difíciles. ¡Con tu sonrisa y tu energía, cualquier reto se convierte en una aventura divertida!  
    Así que, mientras viajamos juntos por este universo, sé que podremos enfrentar cualquier cosa. Y si alguna vez sentimos que la gravedad nos pesa, solo necesitaremos poner nuestra canción favorita y dejarnos llevar. ¡Contigo, todo es posible!`,
        },

        {
            title: "A dónde vamos",
            artist: "Morat",
            file: A_donde_vamos,
            message: `¿A dónde vamos? 🤔 Definitivamente es una pregunta que será muy recurrente en nuestra relación. La mejor frase de esta canción es: "Hoy somos la prueba de que dos extraños, con algo de suerte, por más de mil años se siguen diciendo a dónde vamos." 

    Creo que podría ser la canción perfecta para cualquier día, pero sin duda alguna, es la melodía que me recuerda a ti. Cada vez que la escucho, siento que nuestras aventuras están marcadas por esa misma pregunta. ¡Y lo mejor es que, pase lo que pase, siempre estaremos juntos en este viaje!`,
        },

        {
            title: "Bendita la luz",
            artist: "Maná",
            file: Bendita_la_luz,
            message: `¡Bendita la luz de tu mirada! ✨ Definitivamente, esta canción representa el momento exacto en que te vi. Porque Dios nos creó y nosotros nos encontramos. 

    Sin duda, es la mejor manera de empezar una relación: con música y, sobre todo, contigo. Sé que eso nunca faltará. Cada nota me recuerda lo afortunado que soy de tenerte en mi vida. ¡Eres la luz que ilumina mi camino!`,
        },

        {
            title: "Can't Help Falling In Love",
            artist: "Elvis Presley",
            file: Cant_Help_Falling_In_Love,
            message: `No puedo evitar enamorarme de ti, como un niño que se emociona al abrir un regalo. 🎁 Cada vez que se de ti, siento que el mundo se reduce y todo lo que importa eres tú. Estoy convencido de que esta relacion es como una melodía que nunca deja de sonar, y estoy listo para bailarla contigo todos los días aunque no podamos mas, o quiza un poco mas. ¡Siempre caeré en ti (metafora jajaja)!`,
        },

        {
            title: "Chachachá",
            artist: "Jósean Log",
            file: Cha_cha_cha,
            message: `¡Vamos a bailar un chachachá! 💃🕺 Cada nota me recuerda lo divertido que es estar contigo. Imagina nuestras noches de baile, riendo y disfrutando como si el mundo fuera solo nuestro. Quiero que nuestra vida sea una fiesta llena de risas, y tú eres el mejor compañero de baile que podría pedir. ¡Que nunca falte la música entre nosotros!`,
        },

        {
            title: "¿De qué me sirve el cielo?",
            artist: "Omar Chaparro",
            file: De_que_me_sirve_el_cielo,
            message: `¿De qué me sirve el cielo si no estás tú? ☁️ La verdad es que mi mundo no tendría sentido sin tu risa. Cada vez que pienso en lo afortunado que soy de tenerte en mi vida, me doy cuenta de que, incluso cuando llegue mi hora, esta será la canción perfecta para que la escuches y recuerdes todos los momentos divertidos que compartimos. Así que, prometo hacer de cada día uno lleno de risas y aventuras, porque, aunque algún día nos separen, mi amor siempre estará contigo. ¡Eres mi razón para disfrutar la vida!`,
        },


        {
            title: "Don't Forget Me",
            artist: "Imagine Dragons",
            file: Dont_for_get_me,
            message: `No me olvides, porque cada momento contigo es un regalo invaluable. 🥰 Esta canción me recuerda que juntos creamos recuerdos que permanecerán en nuestros corazones para siempre. Te prometo que haré todo lo posible para que nuestra historia sea memorable, y que cada día que pase, nuestro amor solo se fortalezca. ¡Siempre seré parte de tu historia!`,
        },

        {
            title: "Latido de mi corazón",
            artist: "Luis Angel Gomez Jaramillo",
            file: Latido_de_mi_corazon,
            message: `Recuerdas que esta cancion solo fue para adivinar una peli, pues bien me encanta`,
        },

        {
            title: "Destino casualidad",
            artist: "Melendi, Ha*Ash",
            file: Destino_casualidad,
            message: `¿Destino o casualidad? Tal vez un poco de ambos, pero lo cierto es que estamos aquí, juntos, y eso es lo que importa. 🌌 Me encanta pensar que el universo conspiró para traernos el uno al otro, y cada día contigo es una nueva aventura. Brindemos por todas las sorpresas que nos depara el futuro y por nuestro amor que solo seguirá creciendo. ¡Nuestra historia está apenas comenzando!`,
        },

        {
            title: "Lo mejor de mi vida eres tú",
            artist: "Ricky Martin, Natalia Jiménez",
            file: Lo_mejor_de_mi_vida_eres_tu,
            message: `Lo mejor de mi vida eres tú, y cada día que pasa me doy cuenta de cuán afortunado soy de tenerte a mi lado. 🌟 En cada rayo de sol veo tu sonrisa, y en cada estrella, mi deseo de siempre estar contigo. Sigamos construyendo este hermoso camino juntos, lleno de amor, risas y momentos que atesoraremos para siempre.`,
        },

        {
            title: "Mi persona favorita",
            artist: "Rio Roma",
            file: Mi_persona_favorita,
            message: `Eres mi persona favorita, y eso lo digo con todo el corazón. 🥰 Cada día a tu lado es como descubrir un nuevo capítulo en el mejor libro de aventuras. Espero seguir conociéndote, explorando tus sueños y compartiendo los míos. ¡Nuestro cariño es un viaje que quiero disfrutar contigo siempre!`,
        },

        {
            title: "Mujer perfecta",
            artist: "KURT",
            file: Mujer_perfecta,
            message: `Eres la mujer perfecta para mí, y no puedo dejar de maravillarme ante lo increíble que eres. 🌹 Desde tu risa hasta tu forma de ver la vida, cada detalle me fascina. Estoy emocionado por todos los momentos que compartiremos y por cómo cada día a tu lado me hace querer ser mejor. ¡Siempre serás mi inspiración y mi amor!`,
        },

        {
            title: "My Lady (Cristina)",
            artist: "Sebastian Yatra",
            file: Mylady,
            message: `Bby, cada día contigo es un nuevo motivo para sonreír. 💖 Desde nuestras charlas hasta nuestras locuras, cada instante se convierte en un recuerdo hermoso. Espero seguir escribiendo nuestra historia llena de amor, risas y aventuras. ¡Eres la razón por la que programo tan feliz esta web!`,
        },

        {
            title: "Next to Me",
            artist: "Imagine Dragons",
            file: Next_to_me,
            message: `Siempre quiero estar a tu lado, porque cada momento junto a ti es especial. 🤗 En esta loca aventura que llamamos vida, estoy listo para ser tu compañero y enfrentar juntos cualquier desafío. ¡Vamos a construir un futuro increíble donde siempre estemos el uno al lado del otro!`,
        },

        {
            title: "Not Today",
            artist: "Imagine Dragons",
            file: Not_today,
            message: `Hoy no es el día para rendirnos, y contigo a mi lado, sé que podemos conquistar cualquier cosa. 💪 Me encanta cómo enfrentamos la vida con una sonrisa, y cada reto solo nos hace más fuertes. Juntos, siempre seremos un equipo indestructible. ¡Nuestro amor lo puede todo!`,
        },

        {
            title: "Tengo tu love",
            artist: "Sie7e",
            file: Tengo_tu_love,
            message: `Tengo tu amor y eso es todo lo que necesito para ser feliz. ❤️ Cada día a tu lado es una bendición, y me encanta cómo hacemos que cada momento cuente. Espero seguir compartiendo risas y sueños contigo, creando un futuro lleno de amor y felicidad. ¡Eres lo mas bonito de mi vida!`,
        },

        {
            title: "¿Tu de qué vas?",
            artist: "Franco De Vita",
            file: Tu_de_que_vas,
            message: `¿Tu de qué vas? Estoy ansioso por conocerte cada día un poco más. 😍 Cada conversación, cada mirada, me hace querer descubrir cada parte de ti. Espero que nuestra conexión siga creciendo y que sigamos disfrutando de esta hermosa cancion juntos. ¡Siempre estaré aquí para ti!`,
        },

        {
            title: "Tu foto en blanco y negro",
            artist: "David Otero, Taburete",
            file: Tu_foto_en_blanco_y_negro,
            message: `Tu foto en blanco y negro representa todos esos momentos hermosos que vamos a vivir juntos. 🎨 Pero baby por ti es todo color, y cada día contigo es una nueva paleta de experiencias. Sigamos creando recuerdos vibrantes que llenen nuestras vidas de alegría y amor. ¡Eres mi obra maestra!`,
        },

        {
            title: "Hace dos segundos",
            artist: "Erreway",
            file: hace_2_segundos,
            message: `Hace dos segundos, pero siento que te conozco desde siempre. ⏳ Cada instante contigo es como un susurro del destino que me dice que estamos hechos el uno para el otro. Estoy emocionado por saber que hace dos segundos estaba programando esto, y no se si te gustara (espero que si). ¡Sigamos escribiendo codigo juntos o yo para ti da igual!`,
        },

    ];


    const toggleDropdown = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const handleSongEnd = (index: number) => {
        setShowModal(true);
        setCurrentSongIndex(index);
        const updatedCompletedSongs = [...completedSongs];
        updatedCompletedSongs[index] = true;
        setCompletedSongs(updatedCompletedSongs);
        setIsPlaying(false); // Marcar como no reproduciendo
    };

    const handlePlay = (index: number) => {
        if (isPlaying) return; // Si ya hay una canción en reproducción, no hacer nada

        setIsPlaying(true); // Marcar como reproduciendo
        setCurrentSongIndex(index); // Establecer la canción actual
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            background: 'linear-gradient(to right, #ff9a9e, #fad0c4)',
            padding: '20px',
            borderRadius: '15px',
        }}>
            <h2 style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: '20px',
                fontFamily: "'Dancing Script', cursive",
                fontSize: '36px',
                color: '#fff',
            }}>
                Galería Musical para Mi Baby ❤️
            </h2>
            {songs.map((song, index) => (
                <div
                    key={index}
                    style={{
                        width: '100%',
                        maxWidth: '550px',
                        marginBottom: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '15px',
                        backgroundColor: '#fff',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        transform: openIndex === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                >
                    <h3 style={{
                        fontFamily: "'Dancing Script', cursive",
                        fontSize: '24px',
                        color: '#ff7b89',
                        marginBottom: '10px',
                    }}>
                        {song.title}
                    </h3>
                    <p style={{ fontFamily: "'Roboto', sans-serif", fontSize: '16px' }}>
                        {song.artist}
                    </p>
                    <audio controls style={{ width: '100%' }} onEnded={() => handleSongEnd(index)} onPlay={() => handlePlay(index)}>
                        <source src={song.file} type="audio/mp3" />
                        Tu navegador no soporta el elemento de audio.
                    </audio>
                    {completedSongs[index] ? (
                        <button
                            onClick={() => toggleDropdown(index)}
                            style={{
                                marginTop: '10px',
                                padding: '8px 12px',
                                backgroundColor: '#ff7b89',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                fontFamily: "'Dancing Script', cursive",
                            }}
                        >
                            {openIndex === index ? 'Ocultar Mensaje' : 'Mostrar Mensaje'}
                        </button>
                    ) : (
                        <button
                            disabled
                            style={{
                                marginTop: '10px',
                                padding: '8px 12px',
                                backgroundColor: '#ccc',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '50px',
                                cursor: 'not-allowed',
                                fontFamily: "'Dancing Script', cursive",
                            }}
                        >
                            Escucha para ver el mensaje
                        </button>
                    )}
                    {openIndex === index && (
                        <div
                            style={{
                                marginTop: '10px',
                                padding: '10px',
                                backgroundColor: '#f9f9f9',
                                borderRadius: '5px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            }}
                        >
                            <p>{song.message}</p>
                        </div>
                    )}
                </div>
            ))}
            <blockquote style={{
                fontStyle: 'italic',
                textAlign: 'center',
                marginTop: '20px',
                fontFamily: "'Dancing Script', cursive",
                fontSize: '22px',
                color: '#fff',
            }}>
                "Eres la melodía que hace vibrar mi corazón."
            </blockquote>

            {/* Modal */}
            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <div style={{
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '10px',
                        maxWidth: '400px',
                        textAlign: 'center',
                    }}>
                        <h3>¡Felicidades por terminar la canción!</h3>
                        <p>Ahora puedes ver el mensaje.</p>
                        <button onClick={handleCloseModal} style={{
                            marginTop: '10px',
                            padding: '8px 12px',
                            backgroundColor: '#ff7b89',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50px',
                            cursor: 'pointer',
                            fontFamily: "'Dancing Script', cursive",
                        }}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
