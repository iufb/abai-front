import "./App.css";
import {
  About,
  Admission,
  ContactUs,
  Faces,
  Footer,
  Hero,
  Labs,
  Navbar,
  Partners,
  Programs,
  Unique,
  UpButton,
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
      <UpButton />
    </>
  );
}

export default App;
