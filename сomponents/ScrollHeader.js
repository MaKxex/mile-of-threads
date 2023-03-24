"use client"

import "@/assets/scss/layout.scss"

import "@/assets/scss/scrollHeader.scss"
import Script from "next/script"
import Logo from "./Logo"
import NavBarIcons from "./NavBarIcons"
import SubNav from "./SubNav"





export default function ScrollHeader() {
  return (
	<>
		<div className='scroll-navbar'>
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
