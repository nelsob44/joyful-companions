import { Route, Routes } from "react-router-dom";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Companions from "./pages/Companions";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/companions" element={<Companions />} />
        <Route path="/companions/:location" element={<Companions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment/:companionId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
