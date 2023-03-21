import React from 'react'
import {jura, manrope } from '../utils/fonts.js'
import Link from 'next/link.js'


export default function SubnavContent() {
  return (
    <div className='-subnav-content'>

        
        <div className='-subnav-block'> 
            <h1 className='-subnav-title'><span className={jura.className}>На голову</span></h1>
                <Link href="" className='-subnav-link'><span className={manrope.className}>Шапки</span></Link>
        </div>

        <div className='-subnav-block'> 
            <h1 className='-subnav-title'><span className={jura.className}>На тело</span></h1>
            <Link href="" className='-subnav-link'><span className={manrope.className}>Худи</span></Link>
            <Link href="" className='-subnav-link'><span className={manrope.className}>Футболки</span></Link>
            <Link href="" className='-subnav-link'><span className={manrope.className}>Штаны</span></Link>
        </div>



        <div className='-subnav-block'> 
            <h1 className='-subnav-title'><span className={jura.className}>На ноги</span></h1>
            <Link href="" className='-subnav-link'><span className={manrope.className}>Носки</span></Link>
        </div>

    </div>  
  )
}
