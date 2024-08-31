interface ContentSectionProps {
  title: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right";
  serviceImg: string; // Side of the image
}

const ContentTwoByOne: React.FC<ContentSectionProps> = ({
  title,
  paragraph,
  imageSrc,
  imageAlt,
  imageSide,
  serviceImg,
}) => {
  return (
    <div className="paper">
      <div className="justify-center text-center m-6 p-6 text-3xl font-bold paragcolor">
        {title}
      </div>

      <div className="container m-6 mx-auto p-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8`}>
          {imageSide === "left" && (
            <div className="relative flex justify-center items-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-74 h-auto object-cover border border-gray-200 m-6 mb-20"
              />
            </div>
          )}

          <div className="flex flex-col p-6 justify-center items-center">
            <img
              src={serviceImg}
              alt={imageAlt}
              className="w-24 h-34 object-cover border border-gray-200 m-6 mb-10"
            />
            <p className="w-[80%] text-base font-bold leading-[22.5px] paragcolor text-center">
              AMDE CONSULTING ARCHITECTS &amp; ENGINEERS
            </p>
            <p className=" w-[70%] text-base font-normal leading-[22.5px] paragcolor text-center">
              {paragraph}
            </p>
          </div>

          {imageSide === "right" && (
            <div className="relative flex justify-center items-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-74 h-auto object-cover border border-gray-200 m-6 mb-10"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentTwoByOne;
