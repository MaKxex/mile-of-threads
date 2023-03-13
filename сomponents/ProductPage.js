import ProductTile from "./ProductTile";
import ProductTitle from "./ProductTitle";
import Image from "next/image";
import TextBlock from "./TextBlock";
import "@/assets/scss/productPage.scss"
import Price from "./Price";
import ProductType from "./ProductType";
import SizeButton from "./SizeButton.js"
import ColorButton from "@/сomponents/ColorButton.js"


import AddToCart from "./AddToCart";

var income = [
    {
      name: "Похожие товары",
      goods: [{
        title: "1",
        price: 20,
        desctiption: "худи",
        img_src: "https://picsum.photos/250/250",
        img2_src: "https://picsum.photos/id/237/250/250",
  
        href: "#"
      },
      {
        title: "2",
        price: 20,
        desctiption: "худи",
        img_src: "https://picsum.photos/id/200/250/250",
        img2_src: "https://picsum.photos/id/143/250/250",
        href: "#"
  
  
      },
      {
        title: "3",
        price: 20,
        desctiption: "худи",
        img_src: "https://picsum.photos/id/201/250/250",
        img2_src: "https://picsum.photos/id/143/250/250",
        href: "#"
  
  
      },
      {
        title: "4",
        price: 20,
        desctiption: "худи",
        img_src: "https://picsum.photos/id/202/250/250",
        img2_src: "https://picsum.photos/id/143/250/250",
        href: "#"
  
  
      },
      {
        title: "5",
        price: 20,
        desctiption: "худи",
        img_src: "https://picsum.photos/id/203/250/250",
        img2_src: "https://picsum.photos/id/143/250/250",
        href: "#"
      }]

    }
]


import {Manrope } from 'next/font/google'

const manrope = Manrope({
    subsets: ['latin'],
  })



export default function ProductPage() {
    console.log("asd");
  return (
    <>
        <div className='container'>
            
            <div className="product">
                <div className="-left">
                    <div className="-product-img">
                        <Image src="https://picsum.photos/id/541/541/541" width="541" height="541" alt="product photo"/>
                    </div>
                    
                    <div className="-product-details">
                        <TextBlock title="Состав">Хлопок 80%, Полиэстер 15%, Эластан 5%</TextBlock>


                    </div>

                </div>
                <div className="-right">

                    <div className="-top">

                        <div className="-top-left">
                            <div className="-block-1">
                                <ProductTitle className="-title" title="Пейзаж"/>
                                <ProductType className="-type" type="футболка"/>
                            </div>

                            <div className="-block-2">
                                    <SizeButton text="S"></SizeButton>
                                    <SizeButton text="M"></SizeButton>
                                    <SizeButton text="L"></SizeButton>
                                    <SizeButton text="XL"></SizeButton>
                                    <SizeButton text="2XL"></SizeButton>
                                    <SizeButton text="3XL"></SizeButton>

                            </div>

                            <div className="-block-3">
                                <ColorButton color="red"></ColorButton>
                                <ColorButton color="black"></ColorButton>
                                <ColorButton color="white"></ColorButton>
                                <ColorButton color="orange"></ColorButton>
                                <ColorButton color="yellow"></ColorButton>
                                <ColorButton color="purple"></ColorButton>
                                <ColorButton color="green"></ColorButton>
                                <ColorButton color="blue"></ColorButton>
                                <ColorButton color="#58D7FF"></ColorButton>

                            </div>
                        </div>
                        
                        
                        <div className="-top-right">
                            <Price className="-price" price="20" currency="A" />
                            <SizeButton text="Размеры"></SizeButton>

                        

                        </div>
                    
                    </div>

                    <div className="-bottom">
                        <div className="-description-block">
                            <TextBlock title="Описание">
                            Кароче, футболка с прикольным принтом пейзажа - это такая шмотка, которая выделяет тебя из толпы и добавляет стиля твоему образу. Такая футболка - идеальный выбор для тех, кто ценит комфорт и экспрессивность одновременно.
                            </TextBlock>
                        </div>

                        <div className="cartStock">
                            <AddToCart text="Кинуть в рюкзак" style={{fontSize:32, padding:11}}></AddToCart>
                            <span className="-inStock"><span className={manrope.className}>Осталось футболок: 9</span></span>
                        </div>
                        


                    </div>

                </div>


            </div>
            
            
        </div>

        <ProductTile income={income[0]} />
        
    </>
  )
}
