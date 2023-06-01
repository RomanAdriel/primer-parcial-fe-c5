import React, { useState } from 'react'
import * as FormStyles from './Form.module.css'
import Card from '../Card/Card';

const Form = () => {

    const [musica, setMusica] = useState({
        genero: '',
        banda: '',
        cantBandas: 0
    });
    
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [mostrarError, setMostrarError] = useState(false);

    const actualizarGenero = (e) => {

        setMusica((prevMusica) => ({...prevMusica, genero: e.target.value}));
        ocultarCard();

    }

    const actualizarBanda = (e) => {

        setMusica((prevMusica) => ({...prevMusica, banda: e.target.value}));
        ocultarCard();

    }

    const actualizarCantBandas = (e) => {

        setMusica((prevMusica) => ({...prevMusica, cantBandas: e.target.value}));
        ocultarCard();

    }

    const ocultarCard = () => {
        setMostrarInfo(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(musica.genero.length > 2 && musica.genero.charAt(0) != ' ' && musica.banda.length > 5) {

            setMostrarInfo(true);
            setMostrarError(false)

        } else {

            setMostrarInfo(false);
            setMostrarError(true)

        }
    }


  return (
    <div>
        <h1>Contanos un poco sobre tus gustos musicales</h1>
    <form onSubmit={handleSubmit}>
        <label>Género Favorito</label>
        <input type="text" placeholder='Genero' onChange={(e) => actualizarGenero(e)}/>
        <label>Banda Favorita</label>
        <input type="text" placeholder='Banda' onChange={(e) => actualizarBanda(e)}/>
        <label>Cantidad de Bandas que Conoce</label>
        <input type='number' placeholder='Cantidad' onChange={(e) => actualizarCantBandas(e)}/>
        <button type='submit'>Enviar</button>
    </form>


    {mostrarInfo ? 
        <> <Card cardContent={musica}/> </> : null}
    {mostrarError ? 
        <>
            <h2 className={FormStyles.error}>Por favor chequea que la información sea correcta.</h2>
        </> : null}
    </div>
  )
}

export default Form