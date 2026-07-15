import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Story from './pages/Story.jsx';
import Collection from './pages/Collection.jsx';
import Sustainability from './pages/Sustainability.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <div className="relative min-h-screen bg-bgPrimary text-textMain overflow-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="relative z-10 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<Story />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
