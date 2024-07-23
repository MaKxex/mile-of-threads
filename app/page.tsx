"use client";
import { ProductCarousel } from "@/components/ProductCarousel";

import PocketBase from 'pocketbase';
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { IProduct } from "@/lib/interfaces";
import {transformRecordToProduct} from "@/lib/scripts";
// Получаем текущую дату
const currentDate = new Date();
// Вычисляем дату два недели назад
const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(currentDate.getDate() - 14);

// Форматируем даты в строку для фильтра
const formatDate = (date: Date) => {
  return date.toISOString().slice(0, 19).replace('T', ' ');
};

// Получаем отформатированную дату
const twoWeeksAgoFormatted = formatDate(twoWeeksAgo);

export default function Home() {
  const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

  const [similarProducts, setSimilarProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { toast } = useToast()

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch similar products
        const records = await pb.collection('product').getFullList({
          filter: `created >= "${twoWeeksAgoFormatted}"`,
        });
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

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <ProductCarousel products={similarProducts} displayMode="imageOnly"/>
    </main>
  );
}
