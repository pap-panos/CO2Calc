import "./App.css";
import Home from "./components/LandingPage/Home";
import About from "./components/LandingPage/About";
import Contact from "./components/LandingPage/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import Account from "./components/Account";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import Questions from "./components/Questionnaire/Questions";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  // Check If User is Logged In
  const [logged, setLogged] = useState(false);
  const [logged0, setLogged0] = useState(true);

  const isLoggedIn = async () => {
    await Axios.get("/api/users/auth").then(
      (res) => {
        setLogged(true);
        setLogged0(false);
        console.log(res.status);
      },
      (error) => {
        setLogged(false);
        setLogged0(true);
        console.log(error);
      }
    );
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <div className="App">
      <Navbar auth={logged0} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={<ProtectedRoute element={<Login />} auth={logged0} />}
        />
        <Route
          path="/register"
          element={<ProtectedRoute element={<Register />} auth={logged0} />}
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questions" element={<Questions />} />
        <Route
          path="/account"
          element={<ProtectedRoute element={<Account />} auth={logged} />}
        />
        <Route
          path="/logout"
          element={<ProtectedRoute element={<Logout />} auth={logged} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
