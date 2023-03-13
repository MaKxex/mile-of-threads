import "../assets/scss/colorButton.scss"



export default function ColorButton({color}) {
  return (
    <button className="colorButton"
    style={{backgroundColor:color}}
    
    ></button>
  )
}
