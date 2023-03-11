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
	var props = props.income;
	for(let product of props){
	  console.log(product);
	}

	return (
	<div className="container">
		<h1 className="type-title">Худи</h1>

		<div className="tile">
			<div className="-top">
			<Image className="-img" src="https://picsum.photos/id/237/250/250" width="250" height="250"></Image>
			</div>

			<div className="-middle">
				<div className="-middle-top">
					<div className="-title">
						<h1 className={jura.className}>Мыслитель</h1>
					</div>

					<div className={jura.className}>
						<span className="-price">20<span className="-currency">€</span></span>
					</div>

				</div>

				<div className="-description"><span className={manrope.className}>худи</span></div>

				<div className="-middle-bottom">
					<div className="-wishlistIcon"><FavoriteBorderIcon/></div>
				</div>
			</div>
			<div className="-bottom">
				<div></div>
				<button className="-addToCart" type="button" ><span className={manrope.className}>Добавить в рюкзак</span></button>

			</div>

		</div>
	</div>
  )
}
