"use client"

import "@/assets/scss/layout.scss"

import "@/assets/scss/scrollHeader.scss"
import Script from "next/script"
import Logo from "./Logo"
import NavBarIcons from "./NavBarIcons"
import SubNav from "./SubNav"


import { useEffect,useState } from "react"


export default function ScrollHeader() {
	const [scrollY, setScrollY] = useState(0);
	const [flag,setFlag] = useState(false);
	
	
	function logit() {
		setScrollY(window.pageYOffset);
		if (scrollY > 180 ) {
			setFlag(true);
		} else setFlag(false);
	}
		
	 
	useEffect(() => {
		function watchScroll() {
		  window.addEventListener("scroll", logit);
		}
		watchScroll();
		return () => {
		  window.removeEventListener("scroll", logit);
		};
	});



  return (
	<>
		{/* <div className='scroll-navbar'> */}
		<div className={flag ? "scroll-navbar flag" : "scroll-navbar"}>
			<div className="-scroll-navbar-wrapper">

				<div className="-scroll-block">
					<Logo / >
				</div>
				<div className="-scroll-block">
					<SubNav />
				</div>
				<div className="-scroll-block">
					<NavBarIcons />
				</div>

			</div>
		</div>
	</>
  )
}
