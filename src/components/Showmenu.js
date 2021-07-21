import React from 'react'
import Showmenu from './imgs/showMenu.jpeg'
import Logo from './imgs/logo.png'
import './comp-css/Showmenu.css'

export default function showmenu(){

    return(
        <main>
            <div>
                <p>Pintura é a nossa arte!</p>
                <img src={Logo} className='logoShow'></img>
            </div>
            <img src={Showmenu}></img>
        </main>
    )
}