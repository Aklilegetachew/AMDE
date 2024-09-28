import ImageGrid, { ImageItem } from "../Component/Image-grid";
import Footer from "../Component/Footer";
import GetInTouch from "../Component/GetInTouch";
import Header from "../Component/Header";

const Commercial = () => {
  const images: ImageItem[] = [
    {
      id: 1,
      src: "/meskelSquarecrop.jpg",
      alt: "Meskel Square",
      title: "Meskel Square",
      location: "/ourprojects/1",
    },

    {
      id: 6,
      src: "/miniPlaza.jpg",
      alt: "MCH: Mini Plaza",
      title: "MCH: Mini Plaza",
      location: "/ourprojects/6",
    },
    {
      id: 7,
      src: "/meskelProject1.jpg",
      alt: "MCH: Hidden spaces",
      title: "MCH: Hidden spaces",
      location: "/ourprojects/7",
    },
  ];
  return (
    <div>
      <Header />
      <ImageGrid images={images} />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Commercial;
