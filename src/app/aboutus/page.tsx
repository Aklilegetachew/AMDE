import Image from "next/image";
import PageHeading from "./Component/PageHeading";
import About from "./Component/About";
import Divider from "./Component/Divider";
import Founders from "./Component/Founders";
import Header from "../Component/Header";
import GetInTouch from "../Component/GetInTouch";
import Footer from "../Component/Footer";

export default function AboutUs() {
  return (
    <main>
      <Header />
      <PageHeading />
      <About />
      <Divider />
      <Founders />
      <GetInTouch />
      <Footer />
    </main>
  );
}
