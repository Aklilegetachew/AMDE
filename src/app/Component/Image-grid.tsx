import Image from "next/image";
import Link from "next/link";
import PageTransition from "./ui/PageTransition";

export interface ImageItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  location: string;
}

interface ImageGridProps {
  images: ImageItem[];
}

export default function ImageGrid({ images }: ImageGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-52 mb-24">
      {images.map((image) => (
        <PageTransition>
          <Link
            key={image.id}
            href={`/ourprojects/${image.id}`}
            className="group block mb-20"
          >
            <div className="relative cursor-pointer overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-auto object-cover aspect-square transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="bg-white text-black p-2">
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold truncate group-hover:underline">
                  {image.title}
                </h3>
                <p className="text-xs sm:text-sm truncate">{image.location}</p>
              </div>
            </div>
          </Link>
        </PageTransition>
      ))}
    </div>
  );
}
