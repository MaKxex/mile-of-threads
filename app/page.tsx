"use client";
import { ProductCarousel } from "@/components/ProductCarousel";

import PocketBase from 'pocketbase';
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast"
import { IProduct } from "@/lib/interfaces";
import {transformRecordToProduct} from "@/lib/scripts";
import ContentBlock from "@/components/ContentBlock/ContentBlock";
import { StaticCarausel } from "@/components/StaticCarousel/StaticCarousel";
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
      {/* <StaticCarausel>
        
      </StaticCarausel> */}
      <ContentBlock title='Впервые в магазине' shortDescription='Мы тоже были в шоке увидев наши новые принты'>
        <ProductCarousel products={similarProducts} displayMode="imageOnly"/>
      </ContentBlock>

      <ContentBlock title='Кстати о нас!' className="mt-4">
        <div className="flex justify-center">
          <p className="text-2xl w-[1000px]">Мы - единственный  магазин Латвии, где ты сможешь купить одежду с вышитым персонажем из твоего любимого аниме! Наш ассортимент пополняется с бешеным темпом! Ну а если ты не смог найти что-то интересное для себя, то ты сможешь заказать собственный эскиз, который будет вышит и доставлен в самые кратчайшие сроки. </p>
        </div>
      </ContentBlock>
    </main>
  );
}
