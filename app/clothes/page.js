import ProductTile from "@/сomponents/ProductTile";
import "assets/scss/productTile.scss"

var income = [
  {
    name: "Худи",
    goods: [{
      title: "1",
      price: 20,
      desctiption: "худи",
      img_src: "https://picsum.photos/250/250",
      img2_src: "https://picsum.photos/id/237/250/250",
      href: "#"
    },
    {
      title: "2",
      price: 20,
      desctiption: "худи",
      img_src: "https://picsum.photos/id/200/250/250",
      img2_src: "https://picsum.photos/id/143/250/250",
      href: "#"


    },
    {
      title: "3",
      price: 20,
      desctiption: "худи",
      img_src: "https://picsum.photos/id/201/250/250",
      img2_src: "https://picsum.photos/id/143/250/250",
      href: "#"


    },
    {
      title: "4",
      price: 20,
      desctiption: "худи",
      img_src: "https://picsum.photos/id/202/250/250",
      img2_src: "https://picsum.photos/id/143/250/250",
      href: "#"


    },
    {
      title: "5",
      price: 20,
      desctiption: "худи",
      img_src: "https://picsum.photos/id/203/250/250",
      img2_src: "https://picsum.photos/id/143/250/250",
      href: "#"


    },
    {
      title: "6",
      price: 20,
      desctiption: "худи",
      img_src: "https://picsum.photos/id/204/250/250",
      img2_src: "https://picsum.photos/id/143/250/250",
      href: "#"


    },
    {
      title: "7",
      price: 20,
      desctiption: "худи",
      img_src: "https://picsum.photos/id/211/250/250",
      img2_src: "https://picsum.photos/id/143/250/250",
      href: "#"


    }]
  },
  {
    name: "Футболки",
    goods: [{
      title: "Бусик",
      price: 15,
      desctiption: "футболка",
      img_src: "https://picsum.photos/id/0/250/250",
      img2_src : "https://picsum.photos/id/222/250/250",
      href: "#"
    },{
      title: "Бусик",
      price: 15,
      desctiption: "футболка",
      img_src: "https://picsum.photos/id/666/250/250",
      img2_src : "https://picsum.photos/id/333/250/250",
      href: "#"
    }]

  }]
  
export default function Clothes() {
  // console.log(income);
  return (

    <div className="-product-line">
      {income.map((product) => (
        <ProductTile income={product}/>
      ))}
    </div>
  
  )
}
