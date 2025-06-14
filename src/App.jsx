import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About"
import Projects from "./components/pages/Projects/Projects"
import Dmnature from "./components/pages/Projects/Dmnatue/Dmnature";
import Portfolio from "./components/pages/Projects/Portfolio/Portfolio";
import SwiggyClone from "./components/pages/Projects/SwiggyClone/SwiggyClone";
import FlipkartClone from "./components/pages/Projects/FlipkartClone/FlipkartClone";
import Contact from "./components/pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Movieapp from "./components/pages/Projects/Movieapp/Movieapp";
import FormAndFetch from "./components/pages/Projects/FormAndFetch/FormAndFetch";


const MainPage = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/projects/dmnature" element={<Dmnature />} />
       <Route path="/projects/movieapp" element={<Movieapp />} />
       <Route path="/projects/formandfetch" element={<FormAndFetch />} />
      <Route  path="/projects/portfolio" element={<Portfolio />} />
      <Route path="/projects/swiggyclone" element={<SwiggyClone />} />
      <Route path="/projects/flipkartclone" element={<FlipkartClone />}/>

    </Routes>
  );
};

export default App;
