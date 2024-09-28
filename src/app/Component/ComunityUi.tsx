interface ContentSectionProps {
  title: string;
  paragraph: string;
  imageSrc: string;
  imageAlt: string;
  imageSide: "left" | "right";
  serviceImg: string; // Side of the image
}

const ComunityUI: React.FC<ContentSectionProps> = ({
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
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8`}>
          {imageSide === "left" && (
            <div className="relative flex justify-center items-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-24 h-auto object-cover m-6 mb-20"
              />
            </div>
          )}

          <div className="flex flex-col p-2 justify-center items-center md:col-span-2 ">
            <p className=" w-full text-base font-normal leading-[22.5px] paragcolor text-center">
              {paragraph}
            </p>
          </div>

          {imageSide === "right" && (
            <div className="relative flex justify-center items-center">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-24 h-auto object-cover grayscale  m-6 mb-10"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComunityUI;
