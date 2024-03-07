import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
}
