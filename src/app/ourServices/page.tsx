import ContentTwoByOne from "../Component/ContentTwoByOne";
import DesignPage from "../Component/ContentTwoByOne";
import Footer from "../Component/Footer";
import GetInTouch from "../Component/GetInTouch";
import Header from "../Component/Header";
import PageHeading from "../Component/PageHeading";

const SomePage = () => {
  return (
    <div>
      <Header />
      <PageHeading amharictitle="አገልግሎታችን" title="Our Services" />
      <ContentTwoByOne
        title="CONSULTING"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="right" // Image on the right
        serviceImg="/Consulting.png"
      />
      <ContentTwoByOne
        title="ARCHITECTURAL DESIGN"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="left" // Image on the right
        serviceImg="/ArchDesign.png"
      />
      <ContentTwoByOne
        title="ENGINEERING"
        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        imageSrc="/design1.png"
        imageAlt="Description of Image 1"
        imageSide="right" // Image on the right
        serviceImg="/Engineering.png"
      />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default SomePage;
