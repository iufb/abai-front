import "./App.css";
import {
  About,
  Admission,
  ContactUs,
  Hero,
  Navbar,
  Programs,
  Partners,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <section className="rootContent">
        <Hero />
        <About />
        <Programs />
        <Admission />
        <ContactUs />
        <Partners />
      </section>
    </>
  );
}

export default App;
