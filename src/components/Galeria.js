import React from 'react'
import Img1 from './imgs/img1.jpeg'
import Img2 from './imgs/img2.jpeg'
import Img3 from './imgs/img3.jpeg'
import Img4 from './imgs/img4.jpeg'
import Img5 from './imgs/img5.jpeg'
import Img6 from './imgs/img6.jpeg'
import Img7 from './imgs/img7.jpeg'
import Img8 from './imgs/img8.jpeg'
import Img9 from './imgs/img9.jpeg'
import Img10 from './imgs/img10.jpeg'
import Img11 from './imgs/img11.jpeg'
import Img12 from './imgs/img12.jpeg'
import './comp-css/Galeria.css'


export default function Galeria(){

    const setPhoto1 =  () => {
        const box1 = document.querySelector(".photo1").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto2 =  () => {
        const box2 = document.querySelector(".photo2").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto3 =  () => {
        const box2 = document.querySelector(".photo3").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto4 =  () => {
        const box2 = document.querySelector(".photo4").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto5 =  () => {
        const box2 = document.querySelector(".photo5").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto6 =  () => {
        const box2 = document.querySelector(".photo6").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto7 =  () => {
        const box2 = document.querySelector(".photo7").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto8 =  () => {
        const box2 = document.querySelector(".photo8").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto9 =  () => {
        const box2 = document.querySelector(".photo9").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto10 =  () => {
        const box2 = document.querySelector(".photo10").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto11 =  () => {
        const box2 = document.querySelector(".photo11").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }
    const setPhoto12 =  () => {
        const box2 = document.querySelector(".photo12").setAttribute("id", "photo");
        const closePhoto = document.querySelector(".close").setAttribute("id", "close")
    }



    const delPhotos = () => {
        document.querySelector(".photo1").removeAttribute("id", "photo")
        document.querySelector(".photo2").removeAttribute("id", "photo")
        document.querySelector(".photo3").removeAttribute("id", "photo")
        document.querySelector(".photo4").removeAttribute("id", "photo")
        document.querySelector(".photo5").removeAttribute("id", "photo")
        document.querySelector(".photo6").removeAttribute("id", "photo")
        document.querySelector(".photo7").removeAttribute("id", "photo")
        document.querySelector(".photo8").removeAttribute("id", "photo")
        document.querySelector(".photo9").removeAttribute("id", "photo")
        document.querySelector(".photo10").removeAttribute("id", "photo")
        document.querySelector(".photo11").removeAttribute("id", "photo")
        document.querySelector(".photo12").removeAttribute("id", "photo")
        const closeX = document.querySelector(".close").removeAttribute("id", "close")
    }


    return(
        <aside id='galeria'>
            <div onClick={()=> delPhotos()} className='close'> X </div>
            <h2>galeria</h2>
            <div className='gallery'>
                <div onClick={()=> setPhoto1()} className='photosGallery'>
                    <img src={Img1} className='photo1'></img>
                </div>
                <div onClick={()=> setPhoto2()} className='photosGallery'>
                    <img src={Img2} className='photo2'></img>
                </div>
                <div onClick={()=> setPhoto3()} className='photosGallery'>
                    <img src={Img3} className='photo3'></img>
                </div>
            </div>
            <div className='gallery'>
                <div onClick={()=> setPhoto4()} className='photosGallery'>
                    <img src={Img4} className='photo4'></img>
                </div>
                <div onClick={()=> setPhoto5()} className='photosGallery'>
                    <img src={Img5} className='photo5'></img>
                </div>
                <div onClick={()=> setPhoto6()} className='photosGallery'>
                    <img src={Img6} className='photo6'></img>
                </div>
            </div>
            <div className='gallery'>
                <div onClick={()=> setPhoto7()} className='photosGallery'>
                    <img src={Img7} className='photo7'></img>
                </div>
                <div onClick={()=> setPhoto8()} className='photosGallery'>
                    <img src={Img8} className='photo8'></img>
                </div>
                <div onClick={()=> setPhoto9()} className='photosGallery'>
                    <img src={Img9} className='photo9'></img>
                </div>
            </div>
            <div className='gallery'>
                <div onClick={()=> setPhoto10()} className='photosGallery'>
                    <img src={Img10} className='photo10'></img>
                </div>
                <div onClick={()=> setPhoto11()} className='photosGallery'>
                    <img src={Img11} className='photo11'></img>
                </div>
                <div onClick={()=> setPhoto12()} className='photosGallery'>
                    <img src={Img12} className='photo12'></img>
                </div>
            </div>
        </aside>
    )
}