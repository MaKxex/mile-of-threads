import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductCard } from "./productCard";
import { IProductCarousel } from "@/lib/interfaces";


export function ProductCarousel({ title, products, displayMode = "default" }: IProductCarousel) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
              <div className="p-1">
                {displayMode === "imageOnly" ? (
                  <ProductCard
                    id={product.id}
                    images={product.images}
                  />
                ) : (
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    type={product.type}
                    price={product.price}
                    images={product.images}
                    buttonText="Добавить в рюкзак"
                    buttonLink={`/add-to-cart/${product.id}`}
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
