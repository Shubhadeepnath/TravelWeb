import "./styles.css";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Service from "./routes/Service";
import WestTripura from "./routes/WestTripura";
import NorthTripura from "./routes/NorthTripura";
import SouthTripura from "./routes/SouthTripura";
import Signup from "./routes/Signup";
import Register from "./routes/Register";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/About" />
        <Route element={<Service />} path="/Services" />
        <Route element={<Contact />} path="/Contact" />

        <Route path="/west-tripura" element={<WestTripura />}></Route>
        <Route path="/north-tripura" element={<NorthTripura />}></Route>
        <Route path="/south-tripura" element={<SouthTripura />}></Route>
        <Route path="/Signup" element={<Signup />} />
        <Route path="/register" element={<Register />} />
       
      </Routes>
    </div>
  );
}
