import { Route, Routes } from "react-router-dom";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Companion from "./pages/Companion";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/companion/:speciality" element={<Companion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment/:companionId" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;
