import React from "react";
import { useTranslation } from "react-i18next";

const About: React.FC = () => {
  return (
    <>
      <div className="text-center pt-16">
        <h2 className="text-4xl font-bold mb-4">ABOUT US</h2>
        <h3 className="text-2xl font-semibold mb-4">
          AMDE CONSULTING ARCHITECTS &amp; ENGINEERS
        </h3>
      </div>
      <section className="container mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between">
        <div className="w-full lg:w-1/2">
          <img
            src="/cardlogo.jpg"
            alt="Architecture Image"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="mt-8 md:mt-0 w-full lg:w-1/2 lg:pl-12">
          <h2 className=" text-xl md:text-4xl font-bold mb-4 mt-10 text-center">We are AMDE </h2>
          {/* <h3 className="text-2xl font-semibold mb-4">
            AMDE CONSULTING ARCHITECTS &amp; ENGINEERS
          </h3> */}
          <p className="text-gray-700 leading-relaxed">
            AMDE Architects & Engineers is an architectural design and
            engineering firm based in Addis Ababa, Ethiopia. Our focus lies in
            Architectural and Urban design, allowing us to navigate seamlessly
            from large-scale projects to intricate details. We pay attention to
            even the smallest details, ensuring a holistic approach to design.
            Our portfolio encompasses both public and private spaces, with a
            strong commitment to simplicity.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            At AMDE, we center our designs around bringing people closer to the
            natural environment for a calm and peaceful atmosphere. We reimagine
            and recreate living environments while staying true to our
            clients&apos; vision and remaining genuine to the local language. We
            love what we do and harness the full potential of our team to
            deliver outstanding project outcomes. Clear, honest, and consistent
            communication drives the materialization of our client&apos;s needs.
          </p>
        </div>
      </section>
      <div className="container mx-auto px-6 py-16 md:flex md:items-center md:justify-between text-center">
        <p className="text-gray-700 leading-relaxed">
          አምድ አርክቴክቶች እና መሐንዲሶች በአዲስ አበባ፣ ኢትዮጵያ ውስጥ የተመሰረተ የአርክቴክቸር እና ምህንድስና
          ዲዛይን አማካሪ ድርጅት ነው። በህንፃ እና የከተማ መዋቅራዊ ዲዛይን ዘርፍ አትኩሮት በማድረግ ከትላልቅ
          ፕሮጀክቶች እስከ አነስተኛ ዝርዝር ፈላጊ ንድፎች ወርዶ በመስራት ላይ ይገኛል። ቀለል ያለ የንድፍ ዘይቤን ገዢ
          የመዋቅር አካል በማድረግ የግል እና የህዝብ ቦታዎችን ይነድፋል። በአምድ፣ የዲዛይን ሀሳብ አትኩሮታችን ሰዎችን
          እና ተፈጥሮን በማዋሀድ የተረጋጋ እና ሰላማዊ የሆነ ከባቢ መፍጠር ነው። የደንበኞቻችንን ፍላጎት ባሟላ እና
          የአካባቢውን መሰረታዊ መገለጫዎች በማክበር እንነድፋለን። የቡድናችንን ሙሉ አቅም በመጠቀም የላቀ የፕሮጀክት
          ውጤቶችን ለማቅረብ እንተጋለን። ስራችንን እንወዳለን፤ ግልጽ፣ ሐቀኛ እና ወጥ የሆነ ግንኙነት የደንበኞቻችንን
          ፍላጎት እውን ለማድረግ ያስችለናል።
        </p>
      </div>
    </>
  );
};

export default About;
