import Image from "next/image";
import { GenericCarousel } from "../GenericCarousel/GenericCarousel";


// Карусель для статичных картинок с ссылками
interface IImageLink {
    id: string;
    imageUrl: string;
    linkUrl: string;
}

interface IImageLinkCarouselProps {
    imageLinks: IImageLink[];
}

export function StaticCarausel({ imageLinks }: IImageLinkCarouselProps) {
    const imageLinkItems = imageLinks.map((imageLink) => (
        <a key={imageLink.id} href={imageLink.linkUrl} target="_blank" rel="noopener noreferrer">
        <Image src={imageLink.imageUrl} alt={`Image link to ${imageLink.linkUrl}`} className="w-full h-auto" />
        </a>
    ));

return <GenericCarousel items={imageLinkItems} />;
}