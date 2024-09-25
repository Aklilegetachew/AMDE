import { useEffect, useRef } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string; // Only for images
};

type ParallaxMediaProps = {
  mediaArray: MediaItem[]; // An array of MediaItem objects
};

const ParallaxMedia: React.FC<ParallaxMediaProps> = ({ mediaArray }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.pageYOffset;
        parallaxRef.current.style.transform = `translateY(${
          scrollPosition * 0.5
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (mediaArray.length === 0) return null;

  const firstMedia = mediaArray[0];
  const restMedia = mediaArray.slice(1);

  return (
    <div className="w-full">
      {/* Fullscreen media (image or video) */}
      <div ref={parallaxRef} className="relative h-[50%]  overflow-hidden">
        {firstMedia.type === "image" ? (
          <img
            src={firstMedia.src}
            alt={firstMedia.alt || "Media image"}
            className="object-cover w-full h-full"
          />
        ) : (
          // <video
          //   src={`https://player.vimeo.com/video/${firstMedia.src}?autoplay=1&muted=1&loop=1&controls=0`}
          //   className="object-cover w-full h-full bg-blue-600"
          //   autoPlay
          //   muted
          //   loop
          // />
          <div className=" h-screen w-full overflow-hidden">
            <iframe
              src={`https://player.vimeo.com/video/${firstMedia.src}?autoplay=1&muted=1&loop=1&controls=0`} // Autoplay, muted, loop, no controls
              className="absolute top-0 left-0 w-full h-full object-fill"
              frameBorder="0"
              allowFullScreen
              title={firstMedia.alt}
              style={{ margin: 0, padding: 0 }}
            ></iframe>
          </div>
        )}
      </div>

      {/* Parallax effect for the rest of the images */}
      <div className="relative">
        {restMedia.map((media, index) => (
          <div
            key={index}
            className="w-full h-screen  bg-cover bg-center"
            style={{
              backgroundImage:
                media.type === "image" ? `url(${media.src})` : "none",
            }}
          >
            {media.type === "video" && (
              <div className=" bg-white bg-fixed h-screen">
                <h1>{media.alt}</h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxMedia;
