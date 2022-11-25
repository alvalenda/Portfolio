import { Header } from "@components/layout/Header";
import { Navbar } from "@components/layout/Navbar";
import { About } from "@components/About";
import { Contact } from "@components/Contact";
import { Experience } from "@components/Experience";
import { Footer } from "@components/layout/Footer";
import { Portfolio } from "@components/Portfolio";
import { Services } from "@components/Services";
import { Testimonials } from "@components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
