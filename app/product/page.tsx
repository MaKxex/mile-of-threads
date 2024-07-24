"use client"

import { ProductCard } from "@/components/ProductCard";
import PocketBase from 'pocketbase';
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { IProduct } from "@/lib/interfaces";
import {transformRecordToProduct} from "@/lib/scripts";

export default function Products() {
    const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);
    const [similarProducts, setSimilarProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { toast } = useToast()
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Fetch similar products
            const records = await pb.collection('product').getFullList();
            const recentlyAddedProductsData = records.map((record: any) => transformRecordToProduct(record));
            setSimilarProducts(recentlyAddedProductsData);
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
      }, []);

    if (loading) return <p>Loading...</p>

    return (
        <section className="w-full py-12">
          <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
              <div className="grid gap-1">
                <h1 className="text-2xl font-bold tracking-tight">Featured Products</h1>
                <p className="text-muted-foreground">Check out our latest and greatest products.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {similarProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    type={product.type}
                    price={product.price}
                    images={product.images}
                    buttonText="Добавить в рюкзак"
                    buttonLink={`/add-to-cart/${product.id}`}
                />
              ))}
            </div>
          </div>
        </section>
      )
}