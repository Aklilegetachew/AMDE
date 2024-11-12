import ComunityUI from "../Component/ComunityUi";
import ContentTwoByOne from "../Component/ContentTwoByOne";
import DesignPage from "../Component/ContentTwoByOne";
import Footer from "../Component/Footer";
import GetInTouch from "../Component/GetInTouch";
import Header from "../Component/Header";
import PageHeading from "../Component/PageHeading";

import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: specify weights
});
const SomePage = () => {
  return (
    <div className={`${lexendDeca.className}`}>
      <Header />
      {/* <PageHeading amharictitle="ማህበረሰብ (አቀፍ)" title="Community" /> */}
      {/* <ComunityUI
        title="Empowering Communities"
        paragraph="AMDE is a strong advocate of fulfilling social responsibility in its area of expertise. To do that, we venture with partners with like mind and interest to foster public projects that would create social, economic and environmental impact through strong collaborative grounds. With the community at the center of the whole process, AMDE and the participating partners embark on this task for the creation of better living environment.    "
        imageSrc="/HandShake.png"
        imageAlt="Description of Image 1"
        imageSide="right" // Image on the right
        serviceImg="/Consulting.png"
      />
      <ComunityUI
        title="ማህበረሰቦችን ማብቃት"
        paragraph="አምድ በሙያችን መስክ ማህበራዊ ሃላፊነትን መወጣት አለብን ብሎ የሚያምን ጠንካራ ተሟጋች ነው። ለዚህም፣ ተመሳሳይ አስተሳሰብ እና ፍላጎት ካላቸው አጋሮች ጋር ማህበራዊ፣ ኢኮኖሚያዊ እና አካባቢያዊ ተፅእኖ የሚፈጥሩ ህዝባዊ ፕሮጀክቶችን እውን ለማድረግ በጠንካራ ትብብር እንሰራለን። ማህበረሰቡን ዋነኛ የሂደቱ ተዋናኝ በማድረግ አምድ እና ተሳታፊ አጋሮች የተሻለ የመኖሪያ አከባቢን ለመፍጠር ይጥራሉ።"
        imageSrc="/tree.png"
        imageAlt="Description of Image 1"
        imageSide="left" // Image on the right
        serviceImg="/tree.png"
      /> */}
      
      
      <div className="container w-full grid grid-row-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 py-16 mx-auto">
        <div className=" lg:col-span-2">
          <div className="text-center pt-28">
            <h2 className="text-4xl font-bold mb-4 mt-10">Community</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            AMDE is a strong advocate of fulfilling social responsibility in its
            area of expertise. To do that, we venture with partners with like
            mind and interest to foster public projects that would create
            social, economic and environmental impact through strong
            collaborative grounds. With the community at the center of the whole
            process, AMDE and the participating partners embark on this task for
            the creation of better living environment.
          </p>
        </div>
        <div className=" lg:col-span-2">
          <div className="text-center pt-28">
            <h2 className="text-4xl font-bold mb-4 mt-10">ማህበረሰብ (አቀፍ)</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-justify">
            አምድ በሙያችን መስክ ማህበራዊ ሃላፊነትን መወጣት አለብን ብሎ የሚያምን ጠንካራ ተሟጋች ነው። ለዚህም፣
            ተመሳሳይ አስተሳሰብ እና ፍላጎት ካላቸው አጋሮች ጋር ማህበራዊ፣ ኢኮኖሚያዊ እና አካባቢያዊ ተፅእኖ የሚፈጥሩ
            ህዝባዊ ፕሮጀክቶችን እውን ለማድረግ በጠንካራ ትብብር እንሰራለን። ማህበረሰቡን ዋነኛ የሂደቱ ተዋናኝ
            በማድረግ አምድ እና ተሳታፊ አጋሮች የተሻለ የመኖሪያ አከባቢን ለመፍጠር ይጥራሉ።
          </p>
        </div>
      </div>
      <div className="flex flex-col p-2 justify-center items-center md:col-span-2 lg:mb-32">
        <p className=" w-full text-base font-bold leading-[22.5px] paragcolor text-center">
          Detail version is coming soon!
        </p>
        <p className=" w-full text-base font-normal leading-[22.5px] paragcolor text-center">
          ዝርዝር መረጃ በቅርብ ይጠብቁ!
        </p>
      </div>

      <GetInTouch />
      <Footer />
    </div>
  );
};

export default SomePage;
