import React, { useState } from 'react'
import * as FormStyles from './Form.module.css'
import Card from '../Card/Card';

const Form = (props) => {

    const [musica, setMusica] = useState({
        genero: '',
        banda: '',
        cantBandas: 0
    });
    
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [mostrarError, setMostrarError] = useState(false);

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
        <input type="text" placeholder='Genero' onChange={(e) => setMusica((prevMusica) => ({...prevMusica, genero: e.target.value}))}/>
        <label>Banda Favorita</label>
        <input type="text" placeholder='Banda' onChange={(e) => setMusica((prevMusica) => ({...prevMusica, banda: e.target.value}))}/>
        <label>Cantidad de Bandas que Conoce</label>
        <input type='number' placeholder='Cantidad' onChange={(e) => setMusica((prevMusica) => ({...prevMusica, cantBandas: e.target.value}))}/>
        <button type='submit'>Enviar</button>
    </form>


    {mostrarInfo ? 
        <> <Card cardContent={musica}/> </> : null}
    {mostrarError ? 
        <>
            <h2 className={FormStyles.error}>Alguno de los datos ingresados no es válido.</h2>
        </> : null}
    </div>
  )
}

export default Form