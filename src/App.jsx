import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import NearEvent from "./components/NearEvent";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header />
      <NearEvent />
      <About />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
