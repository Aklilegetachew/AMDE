import Image from "next/image";
import PageHeading from "../Component/PageHeading";
import About from "./Component/About";
import Divider from "./Component/Divider";
import Founders from "./Component/Founders";
import Header from "../Component/Header";
import GetInTouch from "../Component/GetInTouch";
import Footer from "../Component/Footer";
import { Lexend_Deca } from "next/font/google";
import TeamSection from "../Component/TeamSection";
import Partners from "./Component/Partners";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: specify weights
});

const teamMembers = [
  {
    name: "Andrew Patterson",
    title: "Director",
    imageSrc: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Andrew Mitchell",
    title: "Director",
    imageSrc: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Davor Popadich",
    title: "Director",
    imageSrc: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Surya Fullerton",
    title: "Director",
    imageSrc: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Shane Taylor",
    title: "Senior Associate",
    imageSrc: "/placeholder.svg?height=400&width=400",
  },
];
export default function AboutUs() {
  return (
    <main className={`${lexendDeca.className}`}>
      <Header />
      <About />
      <Divider />
      
      <Founders />
      <Partners />
      <GetInTouch />

      <Footer />
    </main>
  );
}
