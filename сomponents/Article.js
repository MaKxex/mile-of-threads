import "../assets/scss/article.scss"
import {Jura, Manrope } from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
  })
  
const manrope = Manrope({
subsets: ['latin'],
})


export default function Article(props) {
  return (
    <div className="container">
        <div className="article">
            <div className="article-title">
                <h1 className={jura.className}>{props.title}</h1>
            </div>

            <div className="article-text">
                <span className={manrope.className}>{props.text}</span>
            </div>

        </div>
    </div>
  )
}
