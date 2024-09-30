import Footer from "../Component/Footer";
import GetInTouch from "../Component/GetInTouch";
import Header from "../Component/Header";
import PageHeading from "../Component/PageHeading";
import ContactForm from "./Component/ContactForm";
import { Lexend_Deca } from "next/font/google";

const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Optional: specify weights
});
const InTouch = () => {
  return (
    <div className={`${lexendDeca.className}`}>
      <Header />
      <PageHeading amharictitle="በዚህ ያግኙን" title="GET IN TOUCH" />
      <ContactForm />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default InTouch;
