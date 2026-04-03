import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Welcome from "./components/Welcome";
import Services from "./components/Service";
import WhyChooseUs from "./components/WhyChooseUs";
import TypesOfAmbulance from "./components/TypeOfAmbulance";
import GetInTouch from "./components/GetInTouch";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Welcome />
      <Services />
      <WhyChooseUs />
      <TypesOfAmbulance />
      <FAQ />
      <GetInTouch />
      <Footer />
    </main>
  );
}