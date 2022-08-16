import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Card from './card';
import Footer from './footer';
import Resume from './Resume';
import Work from './work';
import ContactMe from './Contact';
import Navbar from './navbar';

function App() {
  return (
    <>
      <Navbar />

      <div className="container">

        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>

      </div>
      <Footer />
    </>
  );
}

export default App;
