import React from 'react'
import Branco from './imgs/branco.jpeg'
import Prata from './imgs/prata.jpeg'
import Ocre from './imgs/ocre.jpeg'
import Uva from './imgs/uva.jpeg'
import './comp-css/Serviços.css'

export default function serviços(){

    return(
        <div className='jobs' id='servicos'>
            <h2>serviços</h2>
            <div className='box'>
                <div className='job'>
                    <img src={Branco}></img>
                    <p>Efeito marmorizado cor branco com detalhes em dourado</p>
                </div>
                <div className='job'>
                    <img src={Prata}></img>
                    <p>Efeito mármore cor prata envelhecido...se adequa a qualquer ambiente</p>
                </div>
            </div>
            <div className='box'>
                <div className='job'>
                    <img src={Ocre}></img>
                    <p>Marmorização na cor Ocre requinte ao seu ambiente</p>
                </div>
                <div className='job'>
                    <img src={Uva}></img>
                    <p>Alegria ao seu ambiente com marmorização cor uva silvestre</p>
                </div>
            </div>
        </div>
    )
}