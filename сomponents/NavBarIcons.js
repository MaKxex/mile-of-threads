import Link from "next/link"
import {manrope, jura} from "@/utils/fonts.js"

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';

export default function NavBarIcons() {
  return (
    <div className='-navbar-icons'>
    <Link href="/#" className='-navbar-icon'><span className={manrope.className}>rus</span></Link>
    <Link href="/#"><AccountCircleOutlinedIcon className='-navbar-icon'/></Link>
    <Link href="/#"><BackpackOutlinedIcon className='-navbar-icon' /></Link>
  </div>
  )
}
