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
        title="MCH: Meskel Square to City Hall Street Refurbishment"
        paragraph="Cited at the heart of Addis Ababa, the whole project is intended to keep the old structure and function intact and enhance its linkage with the adjacent functions, through well designed mobility system, and introduction of public facilities. The project begins with the re-imagination of the vast plaza of the Meskel square and ends with a mini plaza linked in-between by the 3.5km pedestrian refurbished pedestrian walkway. Mobility (both pedestrian and vehicular) was the central governing element in the reorganization of the various spaces at the two plazas and recreating the 3.5 km pedestrian walkway."
        imageSrc="/meskelSquare.jpg"
        imageAlt="Description of Image 1"
        imageSide="left" // Image on the right
      />
      <ContentSection
        title="The Green Tower (3B+G+15 Apartment Building) "
        paragraph="Aiming at creating a luxurious residence, EMADA Homes is an apartment building with a well-integrated green to each of the spaces. The central aim is to create one whole connected green space beginning from the reception's lavish garden leading to the intermediary public space, which is serving as an elevated public space privileged with a 360 view and culminating with a pent houses' indoor and outdoor garden."
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="right" // Image on the right
      />
      <ContentSection
        title="The Green Tower - Interior"
        paragraph="Skillfully crafted green is localized centrally at the open down stretching vertically from the ground to the last floor. The vertical stretch of green gives the interior a sense of being on the ground floor which is magnified by a green intermediate terrace floor. The use of nude colors, that are in tune with the green, resonate throughout the whole space of the apartment creating a calm atmosphere."
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="left" // Image on the right
      />
      <ContentSection
        title="Hill House"
        paragraph="Sitting on one of the hills of Addis, the Yeka mountain, the private residence relishes the city view rested within the green environment. With a dual access to the site, the project is socketed at steeping gradient allowing multiple grounds. It draws in the city view and the adjacent green into the spaces through wide glass façade. Due to the sloping land, multiple grounds are availed with three level access to the adjacent green landscape.  "
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="right" // Image on the right
      />
      <ContentSection
        title="Hill House - Interior"
        paragraph="Shades of brown with a blend of white is utilized in the interiors to create earthly feeling. Natural light plays a major role in illuminating the spaces through the wide curtain walls. Spacious interior is achieved by avoiding separating walls between spaces."
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="right" // Image on the right
      />
      <ContentSection
        title="Colorex"
        paragraph="Colorex is a 9 floored residential apartment building with a daring use of color. Offering the opportunity to revisit ones childhoods’ creativity and love for colors, colorex experiments on colors on varied spaces. Each unit is assigned to at least 2 specific colors, composing an array of colors on the whole building structure. Colorex is also an attempt to relate itself with the outside through its provocative color composition."
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="right" // Image on the right
      />
      <ContentSection
        title="Green Ladder (3B+G+16 Apartment Building) "
        paragraph="Coming soon!"
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="right" // Image on the right
      />
      <GetInTouch />
      <Footer />
    </main>
  );
}
