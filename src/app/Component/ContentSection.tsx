interface ContentSectionProps {
  title: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right"; // Side of the image
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  paragraph,
  imageSrc,
  imageAlt,
  imageSide,
}) => {
  return (
    <div className="paper">
      <div className="justify-center text-center m-16 p-6 text-4xl font-bold paragcolor">
        {title}
      </div>

      <div className="container mx-auto p-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
          {imageSide === "left" && (
            <div className="relative flex justify-center items-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover border border-gray-200 m-6 mb-20"
              />
              <img
                src="/logo-transparent.svg"
                alt="Description of Image 2"
                className="absolute w-[140px] h-[120px] sm:w-[180px] sm:h-[160px] md:w-[200px] md:h-[186.95px] object-contain  border border-gray-200 bottom-0 right-1/2 transform translate-x-1/2"
              />
            </div>
          )}

          <div className="flex flex-col p-6">
            <h2 className=" text-2xl font-normal mb-4 paragcolor">
              AMDE CONSULTING ARCHITECTS &amp; ENGINEERS
            </h2>
            <p className="font-lexend-deca text-base font-normal leading-[22.5px] paragcolor">
              {paragraph}
            </p>
          </div>

          {imageSide === "right" && (
            <div className="relative flex justify-center items-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto object-cover border border-gray-200 m-4 sm:m-5 md:m-6 mb-12 sm:mb-16 md:mb-20"
              />
              <img
                src="/logo-transparent.svg"
                alt="Description of Image 2"
                className="absolute w-[50px] h-[30px] sm:w-[80px] sm:h-[160px] md:w-[100px] md:h-[80.95px] object-cover border border-gray-200 bottom-0 right-0 transform translate-x-4 sm:translate-x-6 md:translate-x-8"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
