
import LogoSvg from "../assets/img/logo.svg"
import Link from "next/link"
import Image from "next/image"

export default function Logo(width,height) {
  return (
    <Link className='logo' href="/">
        <Image className='logo' src={LogoSvg} alt='logo'/>
    </Link>
  )
}
