import React from 'react'
import './comp-css/Localizacao.css'


export default function Contato(){

    return(
        <div id='boxContact'>
            <h2>Localização</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1487.
            6155893764437!2d-48.64509274289675!3d-27.526298784943286!2m3!1f0!2f0!3f0!
            3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95274c072fa89569%3A0xbd5cd2817c692ab1
            !2sServid%C3%A3o%20Manoel%20Dion%C3%ADsio%20Goulart%20-%20Jardim%20Janaina%2C%20Bigua%C3%A7u%20
            -%20SC%2C%2088160-000!5e0!3m2!1spt-BR!2sbr!4v1626817913549!5m2!1spt-BR!2sbr"></iframe>
            <h3>entre em contato pelo whatsapp para orçamento ou nos visite em nosso instagram para mais fotos!</h3>
            <ul id='listLocation'>
                <li className='liList'> <a href="https://www.instagram.com/lucianomendoncaferreira/"> <i id='insta' class="fab fa-instagram"> </i> </a> </li>
                <li className='liList'> <a href="https://wa.me/qr/7FXZHUL4L7EJO1"> <i id='wpp' class="fab fa-whatsapp"> </i> </a> </li>
            </ul>
        </div>
    )
}