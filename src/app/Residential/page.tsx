import ImageGrid, { ImageItem } from "../Component/Image-grid";
import Footer from "../Component/Footer";
import GetInTouch from "../Component/GetInTouch";
import Header from "../Component/Header";

import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: specify weights
});
const ResedntialPage = () => {
  const images: ImageItem[] = [
    {
      id: 0,
      src: "/GreenLadder.jpg",
      alt: "Green Ladder",
      title: "Green Ladder",
      location: "3B+G+16 Apartment Building",
    },

    {
      id: 2,
      src: "/greenladerbetter.png",
      alt: "Green Tower",
      title: "Green Tower",
      location: "3B+G+15 Apartment Building",
    },
    {
      id: 3,
      src: "/Hillhouse.jpg",
      alt: "Hill House - Interior",
      title: "Hill House - Interior",
      location: "Open Interiors Bathed in Natural Light",
    },
    {
      id: 4,
      src: "/Hillhouse2.jpg",
      alt: "Hill House",
      title: "Hill House",
      location: "Yeka Mountain, Addis Ababa",
    },
    {
      id: 5,
      src: "/colorex-3x4.jpg",
      alt: "Colorex",
      title: "Colorex",
      location: "9-floor apartment building",
    },

    {
      id: 8,
      src: "/Greentowerinterior.jpg",
      alt: "The Green Tower - Interior",
      title: "The Green Tower - Interior",
      location: "Seamless Vertical Garden",
    },
  ];
  return (
    <div className={`${lexendDeca.className}`}>
      <Header />
      <ImageGrid images={images} />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default ResedntialPage;
