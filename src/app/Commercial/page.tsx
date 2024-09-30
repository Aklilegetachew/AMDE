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
      location: "3.5 km pedestrian walkway",
    },

    {
      id: 6,
      src: "/miniPlaza.jpg",
      alt: "MCH: Mini Plaza",
      title: "MCH: Mini Plaza",
      location: "Churchill Avenue, Addis Ababa",
    },
    {
      id: 7,
      src: "/meskelCityhall.jpg",
      alt: "MCH: Hidden spaces",
      title: "MCH: Hidden spaces",
      location: "Preserving Heritage",
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
