import ImageGrid, { ImageItem } from "../Component/Image-grid";
import Footer from "../Component/Footer";
import GetInTouch from "../Component/GetInTouch";
import Header from "../Component/Header";

const ResedntialPage = () => {
  const images: ImageItem[] = [
    {
      id: 0,
      src: "/GreenLadder.jpg",
      alt: "Green Ladder",
      title: "Green Ladder",
      location: "/ourprojects/0",
    },

    {
      id: 2,
      src: "/greenladerbetter.png",
      alt: "Green Tower",
      title: "Green Tower",
      location: "/ourprojects/2",
    },
    {
      id: 3,
      src: "/Hillhouse.jpg",
      alt: "Hill House - Interior",
      title: "Hill House - Interior",
      location: "/ourprojects/3",
    },
    {
      id: 4,
      src: "/Hillhouse2.jpg",
      alt: "Hill House",
      title: "Hill House",
      location: "/ourprojects/4",
    },
    {
      id: 5,
      src: "/colorex-3x4.jpg",
      alt: "Colorex",
      title: "Colorex",
      location: "/ourprojects/5",
    },

    {
      id: 8,
      src: "/Greentowerinterior.jpg",
      alt: "The Green Tower - Interior",
      title: "The Green Tower - Interior",
      location: "/ourprojects/8",
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

export default ResedntialPage;
