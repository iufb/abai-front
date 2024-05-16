import "./App.css";
import {
  About,
  Admission,
  ContactUs,
  Faces,
  FloatButtons,
  Footer,
  Hero,
  Labs,
  Navbar,
  Partners,
  Programs,
  Unique,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="rootContent">
        <About />
        <Faces />
        <Unique />
        <Labs />
        <Programs />
        <Admission />
        <ContactUs />
        <Partners />
      </main>
      <Footer />
      <FloatButtons />
    </>
  );
}

export default App;
