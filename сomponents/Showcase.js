import Image from 'next/image'
import Tovar from "../assets/img/tovar.jpg"
import "../assets/scss/showcase.scss"

import {Jura, Manrope } from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
  })
  
  const manrope = Manrope({
    subsets: ['latin'],
  })
  

export default function MySwiper(props) {
    return (
        <div className='container'>
        <div className= 'product'>
                <div className = "-top">
                    <div className='-title'>
                    <h1 className={jura.className}> {props.text}</h1>

                    </div>
                    <div className='-comment'>
                    <h2 className={manrope.className}>{props.comment}</h2>

                    </div>

                </div>

                <div className='-bottom'> 
                    <Image src={Tovar} className='-img' />
                    <Image src={Tovar} className='-img' />
                    <Image src={Tovar} className='-img' />

                </div>
            </div>
        </div>
);
};