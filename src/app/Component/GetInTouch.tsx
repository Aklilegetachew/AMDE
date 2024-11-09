// import { Lexend_Deca } from "next/font/google";

// const lexendDeca = Lexend_Deca({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
// });

// export default function GetInTouch() {
//   return (
//     <div className={lexendDeca.className}>
//       <div className="relative bg-[url('/logoLong.png')] bg-cover bg-center w-full mt-6 py-16">
//         <div className="absolute inset-0 bg-[#DEDFDF] bg-opacity-80"></div>
//         <div className="relative z-10 container mx-auto text-center px-4">
//           <h2 className="text-4xl font-bold mb-4 text-gray-800">
//             Get In Touch
//           </h2>
//           <hr className="w-12 mx-auto mb-4 border-2 border-gray-800" />
//           <p className="max-w-2xl mx-auto text-gray-600">
//             We&apos;d love to hear from you! Whether you have a question about
//             our services, need support, or want to explore collaboration
//             opportunities, don&apos;t hesitate to reach out.
//           </p>
//           <hr className="w-3/4 mx-auto mt-12 border-2 border-gray-200" />
//         </div>
//       </div>
//     </div>
//   );
// }

import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function GetInTouch() {
  return (
    <div className={lexendDeca.className}>
      <div className="relative w-full mt-6 py-16 bg-[#DEDFDF]">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-[url('/logoLong.png')] bg-contain bg-center bg-no-repeat opacity-20"
          aria-hidden="true"
        ></div>
        <div className="relative z-10 container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Get In Touch
          </h2>
          <hr className="w-12 mx-auto mb-4 border-2 border-gray-800" />
          <p className="max-w-2xl mx-auto text-gray-600">
            We&apos;d love to hear from you! Whether you have a question about
            our services, need support, or want to explore collaboration
            opportunities, don&apos;t hesitate to reach out.
          </p>
          <hr className="w-3/4 mx-auto mt-12 border-2 border-gray-200" />
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="">
<img
  src="/logoLong.png"
  alt="Footer Image"
  className="w-full object-contain"
/>
</div> */
}

{
  /* <div className={`${lexendDeca.className}`}>
<div className="bg-[#DEDFDF] w-full mt-6  py-16  bg-cover bg-center flex items-center justify-center">
  <div className="container mx-auto text-center px-4">
    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
    <hr className="w-12 mx-auto mb-4 border-2 border-black" />
    <p className="max-w-2xl mx-auto">
      We&apos;d love to hear from you! Whether you have a question about
      our services, need support, or want to explore collaboration
      opportunities, don&apos;t hesitate to reach out.
    </p>
    <hr className="w-3/4 mx-auto mt-12 border-2 border-[#F5F5F5]" />
  </div>
</div>
</div> */
}
