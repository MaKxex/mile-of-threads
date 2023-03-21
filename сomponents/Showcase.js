import Image from 'next/image'
import Tovar from "../assets/img/tovar.jpg"
import "../assets/scss/showcase.scss"

import {jura, manrope } from '@/utils/fonts.js'


function set_random_line() {


}


export default function MySwiper(props) {
    return (
        <div className='container'>
            <div className='abstract-box' >
                <div className='abstract-line' style={{
                    top: 110,
                    left: 20
                }}/>
            </div>
            <div className='abstract-box'>
                <div className='abstract-line' style={{
                    top: 100,
                    left: 30
                }}/>
            </div>
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