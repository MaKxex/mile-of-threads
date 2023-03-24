import {jura, manrope} from "@/utils/fonts.js"
import Link from "next/link"
import SubnavContent from "./SubnavContent"

export default function SubNav() {
  return (
    <>
        <div className='-subnav'>
        <Link className={jura.className} href="/whats-new">Что нового?</Link>
        
        </div>


        <div className='-subnav'>
            <Link className={jura.className} href="/clothes">Одежда</Link>
            <SubnavContent />

        </div>

        <div className='-subnav'>
            <Link className={jura.className} href="/accessories">Аксессуары</Link>
            <SubnavContent />
            
        </div>
        <div className='-subnav'><Link className={jura.className} href="/custom">Кастом</Link></div>
    </>
  )
}
