import ProductTile from "@/сomponents/ProductTile";


var income = [
  {
    name: "Худи",
    goods: [{
      title: "Мыслитель",
      price: 20,
      desctiption: "худи",
      img_src: "https://picsum.photos/250/250",
      img2_src: "https://picsum.photos/id/237/250/250",
      href: "#"
    },
    {
      title: "Impulse",
      price: 20,
      desctiption: "худи",
      img_src: "https://picsum.photos/id/200/250/250",
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
      img_src: "https://picsum.photos/id/111/250/250",
      img2_src : "https://picsum.photos/id/222/250/250",
      href: "#"
    }]


  }]
export default function Clothes() {
  return (
    <ProductTile income={income}/>
  )
}
