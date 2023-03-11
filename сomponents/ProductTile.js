"use client";
import "../assets/scss/productTile.scss"
import Image from "next/image";
import {Jura, Manrope } from 'next/font/google'



import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


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

				
				{props.goods.map((tile) => (
					<div className="tile">
						<div className="-top">
							<Image className="-img" src={tile.img_src} width="250" height="250" />
						</div>

						<div className="-middle">

							<div className="-middle-top">
								<div className="-title">
									<h1 className={jura.className}>{tile.title}</h1>
								</div>

								<div className={jura.className}>
									<span className="-price">{tile.price}<span className="-currency">€</span></span>
								</div>
							</div>

							<div className="-description"><span className={manrope.className}>{tile.desctiption}</span></div>

							<div className="-middle-bottom">
								<div className="-wishlistIcon"><FavoriteBorderIcon/></div>
							</div>
						</div>

						<div className="-bottom">
							<div></div>
							<button className="-addToCart" type="button" ><span className={manrope.className}>Добавить в рюкзак</span></button>
						</div>

					</div>
				))}
			</div>

		</div>
	</div>
  )
}
