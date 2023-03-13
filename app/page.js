import Image from 'next/image'
//import styles from './page.module.css'
import "../assets/scss/home.scss"
import "../assets/scss/layout.scss"
import Slider from "../assets/img/slider.png"
import Showcase from "../сomponents/Showcase"
import Article from '@/сomponents/Article'
import BigImage from '@/сomponents/BigImage'


export default function Home() {
  return (
    <div className='content'>

      <div className='figure container'>
          <Image src={Slider} />
      </div>

      <Showcase text="Впервые в магазине" comment="Мы тоже были в шоке увидев наши новые принты 🤯" />
      <Showcase text="Часто заказывают" comment="Вам явно нравится наш стаф" />
      {/* <BigImage /> */}
      <Article title="Кстати о нас!" text= "Мы - единственный  магазин Латвии, где ты сможешь купить одежду с вышитым персонажем из твоего любимого аниме! Наш ассортимент пополняется с бешеным темпом! Ну а если ты не смог найти что-то интересное для себя, то ты сможешь заказать собственный эскиз, который будет вышит и доставлен в самые кратчайшие сроки. " />
      <Showcase text="Зацени, какие фигурки <3" comment="Мы сами печатаем все фигурки и гарантируем вам, они офигенные!" />
      
    </div>
  )
}
