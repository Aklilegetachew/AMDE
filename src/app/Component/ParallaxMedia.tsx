import { useEffect, useRef } from "react";
import ProjectDetails from "./projectDescription";
import { textDetails } from "../ourprojects/mediaData";
import { parse } from "path";

type MediaItem = {
  type: "image" | "video" | "text";
  src: string;
  alt?: string;
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
        }px)`; // Parallax effect (0.5 multiplier)
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (mediaArray.length === 0) return null;

  const firstMedia = mediaArray[0];
  const lastMedia = mediaArray[mediaArray.length - 1];
  const restMedia = mediaArray.slice(1, -1);

  const detailIndex = firstMedia.alt;
  let indexofDetail: number;
  if (!detailIndex) {
    indexofDetail = 100;
  } else {
    indexofDetail = parseInt(detailIndex);
  }

  const projectCode = textDetails[indexofDetail].projectCode;
  const location = textDetails[indexofDetail].location;
  const description = textDetails[indexofDetail].description;
  const area = textDetails[indexofDetail].area;
  const completionYear = textDetails[indexofDetail].completionYear;
  return (
    <div className="w-full">
      {/* First Media - Fullscreen media (image or video) */}
      <div ref={parallaxRef} className="relative h-screen overflow-hidden">
        {firstMedia.type === "image" ? (
          <img
            src={firstMedia.src}
            alt={firstMedia.alt || "Media image"}
            className="object-cover w-full h-full"
            onError={(e) => (e.currentTarget.src = "fallback.jpg")}
          />
        ) : (
          <div className="h-screen w-full overflow-hidden">
            <iframe
              src={`https://player.vimeo.com/video/${firstMedia.src}?autoplay=1&muted=1&loop=1&controls=0`}
              className="absolute top-0 left-0 w-full h-full object-fill"
              frameBorder="0"
              allowFullScreen
              title={firstMedia.alt}
              style={{ margin: 0, padding: 0 }}
            ></iframe>
          </div>
        )}
      </div>

      {restMedia.length > 0 && // Check if restMedia has elements
        restMedia.map((media, index) => (
          <div key={index} className="relative h-screen overflow-hidden">
            <img
              
              src={media.src}
              alt={media.alt || "Media image"}
              className="object-cover w-full h-full"
              onError={(e) => (e.currentTarget.src = "fallback.jpg")}
            />
          </div>
        ))}

      {/* Last Media - Text content that scrolls to half screen height */}
      <div className="relative w-full h-[60vh] flex   bg-white ">
        {/* <h1 className="text-4xl font-bold">{lastMedia.alt}</h1> */}
        <ProjectDetails
          projectCode={projectCode}
          location={location}
          description={description}
          area={area}
          completionYear={completionYear}
        />
      </div>
    </div>
  );
};

export default ParallaxMedia;
