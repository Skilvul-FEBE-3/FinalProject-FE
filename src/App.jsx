import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Users from './pages/Admin/Users';
import AdminDashboard from './pages/Admin/AdminDashboard';
import HomeComp from './pages/HomeComp';
import RequireLogin from './middleware/RequireLogin';
import RequireAdmin from './middleware/RequireAdmin';
import ListBlog from './pages/Blog/List';
// import AddBlog from './pages/Admin/AddBlog';
import ListVideo from './pages/Video/List';
import About from './pages/About/About';
import DetailBLog from './pages/Blog/Detail';
import DetailVideo from './pages/Video/Detail';
import Home from './pages/Home';
import Register from './pages/Register';
import FAQ from './components/FAQ/FAQ';
// import Register from './pages/Register';

function App() {
  // Form Login & Register Toggle Function
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Body */}
          {/* {currentForm === 'login' ? (
            <Login onFormSwitch={toggleForm} />
          ) : (
            <Register onFormSwitch={toggleForm} />
          )} */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homecomp" element={<HomeComp />} />
          {/* user */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<ListBlog />} />
          <Route path="/blog/:id" element={<DetailBLog />}></Route>
          <Route path="/video" element={<ListVideo />} />
          <Route path="/video/:id" element={<DetailVideo />}></Route>
          <Route path="/team" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          {/* admin */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
          {/* <Route path="/admin/addblog" element={<AddBlog />} /> */}
        </Routes>
        <div className="relative">
          <div className="w-10 h-10 bg-yellow rounded-full bottom-5 fixed flex right-5 cursor-pointer">
            <a href="#" className="text-xl m-auto">
              🔝
            </a>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
