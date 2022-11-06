import { BrowserRouter, Routes, Route } from 'react-router-dom'

//pages & components
import Home from './pages/Home';
import Content from './pages/Content';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Posts from './pages/Posts';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/content"
            element={<Content />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/content/:id"
            element={<Posts />}
          />
        </Routes>
        
      </div>
      <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
