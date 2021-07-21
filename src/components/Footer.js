import React from 'react'
import './comp-css/Footer.css'

export default function Footer(){

    return(
        <footer>
            <div class="footer-content">
                <p>Copyright &copy; 2021, LUCIANO MENDONÇA FERREIRA - Todos os direitos reservados</p>
                <nav class="social-list">
                    <ul>
                        <li> <a href="https://www.instagram.com/ruanhrocha/"> <i class="fab fa-instagram"> </i> </a> </li>
                        <li> <a href="https://wa.me/qr/MLBJ6M4PFKQUA1"> <i class="fab fa-whatsapp"> </i> </a> </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}