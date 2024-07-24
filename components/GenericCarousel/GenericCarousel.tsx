import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


interface IGenericCarouselProps {
  items: React.ReactNode[];
  itemClassName?: string;
}

export function GenericCarousel({items, itemClassName = "md:basis-1/2 lg:basis-1/4" }: IGenericCarouselProps) {
  return (
    <section className="mt-8">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index} className={itemClassName}>
              <div className="p-1">
                {item}
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