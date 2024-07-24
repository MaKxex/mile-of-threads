import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { IProductCard } from "@/lib/interfaces";
export function ProductCard({
  id,
  name,
  type,
  price,
  images,
  buttonText,
  buttonLink,
  altText = "Product Image"
}: IProductCard) {
  return (
    <Link href={`/product/${id}`}>
      <Card>
          <Image src={images[0]} alt={altText} className="w-full z-0 aspect-square" width={300} height={300} />
        {(name || type || price || (buttonText && buttonLink)) && (
          <div className="p-4">
            {name && <h3 className="font-bold">{name}</h3>}
            {type && <p className="text-muted-foreground">{type}</p>}
            {price && <span className="text-lg font-bold">{price}</span>}
            {buttonText && buttonLink && (
              <Link href={buttonLink} passHref>
                <Button variant="outline" className="mt-2 w-full">
                  {buttonText}
                </Button>
              </Link>
            )}
          </div>
        )}
      </Card>
    </Link>
  );
}
