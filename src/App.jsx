import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/Aboutus";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MapComponent from "./components/MapComponent";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import ResetPasswordotp from "./pages/ResetPasswordotp";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/maps" element={<MapComponent />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reset-password-otp" element={<ResetPasswordotp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
