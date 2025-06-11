import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import PageTransition from "./components/PageTransition";

// ScrollToTop component to handle scroll behavior
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="min-h-screen bg-black/40 flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 pt-24 pb-12 flex-grow">
          <AnimatePresence mode="wait">
            <PageTransition key={location.pathname}>
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </PageTransition>
          </AnimatePresence>
        </main>
        <div className="text-center py-4 text-gray-400 text-sm border-t border-gray-800">
          © {new Date().getFullYear()} Yatin. All rights reserved.
        </div>
      </div>
    </div>
  );
}

// Wrap App with Router
const AppWithRouter = () => (
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);

export default AppWithRouter;
