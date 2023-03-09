import React from 'react'
import { createElement } from 'react'



export default function footerContent(props) {
    return (
        <div className='-footer-content-block'>
            <div className= "-footer-content-title">
                {props.title}
            </div>
            <div className='-footer-content'>
                {props.links.forEach((link) =>(
                    //console.log(link)
                    // createElement("a",{href:link.href})
                    <a href="/#">awdas</a>
                ))}
            </div>
        </div>
    ) 
}


