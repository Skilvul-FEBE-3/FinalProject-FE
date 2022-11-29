import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './pages/Login';
import Users from './pages/Admin/Users';
import AdminDashboard from './pages/Admin/AdminDashboard';
import HomeComp from './pages/HomeComp';
import Register from './components/Register';
import RequireLogin from './middleware/RequireLogin';
import RequireAdmin from './middleware/RequireAdmin';
import 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route path="/homecomp" element={<HomeComp />} />
          {/* user */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* admin */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
