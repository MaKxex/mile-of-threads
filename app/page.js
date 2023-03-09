import Image from 'next/image'
import { Inter } from 'next/font/google'
//import styles from './page.module.css'
import "../assets/scss/home.scss"
import "../assets/scss/layout.scss"
import MySwiper from '@/сomponents/MySwiper'
import Slider from "../assets/img/slider.png"

import Showcase from "../сomponents/Showcase"



export default function Home() {
  return (
        <div>

        {/* <MySwiper /> */}


        <div className='figure'>
            <Image src={Slider} />

        </div>

        <Showcase text="Впервые в магазине" text="Мы тоже были в шоке увидев наши новые принты"></Showcase>
        </div>


  )
}
