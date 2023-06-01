import React from 'react'
import * as CardStyles from './Card.module.css'

const Card = ({cardContent}) => {
    return (
        <div className={CardStyles.card}>
            <p>Tu género favorito es:
                <span> {cardContent.genero}</span>
            </p>

            <p>Tu banda favorita es:
                <span> {cardContent.banda}</span>
            </p>
            <p>Has escuchado un total de
                <span> {cardContent.cantBandas} </span>
                {cardContent.cantBandas == 1 ? 'banda' : 'bandas' }</p>
        </div>
    )
}

export default Card