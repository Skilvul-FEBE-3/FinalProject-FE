import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About/About";
import DetailBLog from "./pages/Blog/Detail";
import ListBlog from "./pages/Blog/List";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ListVideo from "./pages/Video/List";
import DetailVideo from "./pages/Video/Detail";

function App() {
  // Form Login & Register Toggle Function
  const [currentForm, setCurrentForm] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {/* Header */}
      <Header />

      {/* Body */}

      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<ListBlog />}></Route>
        <Route path="/blog:id" element={<DetailBLog />}></Route>
        <Route path="/video" element={<ListVideo />}></Route>
        <Route path="/video:id" element={<DetailVideo />}></Route>
        <Route path="/team" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>

      {/* Footer */}
      <div className="h-[100px] sm:h-[300px] flex flex-wrap items-end">
        <Footer />
      </div>
    </div>
  );
}

export default App;
