import Image from "next/image";
import PageHeading from "../Component/PageHeading";
import OurWorkPage from "./Component/ourWorksPage";

import Header from "../Component/Header";
import GetInTouch from "../Component/GetInTouch";
import Footer from "../Component/Footer";
import ContentSection from "../Component/ContentSection";

export default function AboutUs() {
  return (
    <main>
      <Header />
      <PageHeading amharictitle="ስራዎቻችን" title="OUR WORKS" />

      <ContentSection
        title=""
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="left" // Image on the right
      />
      <ContentSection
        title=""
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="right" // Image on the right
      />
      <GetInTouch />
      <Footer />
    </main>
  );
}
