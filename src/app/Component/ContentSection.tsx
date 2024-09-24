interface ContentSectionProps {
  id: string;
  title: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right"; // Side of the image
  videoSrc?: string; // Optional Vimeo video URL
}

const MediaWithLogo: React.FC<{
  mediaSrc: string;
  mediaAlt: string;
  videoSrc?: string;
}> = ({ mediaSrc, mediaAlt, videoSrc }) => (
  <div className="relative flex justify-center items-center">
    {videoSrc ? (
      <div className="relative w-full h-0 pb-[56.25%] mb-20 m-6 border">
        <iframe
          src={`https://player.vimeo.com/video/${videoSrc}?autoplay=1&muted=1&loop=1&controls=0`} // Autoplay, muted, loop, no controls
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={mediaAlt}
        ></iframe>
      </div>
    ) : (
      <>
        <img
          src={mediaSrc}
          alt={mediaAlt}
          className="w-full h-auto object-cover border m-6 mb-20"
        />
        <img
          src="/logo-transparent.svg"
          alt="Company logo"
          className="absolute w-[140px] h-[120px] sm:w-[180px] sm:h-[160px] md:w-[200px] md:h-[186.95px] object-contain bottom-0 right-1/2 transform translate-x-1/2"
        />
      </>
    )}
  </div>
);

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  paragraph,
  imageSrc,
  imageAlt,
  imageSide,
  videoSrc,
}) => {
  return (
    <div className="paper">
      <div className="container m-16 mx-auto p-4">
        <div
          className={`flex flex-col-reverse md:flex-row ${
            imageSide === "left" ? "md:flex-row-reverse" : ""
          } gap-8`}
        >
          {/* Media section */}
          <div className="md:w-1/2">
            <MediaWithLogo
              mediaSrc={imageSrc}
              mediaAlt={imageAlt}
              videoSrc={videoSrc}
            />
          </div>

          {/* Content section */}
          <div className="flex flex-col p-6 md:w-1/2">
            <h2 className="text-2xl mb-4 font-bold text-neutral-800">
              {title}
            </h2>
            <p className="font-lexend-deca text-base font-normal leading-[22.5px] paragcolor">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContentSectionLeft: React.FC<ContentSectionProps> = ({
  id,
  title,
  paragraph,
  imageSrc,
  imageAlt,
  videoSrc,
}) => {
  return (
    <div id={id} className="paper">
      <div className="container m-16 mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Media on the left */}
          <MediaWithLogo
            mediaSrc={imageSrc}
            mediaAlt={imageAlt}
            videoSrc={videoSrc}
          />

          {/* Content on the right */}
          <div className="flex flex-col p-6">
            <h2 className="text-2xl mb-4 font-bold text-neutral-800">
              {title}
            </h2>
            <p className="font-lexend-deca text-base font-normal leading-[22.5px] paragcolor">
              {paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ContentSectionRight: React.FC<ContentSectionProps> = ({
  id,
  title,
  paragraph,
  imageSrc,
  imageAlt,
  videoSrc,
}) => {
  return (
    <div id={id} className="paper">
      <div className="container m-16 mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:grid-areas-content sm:grid-areas-reverse">
          {/* Content */}
          <div className="flex flex-col p-6">
            <h2 className="text-2xl mb-4 font-bold text-neutral-800">
              {title}
            </h2>
            <p className="font-lexend-deca text-base font-normal leading-[22.5px] paragcolor">
              {paragraph}
            </p>
          </div>

          {/* Media */}
          <MediaWithLogo
            mediaSrc={imageSrc}
            mediaAlt={imageAlt}
            videoSrc={videoSrc}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
