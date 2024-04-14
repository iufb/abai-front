import "./App.css";
import {
  About,
  Admission,
  ContactUs,
  Hero,
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
