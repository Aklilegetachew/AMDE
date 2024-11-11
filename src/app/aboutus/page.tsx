import Image from "next/image";
import PageHeading from "../Component/PageHeading";
import About from "./Component/About";
import Divider from "./Component/Divider";
import Founders from "./Component/Founders";
import Header from "../Component/Header";
import GetInTouch from "../Component/GetInTouch";
import Footer from "../Component/Footer";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: specify weights
});
export default function AboutUs() {
  return (
    <main className={`${lexendDeca.className}`}>
      <Header />
      <About />
      <Divider />
      <Founders />
      <GetInTouch />

      <Footer />
    </main>
  );
}
