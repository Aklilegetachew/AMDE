// ImageCard.ts
interface ImageProps {
  src: string;
  alt: string;
}

function ImageCard({ src, alt }: ImageProps) {
  return (
    <div className="bg-white rounded shadow">
      <img src={src} alt={alt} className="w-full h-contain object-cover" />
    </div>
  );
}

export default ImageCard;
