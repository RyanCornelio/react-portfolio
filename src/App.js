import "./App.css"
/* import Footer from "./components/Footer"; */
/* import Navbar from "./components/Navbar"; */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Gallery from "./pages/Gallery";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Header />
<<<<<<< HEAD
{/*           <Navbar /> */}
=======
>>>>>>> ec47a206d4ec7bbc4aaaed26520df1e74282bbbb
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Gallery" element={<Gallery />} />
          </Routes>
          <Projects />
<<<<<<< HEAD
        {/*             <Footer /> */}
=======
                {/*     <Footer /> */}
>>>>>>> ec47a206d4ec7bbc4aaaed26520df1e74282bbbb
        </Router>
      </>
    </div>
  )
}

export default App;