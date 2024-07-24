"use client"

import { Button } from "@/components/ui/button"
import { ProductCarousel } from "@/components/ProductCarousel";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast"
import { IProduct } from "@/lib/interfaces";
import PocketBase from 'pocketbase';
import { useEffect, useState } from "react";
import {transformRecordToProduct} from "@/lib/scripts";
import CartService from "@/services/CartService";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useCartContext } from "@/contexts/CartContext";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const { addToCart } = useCartContext();


  const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

  const [product, setProduct] = useState<IProduct | null>(null);
  const [similarProducts, setSimilarProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  
  const { toast } = useToast()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRecord = await pb.collection('product').getOne(params.slug, {
          expand: 'id,name,type,price,imageUrl,sizes,colors,longDescription,inStock',
        });
        const productData = transformRecordToProduct(productRecord);
        setProduct(productData);
        
        const similarProductsRecords = await pb.collection('product').getFullList({ filter: `id!="${productData.id}"` });
        const similarProductsData = similarProductsRecords.map((record: any) => transformRecordToProduct(record));
        setSimilarProducts(similarProductsData);
      } catch (err) {
        console.error(err);
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: 'There was a problem with your request.'
        })
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [params.slug]);



  function addToCartHandle() {
    if (!selectedSize || !selectedColor) {
      toast({
        variant: "destructive",
        title: "Missing Selection",
        description: "Please select both size and color before adding to cart.",
      });
      return;
    }
    addToCart(product, selectedSize, selectedColor, 1)
  }

  function selectColorHandle(color:string) {
    setSelectedColor(color)
    
  }
  function selectSizeHandle(size:string) {
    setSelectedSize(size);
  }

  // if (error) return <p>{error}</p>;
  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mx-auto p-4">
      <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <Image src={product.images[0]} alt={product.name} width={200} height={200} className="w-full h-auto" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <p className="text-muted-foreground">{product.type}</p>
          <div className="flex items-center space-x-2 mt-4">
            <span className="text-lg font-bold">{product.price}</span>
            <Button variant="outline">Размеры</Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <ToggleGroup type="single" variant="outline" onValueChange={setSelectedSize} className="gap-2">
              {product.sizes.map((size) => (
                <ToggleGroupItem
                  key={size}
                  className={`w-12`}
                  value={size}
                  onClick={() => selectSizeHandle(size)}
                >
                  {size}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <ToggleGroup type="single" variant="outline" onValueChange={setSelectedColor} className="gap-2">
              {product.colors.map((color) => (
                <ToggleGroupItem
                  key={color}
                  value={color}
                  className={`w-8 h-8`}
                  style={{ backgroundColor: color }}
                  onClick={() => selectColorHandle(color)}
                  aria-label={`Toggle color ${color}`}
                />
              ))}
            </ToggleGroup>
          </div>
          <div className="mt-4">
            <h3 className="font-bold">Описание</h3>
            <div
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            />
          </div>
          <Button className="mt-4 w-full" onClick={addToCartHandle}>Кинуть в рюкзак</Button>
          <p className="mt-2 text-muted-foreground">Осталось футболок: {product.inStock}</p>
        </div>
      </main>
      <ProductCarousel title="Похожие товары" products={similarProducts} />
    </div>
  );
}
