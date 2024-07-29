import { ICartItem, IProduct } from "./interfaces";
import PocketBase from 'pocketbase';
const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

export const transformRecordToProduct = (record: any): IProduct => {
    const imageUrls = record.images.map((filename: string) => 
      pb.files.getUrl(record, filename)
    );
    return {
      id: record.id,
      name: record.name,
      type: record.type,
      price: record.price,
      images: imageUrls,
      sizes: record.sizes,
      colors: record.colors,
      longDescription: record.longDescription,
      inStock: record.inStock,
    };
  };
  
export const transformRecordsToCartItem = (records: any[]): ICartItem[] => {
  let answer = [];
  for(let record of records) {

    let imageUrls = record.expand.product.images.map((filename: string) => 
      getImageUrlByFilename(record.expand.product, filename)
    );

    answer.push({
      id: record.id,
      name:record.expand.product.name,
      price: record.expand.product.price,
      size: record.size,
      amount: record.amount,
      image: imageUrls[0]
    })
  }
  return answer;
};

export const getImageUrlByFilename = (record: any, filename:string): string => {
  return pb.files.getUrl(record, filename);
}