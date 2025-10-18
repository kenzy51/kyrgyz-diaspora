import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import CreateEventPage from "./pages/CreateEvent";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Navbar />
            <ToastContainer position="top-right" autoClose={3000} theme="colored" />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/createEvent" element={<CreateEventPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
