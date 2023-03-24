import "../assets/scss/article.scss"
import {jura, manrope } from '@/utils/fonts.js'

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
