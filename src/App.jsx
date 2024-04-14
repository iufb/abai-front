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
  UpButton,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="rootContent">
        <About />
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
