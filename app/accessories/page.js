
import ProductTile from "@/сomponents/ProductTile";

var income = []


export default function Accessories() {
  return (
    <>
    {income.map((product) => (
      <ProductTile income={product}/>
    ))}
  </>
  )
}
