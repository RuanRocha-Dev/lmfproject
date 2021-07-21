import React from 'react'
import Logo from './imgs/logo.png'
import './comp-css/Header.css'

export default function Header(){

    const show = () => document.querySelector('.sideBar').classList.toggle('sideBarInt')
    


    return(
        <header>
            <div className='menu'>
                <img src={Logo}></img>
                <ul id='listHeader'>
                    <li> <a href="#home"> Inicio </a> </li>
                    <li> <a href="#sobreMim"> Sobre mim </a> </li>
                    <li> <a href="#servicos"> Serviços </a> </li>
                    <li> <a href="#galeria"> Galeria </a> </li>
                    <li> <a href="#boxContact"> Localização </a> </li>
                </ul>
                <div onClick={()=> show()} className="hamburguer">
                    <div className="line" id="line1"></div>
                    <div className="line" id="line2"></div>
                    <div className="line" id="line3"></div>
                </div>
            </div>
            <aside className="sideBar">
                <nav>
                    <ul className="menuSide">
                        <li className="menu-itens"> <a href="#" className="menu-link">Inicio</a> </li>
                        <li className="menu-itens"> <a href="#sobreMim" className="menu-link">Sobre mim</a> </li>
                        <li className="menu-itens"> <a href="#servicos" className="menu-link">Serviços</a> </li>
                        <li className="menu-itens"> <a href="#galeria" className="menu-link">Galeria</a> </li>
                        <li className="menu-itens"> <a href="#boxContact" className="menu-link">Localização</a> </li>
                    </ul>
                </nav>
                <div class="social-media">
                    <a href="https://wa.me/qr/7FXZHUL4L7EJO1"> <i class="fab fa-whatsapp" id="wpp"> </i> </a> 
                    <a href="https://www.instagram.com/lucianomendoncaferreira/"> <i class="fab fa-instagram" id="insta"> </i> </a>
                </div>
            </aside>
        </header>
    )
}