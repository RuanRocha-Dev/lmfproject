import React from 'react'
import Header from './components/header'
import Showmenu from './components/Showmenu'
import Sobremim from './components/Sobremim'
import Serviços from './components/Serviços'
import Galeria from './components/Galeria'
import Localizacao from './components/Localizacao'
import Footer from './components/Footer'
import './components/comp-css/Reset.css'

export default function App(){

  return(
    <>
    <Header/>
    <Showmenu/>
    <Sobremim/>
    <Serviços/>
    <Galeria/>
    <Localizacao/>
    <Footer/>
    </>
  )
}