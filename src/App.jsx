import "./App.css";
import {
  About,
  Admission,
  ContactUs,
  Hero,
  Labs,
  Navbar,
  Programs,
  Partners,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main className="rootContent">
        <Hero />
        <About />
        <Labs />
        <Programs />
        <Admission />
        <ContactUs />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

export default App;
