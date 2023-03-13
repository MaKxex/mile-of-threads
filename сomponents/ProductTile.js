"use client";
import "../assets/scss/productTile.scss"
import Image from "next/image";
import {Jura, Manrope } from 'next/font/google'

import Price from "./Price.js";

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductTitle from "./ProductTitle";
import ProductType from "./ProductType";
import AddToCart from "./AddToCart";


const jura = Jura({
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})



export default function ProductTile(props) {
	
	var props =  props.income


	return (

	<div className="container">
		<div className="product-type">
			<h1 className="-product-title"><span className={jura.className}> {props.name}</span></h1>

			<div className="-product-block">

				
				{props.goods.map((tile,index) => (
					<div className="tile" key={index}>
						<div className="-top">
							<Image className="-img" src={tile.img_src} width="250" height="250"alt="product photo" />
						</div>

						<div className="-middle">

							<div className="-middle-top">
								<ProductTitle title={tile.title} />
								<Price price={tile.price} currency={"€"} />
							</div>

							<ProductType type={tile.desctiption}/>

							<div className="-middle-bottom">
								<div className="-wishlistIcon"><FavoriteBorderIcon/></div>
							</div>
						</div>

						<div className="-bottom">
							<AddToCart text="Добавить в рюкзак"/>
						</div>

					</div>
				))}
			</div>

		</div>
	</div>
  )
}
