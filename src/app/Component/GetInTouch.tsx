import React from "react";

const GetInTouch = () => {
  return (
    // bg-[url('/backgroundDesign.png')]
    <div className="bg-[#DEDFDF] w-full mt-6  py-16  bg-cover bg-center flex items-center justify-center">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <hr className="w-12 mx-auto mb-4 border-2 border-black" />
        <p className="max-w-2xl mx-auto">
          We&apos;d love to hear from you! Whether you have a question about our
          services, need support, or want to explore collaboration
          opportunities, don&apos;t hesitate to reach out.
        </p>
        <hr className="w-3/4 mx-auto mt-12 border-2 border-[#F5F5F5]" />
      </div>
    </div>
  );
};

export default GetInTouch;
