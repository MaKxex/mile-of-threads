// Карусель для товаров
import { GenericCarousel } from "./GenericCarousel/GenericCarousel";
import { ProductCard } from "./ProductCard";
import { IProductCarousel } from "@/lib/interfaces";

export function ProductCarousel({ products, displayMode = "default" }: IProductCarousel) {
  const productItems = products.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      name={displayMode === "imageOnly" ? undefined : product.name}
      type={displayMode === "imageOnly" ? undefined : product.type}
      price={displayMode === "imageOnly" ? undefined : product.price}
      images={product.images}
    />
  ));

  return <GenericCarousel items={productItems} />;
}