

export interface IProduct {
    id: string; 
    name: string;
    type: string;
    price: string;
    images: string[];
    sizes: string[];
    colors: string[];
    longDescription: string;
    inStock: number;
}

export interface IProductCard {
    id: string;
    name?: string;
    type?: string;
    price?: string;
    images: string[];
    buttonText?: string;
    buttonLink?: string;
    altText?: string;
}

export interface IContainer {
    children: React.ReactNode;
    className?: string;
}

export interface IProductCarousel {
    title?: string;
    products: IProduct[];
    displayMode?: "default" | "imageOnly"; // Новый пропс для режима отображения
}

export interface ICartItem {
    id: string;
    name: string;
    price: number;
    size: string;
    color:string;
    amount:number;
    image: string
}

