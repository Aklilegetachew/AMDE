import Footer from "../Component/Footer";
import GetInTouch from "../Component/GetInTouch";
import Header from "../Component/Header";
import PageHeading from "../Component/PageHeading";
import ContactForm from "./Component/ContactForm";

const InTouch = () => {
  return (
    <div>
      <Header />
      <PageHeading amharictitle="በዚህ ያግኙን" title="Get in touch" />
      <ContactForm />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default InTouch;
